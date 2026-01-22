const SUPABASE_URL = 'https://jbvrfyxnyryasmipmisn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpidnJmeXhueXJ5YXNtaXBtaXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5Nzc5NTQsImV4cCI6MjA4NDU1Mzk1NH0.IOcos10RSPxYLSQ09RYm41oOxEopmWYj6O7fu3f0kAA';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUserId = null; // 현재 접속한 사용자 ID

const authModal = document.getElementById('auth-modal');
const authView = document.getElementById('auth-view');
const authError = document.getElementById('auth-error');
const userProfile = document.getElementById('user-profile');
const usernameDisplay = document.getElementById('username-display');
const logoutBtn = document.getElementById('logout-btn');

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

async function handleLogin(e) {
    e.preventDefault();
    const id = document.getElementById('login-id').value;

    // 1. 프로필 조회 (Auth 없이 DB에서 직접 조회)
    const { data, error } = await _supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .maybeSingle();

    if (error || !data) {
        showAuthError("존재하지 않는 이름입니다. '새 이름 만들기'를 해주세요.");
    } else {
        // 로그인 성공 처리
        loginSuccess(data);
    }
}

async function handleSignUp(e) {
    e.preventDefault();
    const id = document.getElementById('signup-id').value;

    // 1. 중복 확인
    const { data: existing } = await _supabase
        .from('profiles')
        .select('id')
        .eq('id', id)
        .maybeSingle();
    
    if (existing) {
        alert("이미 존재하는 이름입니다. 로그인해주세요.");
        showLogin();
        return;
    }

    // 2. 새 프로필 생성 (DB에 직접 저장)
    const newProfile = {
        id: id, // 입력한 ID를 그대로 사용
        username: id,
        gold: 0,
        level: 1,
        exp: 0,
        rod_level: 1,
        line_level: 1,
        inventory: [],
        baits: { "paste": Infinity }, // 기본 미끼 무제한
        selected_bait: "paste",
        updated_at: new Date()
    };

    const { error } = await _supabase.from('profiles').insert(newProfile);
    
    if (error) {
        showAuthError("생성 실패: " + error.message);
    } else {
        alert('등록되었습니다! 게임을 시작합니다.');
        loginSuccess(newProfile);
    }
}

function handleLogout() {
    // 단순 새로고침으로 로그아웃 처리
    location.reload();
}

function showAuthError(message) {
    authError.textContent = message;
    authError.classList.remove('hidden');
}

async function fetchRankingData() {
    // 랭킹 산정 기준 변경: gold, exp, 장비 가치(누적 비용) 합산
    const { data, error } = await _supabase
        .from('profiles')
        .select('username, level, gold, exp, rod_level, line_level')
        // .order()는 JS에서 직접 정렬하므로 제거
        .limit(100); // 정렬을 위해 더 많은 데이터 로드 후 상위 10개만 사용

    if (error) {
        console.error('Error fetching ranking data:', error);
        return [];
    }

    if (!data) return [];

    // 각 플레이어의 총점 계산
    const scoredData = data.map(player => {
        // 낚싯대 누적 업그레이드 비용 계산
        let rodCost = 0;
        for (let i = 1; i < player.rod_level; i++) {
            if (ROD_UPGRADES[i]) {
                rodCost += ROD_UPGRADES[i].cost;
            }
        }

        // 낚싯줄 누적 업그레이드 비용 계산
        let lineCost = 0;
        for (let i = 1; i < player.line_level; i++) {
            if (LINE_UPGRADES[i]) {
                lineCost += LINE_UPGRADES[i].cost;
            }
        }

        // 최종 점수 = 보유 골드 + 경험치 + 장비 총 가치
        const totalScore = player.gold + player.exp + rodCost + lineCost;

        return { ...player, total_score: Math.round(totalScore) };
    });

    // 총점 기준으로 내림차순 정렬 후 상위 10명 반환
    return scoredData.sort((a, b) => b.total_score - a.total_score).slice(0, 10);
}

// 로그인 성공 시 호출되는 공통 함수
function loginSuccess(profile) {
    currentUserId = profile.id;
    localStorage.setItem('lastLoginID', profile.id);
    
    // UI 전환
    authModal.classList.add('hidden');
    usernameDisplay.textContent = profile.username;
    userProfile.classList.remove('hidden');

    // 게임 시작
    if (typeof startGameWithProfile === 'function') {
        startGameWithProfile(profile);
    } else {
        alert("게임 시작 함수를 찾을 수 없습니다.");
    }
}

async function savePlayerData(stats, retryCount = 0) {
    const indicator = document.getElementById('save-indicator');
    if (indicator) {
        indicator.classList.remove('hidden');
        if (retryCount === 0) indicator.textContent = "💾 저장 중...";
        indicator.style.color = "#fbbf24"; // 작업 중: 노란색
    }

    if (!currentUserId) return; // 로그인 안 했으면 저장 안 함

    const updates = {
        id: currentUserId,
        gold: stats.gold,
        level: stats.level,
        exp: stats.exp,
        rod_level: stats.rodLevel,
        line_level: stats.lineLevel,
        inventory: stats.inventory,
        baits: stats.baits,
        selected_bait: stats.selectedBait,
        updated_at: new Date()
    };

    const { error } = await _supabase.from('profiles').upsert(updates);
    if (error) {
        console.error('Error saving player data:', error.message || error); 
        
        // 스키마 오류 감지 (컬럼 없음) - 재시도 하지 않음
        if (error.message && error.message.includes('Could not find the')) {
            if (indicator) {
                indicator.textContent = "⚠️ DB 업데이트 필요";
                indicator.style.color = "#ef4444";
            }
            console.error("Supabase SQL Editor에서 'baits'와 'selected_bait' 컬럼을 추가해주세요.");
            return; 
        }

        // 재시도 로직 (최대 3번)
        if (retryCount < 3) {
            console.log(`Retrying save... (${retryCount + 1}/3)`);
            if (indicator) indicator.textContent = `📡 재시도 중(${retryCount + 1})...`;
            setTimeout(() => savePlayerData(stats, retryCount + 1), 1000); // 1초 후 재시도
            return;
        }

        if (indicator) {
            indicator.textContent = "⚠️ 저장 실패";
            indicator.style.color = "#ef4444";
        }
    } else {
        // 저장 성공 시 잠시 후 표시 숨김
        if (indicator) {
            indicator.textContent = "✅ 저장됨";
            indicator.style.color = "#4ade80";
        }
        setTimeout(() => {
            if (indicator) indicator.classList.add('hidden');
        }, 1000);
    }
}
window.savePlayerData = savePlayerData; // 전역 접근 허용

logoutBtn.addEventListener('click', handleLogout);

// 초기 로드 시 로그인 폼 표시
showLogin();