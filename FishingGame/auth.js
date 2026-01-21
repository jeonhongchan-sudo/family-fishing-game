const SUPABASE_URL = 'https://jbvrfyxnyryasmipmisn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpidnJmeXhueXJ5YXNtaXBtaXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5Nzc5NTQsImV4cCI6MjA4NDU1Mzk1NH0.IOcos10RSPxYLSQ09RYm41oOxEopmWYj6O7fu3f0kAA';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const authModal = document.getElementById('auth-modal');
const authView = document.getElementById('auth-view');
const authError = document.getElementById('auth-error');
const userProfile = document.getElementById('user-profile');
const usernameDisplay = document.getElementById('username-display');
const logoutBtn = document.getElementById('logout-btn');

// 가족 게임을 위한 공통 비밀번호 (사용자에게는 보이지 않음)
const FAMILY_PASSWORD = 'family-fishing-game';

const loginForm = `
    <h2>🎣 가족 로그인</h2>
    <form id="login-form" class="auth-form">
        <input type="text" id="login-id" placeholder="이름 (ID)만 입력하세요" required maxlength="20" />
        <button type="submit">게임 시작하기</button>
    </form>
    <p class="auth-switch">처음 왔나요? <span onclick="showSignUp()">새 이름 만들기</span></p>
`;

const signUpForm = `
    <h2>✨ 새 이름 만들기</h2>
    <form id="signup-form" class="auth-form">
        <input type="text" id="signup-id" placeholder="사용할 이름 (ID)" required maxlength="20" />
        <button type="submit">등록하고 시작하기</button>
    </form>
    <p class="auth-switch">이미 이름이 있나요? <span onclick="showLogin()">로그인</span></p>
`;

function showLogin() {
    authView.innerHTML = loginForm;
    document.getElementById('login-form').addEventListener('submit', handleLogin);

    // 마지막으로 로그인한 ID 불러오기
    const lastID = localStorage.getItem('lastLoginID');
    if (lastID) {
        const loginInput = document.getElementById('login-id');
        if (loginInput) {
            loginInput.value = lastID;
        }
    }
}

function showSignUp() {
    authView.innerHTML = signUpForm;
    document.getElementById('signup-form').addEventListener('submit', handleSignUp);
}

function generateEmailFromId(id) {
    // 한글 및 특수문자 지원을 위해 입력된 ID를 Hex 코드로 변환하여 이메일 생성
    const encoder = new TextEncoder();
    const data = encoder.encode(id);
    const hex = Array.from(data)
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    return `${hex}@family.game`;
}

async function handleLogin(e) {
    e.preventDefault();
    const id = document.getElementById('login-id').value;
    const password = FAMILY_PASSWORD; // 공통 비밀번호 사용
    const email = generateEmailFromId(id); // 아이디를 이메일 형식으로 변환 (한글 지원)

    const { error } = await _supabase.auth.signInWithPassword({ email, password });

    if (error) {
        console.error("Login failed:", error);
        if (error.message.includes("Email not confirmed")) {
            showAuthError("⚠️ 설정 오류: Supabase 대시보드에서 'Confirm email'을 꺼주세요.");
        } else if (error.message.includes("Invalid login credentials")) {
            showAuthError("🚫 아이디가 없거나 비밀번호가 맞지 않습니다.");
        } else {
            showAuthError(`⚠️ 로그인 오류: ${error.message}`);
        }
    } else {
        localStorage.setItem('lastLoginID', id); // 로그인 성공 시 ID 저장
        authModal.classList.add('hidden');
    }
}

async function handleSignUp(e) {
    e.preventDefault();
    const id = document.getElementById('signup-id').value;
    const password = FAMILY_PASSWORD; // 공통 비밀번호 사용
    const email = generateEmailFromId(id); // 아이디를 이메일 형식으로 변환 (한글 지원)

    const { data, error } = await _supabase.auth.signUp({
        email,
        password,
        options: {
            data: { username: id } // handle_new_user 함수에서 사용할 메타데이터
        }
    });

    if (error) {
        // 중복된 사용자 등 에러 처리
        if (error.message.includes("already registered") || error.status === 422) {
            alert("이미 가입된 이름입니다. 로그인 화면으로 이동합니다.");
            localStorage.setItem('lastLoginID', id); // 로그인 화면으로 넘어가기 전에 ID 저장
            showLogin();
        } else {
            showAuthError(error.message);
        }
    } else {
        localStorage.setItem('lastLoginID', id); // 회원가입 성공 시 ID 저장
        
        // 이메일 인증이 켜져 있어서 세션이 없는 경우에만 로그인 화면으로 이동
        if (!data.session) {
            alert('등록되었습니다! (Supabase 이메일 인증 설정을 확인하세요)');
            showLogin();
        }
        // 세션이 있으면 자동으로 로그인되므로 showLogin()을 호출하지 않음
    }
}

async function handleLogout() {
    try {
        // 로그아웃 시도 (에러가 나더라도 무시하고 진행)
        await _supabase.auth.signOut();
    } catch (e) {
        console.error("Logout error:", e);
    } finally {
        // 무조건 페이지 새로고침하여 초기 화면으로 이동
        location.reload();
    }
}

function showAuthError(message) {
    authError.textContent = message;
    authError.classList.remove('hidden');
}

async function fetchRankingData() {
    const { data, error } = await _supabase
        .from('profiles')
        .select('username, level, gold')
        .order('level', { ascending: false })
        .order('gold', { ascending: false })
        .limit(10);

    if (error) {
        console.error('Error fetching ranking data:', error);
        return [];
    }
    return data;
}

async function loadPlayerData() {
    const { data: { user } } = await _supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await _supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    if (error && error.code !== 'PGRST116') { // PGRST116: 행이 없음 (정상)
        console.error('Error loading player data:', error);
        return null;
    }
    return data;
}

async function savePlayerData(stats) {
    const { data: { user } } = await _supabase.auth.getUser();
    if (!user) return;

    const updates = {
        id: user.id,
        gold: stats.gold,
        level: stats.level,
        exp: stats.exp,
        rod_level: stats.rodLevel,
        line_level: stats.lineLevel,
        inventory: stats.inventory,
        updated_at: new Date()
    };

    const { error } = await _supabase.from('profiles').upsert(updates);
    if (error) {
        console.error('Error saving player data:', error);
    }
}

async function createDefaultProfile(user) {
    const defaultProfile = {
        id: user.id,
        username: user.user_metadata.username || user.email.split('@')[0],
        gold: 0,
        level: 1,
        exp: 0,
        rod_level: 1,
        line_level: 1,
        inventory: [],
        updated_at: new Date()
    };

    const { error } = await _supabase.from('profiles').insert(defaultProfile);
    if (error) {
        console.error("Error creating default profile:", error);
        return false;
    }
    return true;
}

// 세션 변경 감지 리스너 설정
_supabase.auth.onAuthStateChange(async (event, session) => {
    if (session) {
        // 로그인 세션이 존재함
        try {
            // 1. 로딩 화면 표시 (모달을 닫지 않고 로딩 메시지 표시 + 로그아웃 버튼)
            authModal.classList.remove('hidden');
            authView.innerHTML = `
                <div style="color:white;text-align:center;padding:20px;">
                    <h3>🎣 낚시터 입장 중...</h3>
                    <p>사용자 정보를 불러오고 있습니다.</p>
                    <button id="loading-logout-btn" style="margin-top:15px; padding: 5px 10px; background: #ef4444; color: white; border: none; border-radius: 5px; cursor: pointer;">취소하고 로그아웃</button>
                </div>`;
            
            const loadingLogoutBtn = document.getElementById('loading-logout-btn');
            if (loadingLogoutBtn) {
                loadingLogoutBtn.addEventListener('click', handleLogout);
            }
            
            // 2. 프로필 데이터 로드 (타임아웃 적용)
            // 5초 동안 응답이 없으면 에러 발생시킴
            const loadWithTimeout = async () => {
                const timeoutPromise = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error("서버 응답이 지연되고 있습니다.")), 5000)
                );
                return Promise.race([loadPlayerData(), timeoutPromise]);
            };

            let profile = await loadWithTimeout();

            // 3. 데이터가 없으면 기본 프로필 생성 시도 (DB가 비어있거나 트리거 실패 시 복구)
            if (!profile) {
                console.log("Profile not found, creating default profile...");
                const { data: { user } } = await _supabase.auth.getUser();
                if (user) {
                    const created = await createDefaultProfile(user);
                    if (created) {
                        profile = await loadPlayerData(); // 생성 후 다시 로드
                    }
                }
            }

            // 4. 결과 처리
            if (profile) {
                usernameDisplay.textContent = profile.username;
                userProfile.classList.remove('hidden');
                
                authModal.classList.add('hidden'); // 로드 완료 후 모달 닫기

                if (typeof startGameWithProfile === 'function') {
                    startGameWithProfile(profile);
                } else {
                    authModal.classList.remove('hidden');
                    throw new Error("게임 시작 함수(startGameWithProfile)를 찾을 수 없습니다.");
                }
            } else {
                throw new Error("프로필 정보를 찾을 수 없습니다.");
            }
        } catch (error) {
            console.error("Auto-login failed:", error);
            
            // 에러 메시지를 화면에 표시 (alert 및 무한 새로고침 방지)
            authView.innerHTML = `
                <div style="text-align:center; padding: 20px; color: white;">
                    <h3 style="color:#ef4444; margin-bottom:10px;">⚠️ 접속 오류</h3>
                    <p style="margin-bottom: 20px; color: #cbd5e1;">${error.message}</p>
                    <button id="error-logout-btn" style="padding: 10px 20px; background: #ef4444; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">다시 로그인하기</button>
                </div>
            `;
            document.getElementById('error-logout-btn').addEventListener('click', handleLogout);
        }
    } else {
        userProfile.classList.add('hidden');
        authModal.classList.remove('hidden');
        showLogin();
    }
});

logoutBtn.addEventListener('click', handleLogout);

// 초기 로드 시 로그인 폼 표시
showLogin();