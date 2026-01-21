// --- 상수 및 데이터 (Constants & Data) ---

const GameState = {
    IDLE: 'IDLE',
    CASTING: 'CASTING',
    WAITING: 'WAITING',
    HOOKING: 'HOOKING',
    REELING: 'REELING',
    CAUGHT: 'CAUGHT'
};

// geminiService.ts에서 가져온 데이터
const WEATHER_OPTIONS = [
    "맑고 화창함", "안개 자욱함", "가랑비 내림", "강한 바람", 
    "구름 많음", "천둥 번개", "태풍 전야", "잔잔한 수면",
    "뜨거운 태양", "시원한 밤공기", "노을 지는 바다"
];

const ADVICE_OPTIONS = [
    "인내는 낚시꾼의 가장 큰 무기입니다.",
    "오늘은 대물이 물어줄 것 같은 기분이네요.",
    "찌의 움직임에 집중하세요.",
    "깊은 곳일수록 더 큰 녀석들이 살고 있답니다.",
    "낚시의 재미는 기다림 뒤에 오는 짜릿한 손맛이죠!"
];

const CONGRATS_PHRASES = {
    Common: ["작지만 귀여운 녀석이군!", "매운탕 거리로 딱이겠어."],
    Uncommon: ["오호, 제법 묵직한데?", "색깔이 아주 예쁜 녀석이야."],
    Rare: ["와! 이건 정말 보기 힘든 놈인데!", "자네, 오늘 운이 아주 좋구만!"],
    Epic: ["세상에! 전설 속의 물고기를 낚았어!", "박물관에 기증해야 할 수준이야!"],
    Legendary: ["말도 안 돼... 전설이 실제로 존재했단 말인가!", "바다가 자네를 선택했군."],
    Mythical: ["신화가 현실이 되었군.", "이건 물고기가 아니야... 살아있는 기적이지."]
};

// 물고기 데이터베이스 확장
const FISH_DATABASE = [
    // Common (흔함)
    { name: "고등어", rarity: "Common", price: 100, exp: 10, emoji: "🐟" },
    { name: "멸치", rarity: "Common", price: 50, exp: 5, emoji: "🐟" },
    { name: "송어", rarity: "Common", price: 120, exp: 12, emoji: "🐟" },
    { name: "붕어", rarity: "Common", price: 80, exp: 8, emoji: "🎏" },
    { name: "망둥어", rarity: "Common", price: 60, exp: 6, emoji: "🦎" },
    { name: "전어", rarity: "Common", price: 110, exp: 11, emoji: "🐟" },
    { name: "꽁치", rarity: "Common", price: 90, exp: 9, emoji: "🐟" },
    { name: "정어리", rarity: "Common", price: 70, exp: 7, emoji: "🐟" },
    { name: "빙어", rarity: "Common", price: 40, exp: 4, emoji: "🐟" },
    { name: "피라미", rarity: "Common", price: 30, exp: 3, emoji: "🐟" },
    
    // Uncommon (드묾)
    { name: "광어", rarity: "Uncommon", price: 300, exp: 30, emoji: "🐠" },
    { name: "우럭", rarity: "Uncommon", price: 350, exp: 35, emoji: "🐟" },
    { name: "오징어", rarity: "Uncommon", price: 400, exp: 40, emoji: "🦑" },
    { name: "문어", rarity: "Uncommon", price: 450, exp: 45, emoji: "🐙" },
    { name: "연어", rarity: "Uncommon", price: 500, exp: 50, emoji: "🍣" },
    { name: "삼치", rarity: "Uncommon", price: 320, exp: 32, emoji: "🦈" },
    { name: "농어", rarity: "Uncommon", price: 380, exp: 38, emoji: "🐟" },
    { name: "도다리", rarity: "Uncommon", price: 310, exp: 31, emoji: "🐠" },
    { name: "쥐치", rarity: "Uncommon", price: 280, exp: 28, emoji: "🐠" },
    { name: "가자미", rarity: "Uncommon", price: 290, exp: 29, emoji: "🐠" },
    { name: "쭈꾸미", rarity: "Uncommon", price: 420, exp: 42, emoji: "🐙" },

    // Rare (희귀)
    { name: "참돔", rarity: "Rare", price: 1000, exp: 100, emoji: "🐡" },
    { name: "돌돔", rarity: "Rare", price: 1200, exp: 120, emoji: "🐡" },
    { name: "복어", rarity: "Rare", price: 1500, exp: 150, emoji: "🐡" },
    { name: "아귀", rarity: "Rare", price: 1300, exp: 130, emoji: "🐠" },
    { name: "쏘가리", rarity: "Rare", price: 1100, exp: 110, emoji: "🐟" },
    { name: "장어", rarity: "Rare", price: 1400, exp: 140, emoji: "🐍" },
    { name: "민어", rarity: "Rare", price: 1600, exp: 160, emoji: "🐡" },
    { name: "방어", rarity: "Rare", price: 1250, exp: 125, emoji: "🐡" },
    { name: "감성돔", rarity: "Rare", price: 1150, exp: 115, emoji: "🐡" },
    { name: "랍스터", rarity: "Rare", price: 1800, exp: 180, emoji: "🦞" },

    // Epic (영웅)
    { name: "다금바리", rarity: "Epic", price: 5000, exp: 500, emoji: "🦈" },
    { name: "참치", rarity: "Epic", price: 6000, exp: 600, emoji: "🐟" },
    { name: "킹크랩", rarity: "Epic", price: 5500, exp: 550, emoji: "🦀" },
    { name: "돗돔", rarity: "Epic", price: 5200, exp: 520, emoji: "🦈" },
    { name: "붉은바다거북", rarity: "Epic", price: 5800, exp: 580, emoji: "🐢" },
    { name: "대왕문어", rarity: "Epic", price: 5300, exp: 530, emoji: "🐙" },
    { name: "철갑상어", rarity: "Epic", price: 6500, exp: 650, emoji: "🦈" },
    { name: "돛새치", rarity: "Epic", price: 6200, exp: 620, emoji: "🦈" },

    // Legendary (전설)
    { name: "청새치", rarity: "Legendary", price: 20000, exp: 2000, emoji: "🐋" },
    { name: "백상아리", rarity: "Legendary", price: 25000, exp: 2500, emoji: "🦈" },
    { name: "황금잉어", rarity: "Legendary", price: 30000, exp: 3000, emoji: "🎏" },
    { name: "범고래", rarity: "Legendary", price: 28000, exp: 2800, emoji: "🐋" },
    { name: "대왕오징어", rarity: "Legendary", price: 22000, exp: 2200, emoji: "🦑" },
    { name: "실러캔스", rarity: "Legendary", price: 35000, exp: 3500, emoji: "🦕" },
    { name: "개복치", rarity: "Legendary", price: 21000, exp: 2100, emoji: "🐠" },

    // Mythical (신화)
    { name: "크라켄", rarity: "Mythical", price: 99999, exp: 10000, emoji: "🦑" },
    { name: "리바이어던", rarity: "Mythical", price: 150000, exp: 15000, emoji: "🐉" },
    { name: "모비딕", rarity: "Mythical", price: 120000, exp: 12000, emoji: "🐋" },
    { name: "히드라", rarity: "Mythical", price: 130000, exp: 13000, emoji: "🐍" }
];

const RARITY_WEIGHTS = {
    Common: 60,
    Uncommon: 25,
    Rare: 10,
    Epic: 4,
    Legendary: 0.9,
    Mythical: 0.1
};

const ROD_UPGRADES = [
    { name: "대나무 낚싯대", cost: 0 },
    { name: "카본 낚싯대", cost: 1000 },
    { name: "티타늄 낚싯대", cost: 5000 },
    { name: "황금 낚싯대", cost: 20000 }
];

const LINE_UPGRADES = [
    { name: "나일론 줄", cost: 0 },
    { name: "합사 줄", cost: 500 },
    { name: "강철 와이어", cost: 2500 },
    { name: "미스릴 줄", cost: 10000 }
];

const BAIT_TYPES = {
    "paste": { name: "떡밥", price: 0, rarities: ["Common", "Uncommon"], emoji: "🍡", description: "기본 미끼. 흔한 물고기만 꼬입니다." },
    "worm": { name: "지렁이", price: 100, rarities: ["Common", "Uncommon", "Rare"], emoji: "🪱", description: "꿈틀거리는 지렁이. 희귀 어종도 좋아합니다." },
    "krill": { name: "크릴새우", price: 500, rarities: ["Common", "Uncommon", "Rare", "Epic"], emoji: "🦐", description: "고급 미끼. 대물들이 냄새를 맡고 옵니다." },
    "lure": { name: "황금 루어", price: 2000, rarities: ["Rare", "Epic", "Legendary", "Mythical"], emoji: "✨", description: "전설의 물고기를 유혹하는 빛나는 루어." }
};

// --- 상태 관리 (State) ---

let playerStats = {
    gold: 0,
    level: 1,
    exp: 0,
    rodLevel: 1,
    lineLevel: 1,
    inventory: [], // { name, count, emoji, rarity, price }
    baits: { "paste": Infinity }, // 보유 미끼
    selectedBait: "paste",        // 현재 선택된 미끼
    
    // 로컬 게임 상태 (DB에 저장 안 함)
    reelingProgress: 0, // 0 ~ 100
    targetFish: null,
    reelingInterval: null,
    isThrashing: false, // 물고기가 저항 중인지 여부
    thrashTimer: 0,     // 저항 지속 시간
    hookTimer: null     // 챔질 타이머
};

let currentState = GameState.IDLE;

// --- DOM 요소 선택 (DOM Elements) ---

const ui = {
    gold: document.getElementById('gold'),
    level: document.getElementById('level'),
    exp: document.getElementById('exp'),
    weather: document.getElementById('weather-display'),
    mainMessage: document.getElementById('main-message'),
    subMessage: document.getElementById('sub-message'),
    bobber: document.getElementById('bobber'),
    fishingLine: document.getElementById('fishing-line'),
    castBtn: document.getElementById('cast-btn'),
    reelBtn: document.getElementById('reel-btn'),
    shopBtn: document.getElementById('shop-btn'),
    inventoryBtn: document.getElementById('inventory-btn'),
    rankingBtn: document.getElementById('ranking-btn'),
    guideBtn: document.getElementById('guide-btn'),
    rankingModal: document.getElementById('ranking-modal'),
    closeRankingBtn: document.getElementById('close-ranking'),
    shopModal: document.getElementById('shop-modal'),
    inventoryModal: document.getElementById('inventory-modal'),
    reelingOverlay: document.getElementById('reeling-overlay'),
    reelingBar: document.getElementById('reeling-bar'),
    fishDistance: document.getElementById('fish-distance'),
    closeShopBtn: document.getElementById('close-shop'),
    closeInventoryBtn: document.getElementById('close-inventory'),
    rodLevel: document.getElementById('rod-level'),
    rodInfo: document.getElementById('rod-info'),
    upgradeRodBtn: document.getElementById('upgrade-rod-btn'),
    lineLevel: document.getElementById('line-level'),
    lineInfo: document.getElementById('line-info'),
    upgradeLineBtn: document.getElementById('upgrade-line-btn'),
    inventoryList: document.getElementById('inventory-list'),
    inventoryTotal: document.getElementById('inventory-total'),
    rankingList: document.getElementById('ranking-list'),
    
    // 획득 모달 요소
    catchModal: document.getElementById('catch-modal'),
    catchTitle: document.getElementById('catch-title'),
    catchEmoji: document.getElementById('catch-emoji'),
    catchName: document.getElementById('catch-name'),
    catchRarity: document.getElementById('catch-rarity'),
    catchPrice: document.getElementById('catch-price'),
    catchCloseBtn: document.getElementById('catch-close-btn'),

    // 도감 요소
    guideModal: document.getElementById('guide-modal'),
    closeGuideBtn: document.getElementById('close-guide')
};

// --- 게임 로직 (Game Logic) ---

function startGameWithProfile(profile) {
    // Supabase에서 불러온 데이터로 playerStats 초기화
    // 데이터베이스에서 숫자가 문자열로 올 경우를 대비해 Number()로 변환
    playerStats.gold = Number(profile.gold) || 0;
    playerStats.level = Number(profile.level) || 1;
    playerStats.exp = Number(profile.exp) || 0;
    playerStats.rodLevel = Number(profile.rod_level) || 1;
    playerStats.lineLevel = Number(profile.line_level) || 1;
    playerStats.inventory = profile.inventory || [];
    playerStats.baits = profile.baits || { "paste": Infinity };
    playerStats.selectedBait = profile.selected_bait || "paste";

    // 떡밥은 항상 무제한 보장
    playerStats.baits["paste"] = Infinity;
    
    // 게임 초기화
    createBaitButton(); // 미끼 버튼 생성
    updateUI();
    setWeather();
    addEventListeners(); // 이벤트 리스너 등록 (버튼 기능 활성화)
}

function addEventListeners() {
    
    ui.castBtn.addEventListener('click', handleCast);
    ui.shopBtn.addEventListener('click', openShop);
    ui.inventoryBtn.addEventListener('click', openInventory);
    ui.rankingBtn.addEventListener('click', openRanking);
    ui.guideBtn.addEventListener('click', openGuide);
    ui.closeRankingBtn.addEventListener('click', closeRanking);
    ui.closeShopBtn.addEventListener('click', closeShop);
    ui.closeInventoryBtn.addEventListener('click', closeInventory);
    ui.upgradeRodBtn.addEventListener('click', () => buyUpgrade('rod'));
    ui.upgradeLineBtn.addEventListener('click', () => buyUpgrade('line'));
    ui.catchCloseBtn.addEventListener('click', closeCatchModal);
    ui.closeGuideBtn.addEventListener('click', closeGuide);

    // 1. 릴링 버튼을 드래그 가능하게 만듦
    makeReelButtonDraggable(ui.reelBtn);

    // 4. 자동 저장 기능: 페이지가 백그라운드로 전환되거나 닫힐 때 데이터 저장
    window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            // 사용자가 로그인한 상태인지 확인 (프로필 UI가 보이는지로 판단)
            const userProfileEl = document.getElementById('user-profile');
            if (userProfileEl && !userProfileEl.classList.contains('hidden')) {
                console.log("페이지가 숨겨져 데이터 자동 저장...");
                savePlayerData(playerStats);
            }
        }
    });
}

// 미끼 버튼 동적 생성 (HTML에 없으므로)
function createBaitButton() {
    if (document.getElementById('bait-btn')) return;
    
    const controls = document.querySelector('.controls');
    const btn = document.createElement('button');
    btn.id = 'bait-btn';
    btn.className = 'btn secondary-btn';
    btn.onclick = toggleBait;
    // 상점 버튼 앞에 추가하거나 맨 뒤에 추가
    controls.appendChild(btn);
}

function toggleBait() {
    const baitKeys = Object.keys(BAIT_TYPES);
    // 보유 중인 미끼만 필터링 (개수가 0보다 크거나 무한대)
    const ownedBaits = baitKeys.filter(k => playerStats.baits[k] > 0 || playerStats.baits[k] === Infinity);
    
    // 미끼가 하나뿐일 때 (기본 미끼만 있을 때) 안내 메시지
    if (ownedBaits.length <= 1) {
        alert("보유한 다른 미끼가 없습니다.\n상점에서 지렁이, 크릴새우 등을 구매하여\n더 좋은 물고기를 잡아보세요!");
        return;
    }

    let currentIndex = ownedBaits.indexOf(playerStats.selectedBait);
    let nextIndex = (currentIndex + 1) % ownedBaits.length;
    playerStats.selectedBait = ownedBaits[nextIndex];
    
    updateUI();

    // 변경 피드백
    const newBait = BAIT_TYPES[playerStats.selectedBait];
    ui.mainMessage.textContent = `미끼 변경: ${newBait.name}`;
    ui.subMessage.textContent = newBait.description;
    if (navigator.vibrate) navigator.vibrate(50);
}

async function updateUI() {
    ui.gold.textContent = playerStats.gold.toLocaleString();
    ui.level.textContent = playerStats.level;
    ui.exp.textContent = playerStats.exp;
    
    // 버튼 상태 업데이트
    if (currentState === GameState.IDLE) {
        ui.castBtn.disabled = false;
        ui.castBtn.innerHTML = '<div class="btn-icon">✨</div><div class="btn-label">낚시하기</div>';
        ui.shopBtn.disabled = false;
        ui.inventoryBtn.disabled = false;
        ui.rankingBtn.disabled = false;
        ui.guideBtn.disabled = false;
        
        ui.castBtn.classList.remove('hidden');
        ui.reelBtn.classList.add('hidden'); // 플로팅 버튼 숨기기
        ui.reelingOverlay.classList.add('hidden');
        ui.bobber.classList.add('hidden');
        updateLinePosition(false); // 줄 숨기기

        // 미끼 버튼 업데이트
        const baitBtn = document.getElementById('bait-btn');
        if (baitBtn) {
            const bait = BAIT_TYPES[playerStats.selectedBait];
            const count = playerStats.baits[playerStats.selectedBait];
            const countText = count === Infinity ? "∞" : count;
            baitBtn.innerHTML = `<div class="btn-icon">${bait.emoji}</div><div class="btn-label">${bait.name} (${countText})</div>`;
        }
    } else {
        ui.castBtn.disabled = true;
        ui.shopBtn.disabled = true;
        ui.inventoryBtn.disabled = true;
        ui.rankingBtn.disabled = true;
        ui.guideBtn.disabled = true;
        
        // 낚시 중에는 미끼 변경 불가
        const baitBtn = document.getElementById('bait-btn');
        if (baitBtn) baitBtn.disabled = true;

        if (currentState === GameState.CASTING) ui.castBtn.innerHTML = '<div class="btn-icon">✨</div><div class="btn-label">던지는 중...</div>';
        if (currentState === GameState.WAITING) ui.castBtn.innerHTML = '<div class="btn-icon">...</div><div class="btn-label">기다리는 중...</div>';
        
        // 낚시 중(던지기, 대기, 릴링)에는 릴링 버튼 표시 (대기 중엔 흰색, 히트 시 빨간색)
        ui.reelBtn.classList.remove('hidden');

        if (currentState === GameState.REELING || currentState === GameState.HOOKING) {
            ui.castBtn.classList.add('hidden'); // 낚시하기 버튼 숨기기
            ui.reelBtn.classList.add('hit'); // 빨간색 활성화 (Hit!)
            ui.reelingOverlay.classList.remove('hidden');
        } else {
            ui.reelBtn.classList.remove('hit'); // 흰색 대기 상태
        }
    }
}

function setWeather() {
    const randomWeather = WEATHER_OPTIONS[Math.floor(Math.random() * WEATHER_OPTIONS.length)];
    ui.weather.textContent = `날씨: ${randomWeather}`;
}

// 낚싯줄 그리기 (SVG 좌표 업데이트)
function updateLinePosition(visible, bobberX, bobberY) {
    if (!visible) {
        ui.fishingLine.setAttribute('stroke', 'transparent');
        return;
    }
    
    // 낚싯대 끝 위치 (대략적인 고정값, 화면 크기에 따라 조정 필요할 수 있음)
    // .boat-container가 중앙 하단에 있으므로 그 근처 좌표
    const rodTipX = "50%"; 
    const rodTipY = "50%"; // 배 위쪽

    // SVG line은 % 단위를 직접 쓰기 어려우므로 JS로 계산하거나, 
    // 간단하게 CSS로 처리하기 위해 HTML 구조상 고정 좌표를 사용합니다.
    // 여기서는 간단히 낚싯대 끝을 화면 중앙 약간 왼쪽으로 가정
    const containerRect = document.querySelector('.visual-area').getBoundingClientRect();
    const startX = containerRect.width / 2 - 20; 
    const startY = containerRect.height - 80;

    ui.fishingLine.setAttribute('x1', startX);
    ui.fishingLine.setAttribute('y1', startY);
    ui.fishingLine.setAttribute('x2', bobberX + 10); // 찌의 중심
    ui.fishingLine.setAttribute('y2', bobberY + 10);
    ui.fishingLine.setAttribute('stroke', 'white');
}

async function handleCast() {
    if (currentState !== GameState.IDLE) return;

    // 미끼 확인
    const currentBaitCount = playerStats.baits[playerStats.selectedBait];
    if (currentBaitCount <= 0 && currentBaitCount !== Infinity) {
        alert("선택한 미끼가 다 떨어졌습니다! 기본 미끼(떡밥)로 변경합니다.");
        playerStats.selectedBait = "paste";
        updateUI();
        return;
    }

    // 1. 캐스팅 (Casting)
    currentState = GameState.CASTING;
    ui.mainMessage.textContent = "찌를 던집니다...";
    ui.subMessage.textContent = "멀리 날아가네요!";
    updateUI();

    // 찌 던지는 애니메이션 시뮬레이션
    ui.bobber.classList.remove('hidden');
    ui.bobber.style.top = '80%'; // 배 근처에서 시작
    ui.bobber.style.left = '50%';
    
    await wait(100);
    
    // 찌가 날아가는 위치 (랜덤)
    const targetTop = 40 + Math.random() * 20 + '%'; // 바다 중간
    const targetLeft = 20 + Math.random() * 60 + '%';
    
    ui.bobber.style.top = targetTop;
    ui.bobber.style.left = targetLeft;

    // 줄 업데이트 (애니메이션 동안은 대략적으로 처리되거나 CSS transition 사용)
    // 실제로는 requestAnimationFrame으로 줄을 계속 그려야 자연스럽지만, 
    // 여기서는 도착 후 줄을 연결합니다.
    await wait(1000);
    
    // 줄 연결
    const bobberRect = ui.bobber.getBoundingClientRect();
    const containerRect = document.querySelector('.visual-area').getBoundingClientRect();
    updateLinePosition(true, ui.bobber.offsetLeft, ui.bobber.offsetTop);

    // 2. 기다림 (Waiting)
    currentState = GameState.WAITING;
    const advice = ADVICE_OPTIONS[Math.floor(Math.random() * ADVICE_OPTIONS.length)];
    ui.mainMessage.textContent = "입질을 기다리는 중...";
    ui.subMessage.textContent = advice;
    updateUI();

    // 랜덤 대기 시간 (2~4초)
    const waitTime = 2000 + Math.random() * 3000;
    await wait(waitTime);

    // 기다리는 도중 상태가 변했다면(유저가 미리 클릭해서 실패 등) 중단
    if (currentState !== GameState.WAITING) return;

    // 3. 챔질 단계 (Hooking) 시작
    startHookingPhase();
}

function startHookingPhase() {
    currentState = GameState.HOOKING;
    
    // 미끼 소모 (입질이 왔을 때 소모)
    if (playerStats.baits[playerStats.selectedBait] !== Infinity) {
        playerStats.baits[playerStats.selectedBait]--;
        // 개수가 0이 되면 UI 업데이트를 위해 저장
        if (playerStats.baits[playerStats.selectedBait] < 0) playerStats.baits[playerStats.selectedBait] = 0;
        savePlayerData(playerStats);
    }
    updateUI(); // 미끼 개수 갱신

    // 물고기 미리 결정 (등급에 따른 챔질 시간 설정을 위해)
    playerStats.targetFish = catchRandomFish();
    
    // 희귀도에 따른 챔질 허용 시간 (반응 속도)
    let hookWindow = 1000; // 기본 1초
    const rarity = playerStats.targetFish.rarity;
    
    if (rarity === 'Common') hookWindow = 1200;
    else if (rarity === 'Uncommon') hookWindow = 1000;
    else if (rarity === 'Rare') hookWindow = 800;
    else if (rarity === 'Epic') hookWindow = 650;
    else if (rarity === 'Legendary') hookWindow = 500;
    else if (rarity === 'Mythical') hookWindow = 400; // 0.4초 안에 반응해야 함

    // 시각/청각 효과
    ui.mainMessage.textContent = "!!!";
    ui.subMessage.textContent = "지금 당기세요!! (터치)";
    ui.mainMessage.style.color = "#ef4444";
    ui.bobber.style.animation = "bobber-bite 0.2s infinite"; // 격렬하게 흔들림
    updateUI();

    // 진동 피드백 (강한 진동)
    if (navigator.vibrate) navigator.vibrate(200);

    // 시간 초과 체크 (너무 늦음)
    if (playerStats.hookTimer) clearTimeout(playerStats.hookTimer);
    playerStats.hookTimer = setTimeout(() => {
        if (currentState === GameState.HOOKING) {
            handleHookFail("late");
        }
    }, hookWindow);
}

function handleHookFail(reason) {
    currentState = GameState.IDLE;
    ui.bobber.style.animation = "bobber-float 1s ease-in-out infinite";
    ui.mainMessage.style.color = "white";
    
    if (reason === "early") {
        ui.mainMessage.textContent = "너무 빨랐습니다!";
        ui.subMessage.textContent = "물고기가 놀라서 도망갔네요.";
    } else {
        ui.mainMessage.textContent = "놓쳤습니다...";
        ui.subMessage.textContent = "반응이 너무 늦었어요.";
    }
    
    updateUI();
}

// --- 릴링 미니게임 로직 ---

function startReelingGame() {
    // 물고기는 startHookingPhase에서 이미 결정됨
    if (!playerStats.targetFish) playerStats.targetFish = catchRandomFish();

    playerStats.reelingProgress = 30; // 시작 게이지 30%
    playerStats.isThrashing = false;
    playerStats.thrashTimer = 0;
    
    // 물고기 등급에 따른 난이도 설정
    let baseDrain = 0.8; // 기본 감소율 상향 (기존 0.5)
    const rarity = playerStats.targetFish.rarity;
    let thrashChance = 0.02; // 틱당 저항 확률 (2%)
    
    if (rarity === 'Uncommon') { baseDrain = 1.2; thrashChance = 0.04; }
    if (rarity === 'Rare') { baseDrain = 1.8; thrashChance = 0.06; }
    if (rarity === 'Epic') { baseDrain = 2.5; thrashChance = 0.08; }
    if (rarity === 'Legendary') { baseDrain = 3.5; thrashChance = 0.12; }
    if (rarity === 'Mythical') { baseDrain = 5.0; thrashChance = 0.15; }

    // 낚싯줄 레벨이 높으면 감소율 완화
    baseDrain = Math.max(0.3, baseDrain - (playerStats.lineLevel * 0.15));

    // 게임 루프
    if (playerStats.reelingInterval) clearInterval(playerStats.reelingInterval);
    
    playerStats.reelingInterval = setInterval(() => {
        // 1. 저항(Thrashing) 상태 관리
        if (playerStats.isThrashing) {
            playerStats.thrashTimer--;
            if (playerStats.thrashTimer <= 0) {
                playerStats.isThrashing = false;
                ui.reelingBar.style.filter = "none"; // 시각 효과 해제
            }
        } else {
            // 랜덤하게 저항 상태 진입
            if (Math.random() < thrashChance) {
                playerStats.isThrashing = true;
                playerStats.thrashTimer = 20 + Math.random() * 30; // 1~2.5초간 지속
                
                // 저항 시작 시 강한 진동 (손맛)
                if (navigator.vibrate) navigator.vibrate(200);
                
                // 시각적 효과
                ui.mainMessage.textContent = "물고기가 저항합니다!!";
                ui.mainMessage.style.color = "#ef4444";
            } else {
                ui.mainMessage.style.color = "white";
            }
        }

        // 2. 게이지 감소 계산
        let currentDrain = baseDrain;
        
        if (playerStats.isThrashing) {
            // 저항 중일 때는 감소량이 2.5배
            currentDrain *= 2.5;
            // 찌가 미친듯이 흔들림
            ui.bobber.style.transform = `translate(${Math.random()*10 - 5}px, ${Math.random()*10 - 5}px)`;
        }

        playerStats.reelingProgress -= currentDrain;
        updateReelingUI();

        // 실패 조건
        if (playerStats.reelingProgress <= 0) {
            endReeling(false);
        }
        // 성공 조건
        if (playerStats.reelingProgress >= 100) {
            endReeling(true);
        }
    }, 50); // 0.05초마다 업데이트
}

function handleReelClick() {
    // 1. 대기 중 클릭 (너무 빠름 - 실패)
    if (currentState === GameState.WAITING) {
        handleHookFail("early");
        return;
    }

    // 2. 챔질 타이밍 클릭 (성공)
    if (currentState === GameState.HOOKING) {
        if (playerStats.hookTimer) clearTimeout(playerStats.hookTimer);
        
        // 릴링 상태로 전환
        currentState = GameState.REELING;
        ui.mainMessage.textContent = "히트!! 무언가 물었습니다!";
        ui.subMessage.textContent = "릴 감기 버튼을 연타하세요!";
        ui.mainMessage.style.color = "white";
        ui.bobber.style.animation = "bobber-bite 0.5s infinite";
        
        updateUI();
        startReelingGame();
        return;
    }

    if (currentState !== GameState.REELING) return;

    // 릴 감을 때 약한 진동 (기계적인 느낌)
    if (navigator.vibrate) navigator.vibrate(15);

    // 낚싯대 레벨에 따른 게이지 증가량
    let reelPower = 4 + (playerStats.rodLevel * 0.6);

    // 물고기가 저항 중일 때는 릴 감는 효율이 50%로 감소 (당기는 힘 구현)
    if (playerStats.isThrashing) {
        reelPower *= 0.5;
        // 저항 중 클릭 시 찌가 더 크게 튐
        ui.bobber.style.top = (parseFloat(ui.bobber.style.top) + 2) + '%';
    } else {
        // 평소에는 찌가 당겨짐
        ui.bobber.style.top = (parseFloat(ui.bobber.style.top) + 1) + '%';
    }
    
    playerStats.reelingProgress += reelPower;
    
    updateReelingUI();
}

function updateReelingUI() {
    // 게이지 바 업데이트
    const progress = Math.max(0, Math.min(100, playerStats.reelingProgress));
    ui.reelingBar.style.width = `${progress}%`;
    
    // 색상 변경 (위험하면 빨강)
    if (progress < 30) ui.reelingBar.style.backgroundColor = '#ef4444';
    else if (progress > 80) ui.reelingBar.style.backgroundColor = '#22c55e';
    else ui.reelingBar.style.backgroundColor = '#eab308';

    // 저항 중일 때 바 색상 깜빡임 효과
    if (playerStats.isThrashing) {
        const isRed = Math.floor(Date.now() / 100) % 2 === 0;
        ui.reelingBar.style.backgroundColor = isRed ? '#ef4444' : '#ffffff';
    }

    // 남은 거리 표시 (역으로 계산)
    const distance = Math.floor(100 - progress);
    ui.fishDistance.textContent = distance;
}

async function endReeling(isSuccess) {
    clearInterval(playerStats.reelingInterval);
    ui.bobber.style.animation = "bobber-float 1s ease-in-out infinite"; // 애니메이션 복구
    ui.mainMessage.style.color = "white"; // 메시지 색상 복구

    if (isSuccess) {
        // 물고기 잡음
        const caughtFish = playerStats.targetFish;
        
        // 보상 지급
        playerStats.exp += (caughtFish.exp || 10);
        // 즉시 골드 획득으로 변경
        playerStats.gold += caughtFish.price;
        
        addToInventory(caughtFish);
        
        let leveledUp = false;
        // 레벨업 체크
        if (playerStats.exp >= playerStats.level * 100) {
            playerStats.level++;
            playerStats.exp = 0;
            leveledUp = true;
        }

        // 코멘트 생성
        const phrases = CONGRATS_PHRASES[caughtFish.rarity] || CONGRATS_PHRASES['Common'];
        const comment = phrases[Math.floor(Math.random() * phrases.length)];

        ui.mainMessage.textContent = `${caughtFish.name}을(를) 잡았습니다!`;
        ui.subMessage.textContent = `${comment} (즉시 ${caughtFish.price.toLocaleString()} G 획득!)`;
        
        // 획득 팝업 표시
        showCatchModal(caughtFish);

        // 데이터 저장 (Alert 뜨기 전에 저장!)
        await savePlayerData(playerStats);

        if (leveledUp) {
            setTimeout(() => alert("🎉 레벨 업! 더 좋은 낚시꾼이 되었습니다."), 100);
        }
    } else {
        // 실패
        ui.mainMessage.textContent = "놓쳤습니다...";
        ui.subMessage.textContent = "미끼만 먹고 도망갔네요.";
    }

    currentState = GameState.IDLE;
    updateUI();
    setWeather(); // 날씨 변경
}

function showCatchModal(fish) {
    // 문구 랜덤 변경
    const titles = ["🎉 월척이다!", "🎣 나이스 캐치!", "✨ 대박!", "🌊 바다의 선물!", "🐟 잡았다!"];
    ui.catchTitle.textContent = titles[Math.floor(Math.random() * titles.length)];

    ui.catchEmoji.textContent = fish.emoji;
    ui.catchName.textContent = fish.name;
    ui.catchRarity.textContent = fish.rarity;
    ui.catchPrice.textContent = `💰 ${fish.price.toLocaleString()} G`;
    
    // 희귀도에 따른 텍스트 색상 변경
    const colors = {
        "Common": "#94a3b8",
        "Uncommon": "#22c55e",
        "Rare": "#3b82f6",
        "Epic": "#a855f7",
        "Legendary": "#eab308",
        "Mythical": "#ef4444"
    };
    ui.catchRarity.style.color = colors[fish.rarity] || "white";
    ui.catchRarity.style.borderColor = colors[fish.rarity] || "white";
    
    // 3. 확인 버튼 오클릭 방지
    ui.catchCloseBtn.disabled = true;
    setTimeout(() => {
        ui.catchCloseBtn.disabled = false;
    }, 1000); // 1초 후 버튼 활성화

    ui.catchModal.classList.remove('hidden');

    // 폭죽 효과 (Confetti)
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 1000 // 모달 위에 표시되도록 설정
        });
    }
}

function closeCatchModal() {
    ui.catchModal.classList.add('hidden');
}

function catchRandomFish() {
    // 희귀도 가중치 기반 랜덤 선택
    let selectedRarity = "Common";

    // 미끼에 따른 잡을 수 있는 희귀도 목록 가져오기
    const allowedRarities = new Set(BAIT_TYPES[playerStats.selectedBait].rarities);

    // 허용된 희귀도 내에서 가중치 계산
    let totalWeight = 0;
    const activeWeights = {};

    for (const [rarity, weight] of Object.entries(RARITY_WEIGHTS)) {
        if (allowedRarities.has(rarity)) {
            activeWeights[rarity] = weight;
            totalWeight += weight;
        }
    }

    const rand = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (const [rarity, weight] of Object.entries(activeWeights)) {
        cumulativeWeight += weight;
        if (rand <= cumulativeWeight) {
            selectedRarity = rarity;
            break;
        }
    }

    // 해당 희귀도의 물고기들 중 하나 선택
    const candidates = FISH_DATABASE.filter(f => f.rarity === selectedRarity);
    // 만약 계산 오류로 후보가 없으면 Common에서 선택
    const finalCandidates = candidates.length > 0 ? candidates : FISH_DATABASE.filter(f => f.rarity === "Common");
    
    return finalCandidates[Math.floor(Math.random() * finalCandidates.length)];
}

function addToInventory(fish) {
    const existingItem = playerStats.inventory.find(item => item.name === fish.name);
    if (existingItem) {
        existingItem.count++;
    } else {
        playerStats.inventory.push({
            ...fish,
            count: 1
        });
    }
    // 골드는 endReeling에서 즉시 획득함
}

// 게임 시작 함수는 auth.js에서 호출하므로 여기서는 삭제
// initGame();

// --- 상점 로직 (Shop Logic) ---

function openShop() {
    updateShopUI();
    ui.shopModal.classList.remove('hidden');
}

function closeShop() {
    ui.shopModal.classList.add('hidden');
}

function updateShopUI() {
    // 낚싯대 UI
    const currentRod = ROD_UPGRADES[playerStats.rodLevel - 1];
    const nextRod = ROD_UPGRADES[playerStats.rodLevel];
    
    ui.rodLevel.textContent = playerStats.rodLevel;
    if (nextRod) {
        ui.rodInfo.innerHTML = `현재: ${currentRod.name}<br><span style="color:#38bdf8">다음: ${nextRod.name} (${nextRod.cost}G)</span>`;
        ui.upgradeRodBtn.disabled = playerStats.gold < nextRod.cost;
        ui.upgradeRodBtn.textContent = "강화하기";
    } else {
        ui.rodInfo.textContent = `현재: ${currentRod.name} (최고 레벨)`;
        ui.upgradeRodBtn.disabled = true;
        ui.upgradeRodBtn.textContent = "최고 레벨";
    }

    // 미끼 상점 UI 추가 (기존 요소 뒤에 추가)
    let baitSection = document.getElementById('bait-shop-section');
    if (!baitSection) {
        baitSection = document.createElement('div');
        baitSection.id = 'bait-shop-section';
        baitSection.className = 'shop-item';
        baitSection.innerHTML = `<h3>🦐 미끼 구매 (10개 묶음)</h3><div class="bait-shop-grid" id="bait-shop-grid"></div>`;
        // 낚싯줄 섹션 뒤에 삽입
        ui.lineInfo.parentElement.parentElement.after(baitSection);
    }

    const baitGrid = document.getElementById('bait-shop-grid');
    baitGrid.innerHTML = Object.entries(BAIT_TYPES).map(([key, bait]) => {
        if (bait.price === 0) return ''; // 기본 미끼는 판매 안 함
        const canBuy = playerStats.gold >= bait.price;
        return `<button class="btn secondary-btn" onclick="buyBait('${key}')" ${canBuy ? '' : 'disabled'} style="font-size:0.8rem; height:auto; padding:10px;">${bait.emoji} ${bait.name}<br><span style="color:#fbbf24">${bait.price}G</span></button>`;
    }).join('');

    // 낚싯줄 UI
    const currentLine = LINE_UPGRADES[playerStats.lineLevel - 1];
    const nextLine = LINE_UPGRADES[playerStats.lineLevel];

    ui.lineLevel.textContent = playerStats.lineLevel;
    if (nextLine) {
        ui.lineInfo.innerHTML = `현재: ${currentLine.name}<br><span style="color:#38bdf8">다음: ${nextLine.name} (${nextLine.cost}G)</span>`;
        ui.upgradeLineBtn.disabled = playerStats.gold < nextLine.cost;
        ui.upgradeLineBtn.textContent = "강화하기";
    } else {
        ui.lineInfo.textContent = `현재: ${currentLine.name} (최고 레벨)`;
        ui.upgradeLineBtn.disabled = true;
        ui.upgradeLineBtn.textContent = "최고 레벨";
    }
}

function buyUpgrade(type) {
    if (type === 'rod') {
        const nextRod = ROD_UPGRADES[playerStats.rodLevel];
        if (nextRod && playerStats.gold >= nextRod.cost) {
            playerStats.gold -= nextRod.cost;
            playerStats.rodLevel++;
            alert(`${nextRod.name}로 업그레이드 완료!`);
            updateShopUI();
            savePlayerData(playerStats); // 데이터 저장
            updateUI(); // UI 업데이트
        }
    } else if (type === 'line') {
        const nextLine = LINE_UPGRADES[playerStats.lineLevel];
        if (nextLine && playerStats.gold >= nextLine.cost) {
            playerStats.gold -= nextLine.cost;
            playerStats.lineLevel++;
            alert(`${nextLine.name}로 업그레이드 완료!`);
            updateShopUI();
            savePlayerData(playerStats); // 데이터 저장
            updateUI();
        }
    }
}

function buyBait(type) {
    const bait = BAIT_TYPES[type];
    if (playerStats.gold >= bait.price) {
        playerStats.gold -= bait.price;
        if (!playerStats.baits[type]) playerStats.baits[type] = 0;
        playerStats.baits[type] += 10; // 10개씩 구매
        
        alert(`${bait.name} 10개를 구매했습니다!`);
        updateShopUI();
        updateUI();
        savePlayerData(playerStats);
    }
}

// --- 인벤토리 로직 (Inventory Logic) ---

function openInventory() {
    updateInventoryUI();
    ui.inventoryModal.classList.remove('hidden');
}

function closeInventory() {
    ui.inventoryModal.classList.add('hidden');
}

function updateInventoryUI() {
    ui.inventoryList.innerHTML = '';
    // 총 가치 계산 로직 제거

    if (playerStats.inventory.length === 0) {
        ui.inventoryList.innerHTML = '<div class="empty-msg">가방이 비었습니다.</div>';
    } else {
        // 희귀도 순 정렬 (Mythical -> Common)
        const rarityOrder = { "Mythical": 6, "Legendary": 5, "Epic": 4, "Rare": 3, "Uncommon": 2, "Common": 1 };
        
        const sortedInventory = [...playerStats.inventory].sort((a, b) => {
            return rarityOrder[b.rarity] - rarityOrder[a.rarity];
        });

        sortedInventory.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = `inventory-item rarity-${item.rarity.toLowerCase()}`;
            itemEl.innerHTML = `
                <div class="inv-emoji">${item.emoji}</div>
                <div class="inv-info">
                    <div class="inv-name">${item.name} <span class="inv-count">x${item.count}</span></div>
                    <div class="inv-price">${item.price} G</div>
                </div>
            `;
            ui.inventoryList.appendChild(itemEl);
        });
    }
}

// --- 랭킹 로직 (Ranking Logic) ---

async function openRanking() {
    ui.rankingModal.classList.remove('hidden');
    ui.rankingList.innerHTML = '<div class="ranking-loading">랭킹을 불러오는 중...</div>';
    
    const rankingData = await fetchRankingData(); // auth.js에 있는 함수 호출
    updateRankingUI(rankingData);
}

function closeRanking() {
    ui.rankingModal.classList.add('hidden');
}

function updateRankingUI(data) {
    ui.rankingList.innerHTML = '';
    if (!data || data.length === 0) {
        ui.rankingList.innerHTML = '<div class="ranking-loading">랭킹 정보가 없습니다.</div>';
        return;
    }

    data.forEach((player, index) => {
        const rank = index + 1;
        const itemEl = document.createElement('div');
        itemEl.className = `ranking-item rank-${rank}`;
        
        itemEl.innerHTML = `
            <div class="ranking-rank">${rank}</div>
            <div class="ranking-info">
                <div class="ranking-username">👤 ${player.username}</div>
                <div class="ranking-stats">
                    ⭐ Lv.${player.level} / 💰 ${player.gold.toLocaleString()} G
                </div>
            </div>
        `;
        ui.rankingList.appendChild(itemEl);
    });
}

// --- 도감(가이드) 로직 ---

function openGuide() {
    ui.guideModal.classList.remove('hidden');
    renderFishGuide(); // 기본적으로 물고기 탭 표시
    
    // 탭 이벤트 리스너 설정
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            if (tab.dataset.tab === 'fish') renderFishGuide();
            else renderEquipmentGuide();
        });
    });
}

function closeGuide() {
    ui.guideModal.classList.add('hidden');
}

function renderFishGuide() {
    const guideBody = document.getElementById('guide-body');
    guideBody.innerHTML = '';

    const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythical"];
    const reqRod = {
        "Common": "기본 낚싯대 (Lv.1)",
        "Uncommon": "기본 낚싯대 (Lv.1)",
        "Rare": "카본 낚싯대 (Lv.2)",
        "Epic": "티타늄 낚싯대 (Lv.3)",
        "Legendary": "황금 낚싯대 (Lv.4)",
        "Mythical": "황금 낚싯대 (Lv.4)"
    };

    rarities.forEach(rarity => {
        const fishes = FISH_DATABASE.filter(f => f.rarity === rarity);
        if (fishes.length === 0) return;

        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'guide-section-title';
        sectionTitle.textContent = `${rarity} 등급 (필요: ${reqRod[rarity]})`;
        guideBody.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'guide-grid';

        fishes.forEach(fish => {
            const card = document.createElement('div');
            card.className = `guide-card rarity-${rarity.toLowerCase()}`;
            card.innerHTML = `
                <div class="guide-emoji">${fish.emoji}</div>
                <div class="guide-name">${fish.name}</div>
                <div class="guide-stats">💰 ${fish.price.toLocaleString()} G<br>✨ ${fish.exp} EXP</div>
            `;
            grid.appendChild(card);
        });
        guideBody.appendChild(grid);
    });
}

function renderEquipmentGuide() {
    const guideBody = document.getElementById('guide-body');
    guideBody.innerHTML = '';

    // 낚싯대 섹션
    const rodTitle = document.createElement('div');
    rodTitle.className = 'guide-section-title';
    rodTitle.textContent = '🎣 낚싯대 (희귀 물고기 잠금 해제)';
    guideBody.appendChild(rodTitle);

    const rodList = document.createElement('div');
    rodList.className = 'equip-list';
    
    const rodEffects = [
        "기본 물고기 획득 가능",
        "희귀(Rare) 물고기 획득 가능",
        "영웅(Epic) 물고기 획득 가능",
        "전설/신화(Legendary/Mythical) 획득 가능"
    ];

    ROD_UPGRADES.forEach((rod, index) => {
        const card = document.createElement('div');
        card.className = 'guide-card equip-card';
        card.innerHTML = `
            <div class="guide-emoji">🎣</div>
            <div style="flex:1">
                <div class="guide-name">${rod.name} (Lv.${index + 1})</div>
                <div class="guide-stats">비용: ${rod.cost === 0 ? '기본 지급' : rod.cost.toLocaleString() + ' G'}</div>
                <div class="guide-req">${rodEffects[index] || '공격력 증가'}</div>
            </div>
        `;
        rodList.appendChild(card);
    });
    guideBody.appendChild(rodList);

    // 낚싯줄 섹션
    const lineTitle = document.createElement('div');
    lineTitle.className = 'guide-section-title';
    lineTitle.textContent = '🧵 낚싯줄 (물고기 저항 감소)';
    guideBody.appendChild(lineTitle);

    const lineList = document.createElement('div');
    lineList.className = 'equip-list';

    LINE_UPGRADES.forEach((line, index) => {
        const card = document.createElement('div');
        card.className = 'guide-card equip-card';
        card.innerHTML = `
            <div class="guide-emoji">🧵</div>
            <div style="flex:1">
                <div class="guide-name">${line.name} (Lv.${index + 1})</div>
                <div class="guide-stats">비용: ${line.cost === 0 ? '기본 지급' : line.cost.toLocaleString() + ' G'}</div>
                <div class="guide-req">줄 끊어짐 방지 효과 ${index + 1}단계</div>
            </div>
        `;
        lineList.appendChild(card);
    });
    guideBody.appendChild(lineList);
}

window.buyBait = buyBait; // HTML onclick에서 접근 가능하도록 전역 노출

// --- 1. 릴링 버튼 드래그 기능 ---
function makeReelButtonDraggable(element) {
    let isDragging = false;
    let hasDragged = false;
    let startX, startY, initialLeft, initialTop;

    const onDown = (e) => {
        // 게임이 진행 중(던지기, 대기, 릴링)이면 드래그 허용
        if (currentState === GameState.IDLE) return;

        hasDragged = false;
        isDragging = true;
        
        const touch = e.touches ? e.touches[0] : e;
        startX = touch.clientX;
        startY = touch.clientY;
        
        initialLeft = element.offsetLeft;
        initialTop = element.offsetTop;

        element.style.transition = 'none'; // 드래그 중에는 애니메이션 효과 제거

        document.addEventListener('mousemove', onMove);
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('mouseup', onUp);
        document.addEventListener('touchend', onUp);
    };

    const onMove = (e) => {
        if (!isDragging) return;
        e.preventDefault(); // 모바일에서 스크롤 방지

        const touch = e.touches ? e.touches[0] : e;
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        // 일정 거리 이상 움직이면 '드래그'로 간주
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            hasDragged = true;
        }
        
        const gameContainer = document.querySelector('.game-container');
        const containerRect = gameContainer.getBoundingClientRect();
        
        let newX = Math.max(0, Math.min(initialLeft + deltaX, containerRect.width - element.offsetWidth));
        let newY = Math.max(0, Math.min(initialTop + deltaY, containerRect.height - element.offsetHeight));

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
        element.style.bottom = 'auto';
        element.style.right = 'auto';
    };

    const onUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        element.style.transition = ''; // 애니메이션 효과 복구

        // 드래그하지 않았다면 '클릭'으로 처리
        if (!hasDragged) {
            handleReelClick(e);
        }

        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('touchend', onUp);
    };

    // 기존의 click 이벤트 대신 mousedown/touchstart로 로직 통합
    element.addEventListener('mousedown', onDown);
    element.addEventListener('touchstart', onDown, { passive: false });
}

// 유틸리티 함수
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}