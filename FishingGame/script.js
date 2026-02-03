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
    { name: "맑고 화창함", className: "sunny", effect: "sunny" },
    { name: "안개 자욱함", className: "foggy", effect: "foggy" },
    { name: "가랑비 내림", className: "rainy", effect: "rainy" },
    { name: "강한 바람", className: "windy", effect: "windy" },
    { name: "구름 많음", className: "cloudy", effect: "cloudy" },
    { name: "천둥 번개", className: "stormy", effect: "stormy" },
    { name: "시원한 밤공기", className: "night", effect: "night" },
    { name: "노을 지는 바다", className: "sunset", effect: "sunset" }
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

const JUNK_ITEMS = [
    { name: "낡은 장화", emoji: "👢", message: "이걸 신으라고? 발냄새가 여기까지 나는 것 같아!" },
    { name: "빈 통조림", emoji: "🥫", message: "참치...는 없고 캔만 덩그러니." },
    { name: "불가사리", emoji: "⭐", message: "이런, 뚱인데요? 아무짝에도 쓸모가 없다." },
    { name: "해초", emoji: "🌿", message: "미역국이나 끓여야 하나... 낚싯줄만 엉켰네." }
];
const JUNK_CHANCE = 0.10; // 10% 확률로 쓰레기 획득

// 물고기 데이터베이스 확장
const FISH_DATABASE = [
    // Common (흔함)
    { name: "고등어", rarity: "Common", price: 100, exp: 10, emoji: "🐟" },
    { name: "멸치", rarity: "Common", price: 50, exp: 5, emoji: "🐟" },
    { name: "송어", rarity: "Common", price: 120, exp: 12, emoji: "🐠" },
    { name: "붕어", rarity: "Common", price: 80, exp: 8, emoji: "🐠" },
    { name: "망둥어", rarity: "Common", price: 60, exp: 6, emoji: "🐟" },
    { name: "전어", rarity: "Common", price: 110, exp: 11, emoji: "🐟" },
    { name: "꽁치", rarity: "Common", price: 90, exp: 9, emoji: "🐟" },
    { name: "정어리", rarity: "Common", price: 70, exp: 7, emoji: "🐟" },
    { name: "빙어", rarity: "Common", price: 40, exp: 4, emoji: "🐟" },
    { name: "피라미", rarity: "Common", price: 30, exp: 3, emoji: "🐟" },
    
    // Uncommon (드묾)
    { name: "광어", rarity: "Uncommon", price: 300, exp: 30, emoji: "🐟" },
    { name: "우럭", rarity: "Uncommon", price: 350, exp: 35, emoji: "🐟" },
    { name: "오징어", rarity: "Uncommon", price: 400, exp: 40, emoji: "🦑", weather: "night" },
    { name: "문어", rarity: "Uncommon", price: 450, exp: 45, emoji: "🐙", weather: "night" },
    { name: "연어", rarity: "Uncommon", price: 500, exp: 50, emoji: "🐠" },
    { name: "삼치", rarity: "Uncommon", price: 320, exp: 32, emoji: "🐟" },
    { name: "농어", rarity: "Uncommon", price: 380, exp: 38, emoji: "🐟" },
    { name: "도다리", rarity: "Uncommon", price: 310, exp: 31, emoji: "🐟" },
    { name: "쥐치", rarity: "Uncommon", price: 280, exp: 28, emoji: "🐠" },
    { name: "가자미", rarity: "Uncommon", price: 290, exp: 29, emoji: "🐟" },
    { name: "쭈꾸미", rarity: "Uncommon", price: 420, exp: 42, emoji: "🐙" },

    // Rare (희귀)
    { name: "참돔", rarity: "Rare", price: 1000, exp: 100, emoji: "🐠" },
    { name: "돌돔", rarity: "Rare", price: 1200, exp: 120, emoji: "🐠" },
    { name: "복어", rarity: "Rare", price: 1500, exp: 150, emoji: "🐡" },
    { name: "아귀", rarity: "Rare", price: 1300, exp: 130, emoji: "🐠" },
    { name: "쏘가리", rarity: "Rare", price: 1100, exp: 110, emoji: "🐠" },
    { name: "장어", rarity: "Rare", price: 1400, exp: 140, emoji: "🐟", weather: "rainy" },
    { name: "민어", rarity: "Rare", price: 1600, exp: 160, emoji: "🐟" },
    { name: "방어", rarity: "Rare", price: 1250, exp: 125, emoji: "🐟" },
    { name: "감성돔", rarity: "Rare", price: 1150, exp: 115, emoji: "🐟" },
    { name: "랍스터", rarity: "Rare", price: 1800, exp: 180, emoji: "🦞" },

    // Epic (영웅)
    { name: "다금바리", rarity: "Epic", price: 5000, exp: 500, emoji: "🐟" },
    { name: "참치", rarity: "Epic", price: 6000, exp: 600, emoji: "🐟" },
    { name: "킹크랩", rarity: "Epic", price: 5500, exp: 550, emoji: "🦀" },
    { name: "돗돔", rarity: "Epic", price: 5200, exp: 520, emoji: "🐟" },
    { name: "붉은바다거북", rarity: "Epic", price: 5800, exp: 580, emoji: "🐢" },
    { name: "대왕문어", rarity: "Epic", price: 5300, exp: 530, emoji: "🐙" },
    { name: "철갑상어", rarity: "Epic", price: 6500, exp: 650, emoji: "🐟" },
    { name: "돛새치", rarity: "Epic", price: 6200, exp: 620, emoji: "🐟" },

    // Legendary (전설)
    { name: "청새치", rarity: "Legendary", price: 20000, exp: 2000, emoji: "🐟" },
    { name: "백상아리", rarity: "Legendary", price: 25000, exp: 2500, emoji: "🦈", weather: "stormy" },
    { name: "황금잉어", rarity: "Legendary", price: 30000, exp: 3000, emoji: "🐠" },
    { name: "범고래", rarity: "Legendary", price: 28000, exp: 2800, emoji: "🐋" },
    { name: "대왕오징어", rarity: "Legendary", price: 22000, exp: 2200, emoji: "🦑" },
    { name: "실러캔스", rarity: "Legendary", price: 35000, exp: 3500, emoji: "🐟" },
    { name: "개복치", rarity: "Legendary", price: 21000, exp: 2100, emoji: "🐠" },

    // Mythical (신화)
    { name: "크라켄", rarity: "Mythical", price: 99999, exp: 10000, emoji: "🦑" },
    { name: "리바이어던", rarity: "Mythical", price: 150000, exp: 15000, emoji: "🐉", weather: "stormy" },
    { name: "모비딕", rarity: "Mythical", price: 120000, exp: 12000, emoji: "🐋" },
    { name: "히드라", rarity: "Mythical", price: 130000, exp: 13000, emoji: "🐍" }
];

const RARITY_WEIGHTS = {
    Common: 58,
    Uncommon: 25,
    Rare: 10,
    Epic: 5,
    Legendary: 1.5,
    Mythical: 0.5
};

const RARITY_ORDER = {
    "Junk": 0,
    "Common": 1,
    "Uncommon": 2,
    "Rare": 3,
    "Epic": 4,
    "Legendary": 5,
    "Mythical": 6
};

// 20단계로 확장된 낚싯대 업그레이드
const ROD_UPGRADES = [
    { name: "낡은 대나무 낚싯대", cost: 0 }, // Lv. 1
    { name: "카본 낚싯대", cost: 1000 }, // Lv. 2
    { name: "유리섬유 낚싯대", cost: 3500 }, // Lv. 3
    { name: "티타늄 낚싯대", cost: 8000 }, // Lv. 4
    { name: "그래핀 낚싯대", cost: 15000 }, // Lv. 5
    { name: "다이아몬드 코팅 낚싯대", cost: 28000 }, // Lv. 6
    { name: "오리하르콘 낚싯대", cost: 50000 }, // Lv. 7
    { name: "미스릴 낚싯대", cost: 90000 }, // Lv. 8
    { name: "태양의 낚싯대", cost: 160000 }, // Lv. 9
    { name: "달의 낚싯대", cost: 300000 }, // Lv. 10
    { name: "성운의 낚싯대", cost: 550000 }, // Lv. 11
    { name: "차원의 낚싯대", cost: 1000000 }, // Lv. 12
    { name: "고대 용의 뼈 낚싯대", cost: 1800000 }, // Lv. 13
    { name: "세계수의 가지", cost: 3200000 }, // Lv. 14
    { name: "은하수 낚싯대", cost: 5800000 }, // Lv. 15
    { name: "신을 낚는 낚싯대", cost: 10000000 }, // Lv. 16
    { name: "크로노스 낚싯대", cost: 18000000 }, // Lv. 17
    { name: "가이아의 의지", cost: 32000000 }, // Lv. 18
    { name: "우주의 균형", cost: 58000000 }, // Lv. 19
    { name: "창조주의 손길", cost: 100000000 } // Lv. 20
];

// 20단계로 확장된 낚싯줄 업그레이드
const LINE_UPGRADES = [
    { name: "낡은 나일론 줄", cost: 0 }, // Lv. 1
    { name: "고급 나일론 줄", cost: 500 }, // Lv. 2
    { name: "합사 줄", cost: 2000 }, // Lv. 3
    { name: "강철 와이어", cost: 5000 }, // Lv. 4
    { name: "케블라 섬유", cost: 10000 }, // Lv. 5
    { name: "티타늄 와이어", cost: 20000 }, // Lv. 6
    { name: "거미 신의 실", cost: 40000 }, // Lv. 7
    { name: "미스릴 와이어", cost: 80000 }, // Lv. 8
    { name: "용의 힘줄", cost: 150000 }, // Lv. 9
    { name: "유니콘의 머리카락", cost: 280000 }, // Lv. 10
    { name: "별빛의 실", cost: 500000 }, // Lv. 11
    { name: "시간의 실", cost: 900000 }, // Lv. 12
    { name: "운명의 실", cost: 1600000 }, // Lv. 13
    { name: "무지개 실", cost: 3000000 }, // Lv. 14
    { name: "블랙홀 와이어", cost: 5500000 }, // Lv. 15
    { name: "절대자의 인연", cost: 10000000 }, // Lv. 16
    { name: "엔트로피의 고리", cost: 18000000 }, // Lv. 17
    { name: "인과의 사슬", cost: 32000000 }, // Lv. 18
    { name: "평행우주의 끈", cost: 58000000 }, // Lv. 19
    { name: "개념의 실", cost: 100000000 } // Lv. 20
];

const BAIT_TYPES = {
    "paste": { name: "떡밥", price: 0, rarities: ["Common", "Uncommon"], emoji: "🍡", description: "기본 미끼. 흔한 물고기만 꼬입니다." },
    "worm": { name: "지렁이", price: 100, rarities: ["Common", "Uncommon", "Rare"], emoji: "🪱", description: "꿈틀거리는 지렁이. 희귀 어종도 좋아합니다." },
    "krill": { name: "크릴새우", price: 500, rarities: ["Common", "Uncommon", "Rare", "Epic"], emoji: "🦐", description: "고급 미끼. 대물들이 냄새를 맡고 옵니다." },
    "lure": { name: "황금 루어", price: 2000, rarities: ["Rare", "Epic", "Legendary", "Mythical"], emoji: "✨", description: "전설의 물고기를 유혹하는 빛나는 루어." }
};

// --- 설정 데이터 (Settings) ---

const DIFFICULTY_CONFIG = {
    'EASY': { label: "하 (쉬움)", drainMult: 0.2, powerMult: 2.0, rewardMult: 0.2, timeBonus: 1000, desc: "어린이용! 희귀(Rare) 등급까지만 등장합니다.", maxRarity: "Rare", tensionMult: 0.7 },
    'NORMAL': { label: "중 (보통)", drainMult: 0.6, powerMult: 1.3, rewardMult: 0.5, timeBonus: 500, desc: "적당한 난이도! 전설(Legendary) 등급까지만 등장합니다.", maxRarity: "Legendary", tensionMult: 1.0 },
    'HARD': { label: "상 (어려움)", drainMult: 1.0, powerMult: 1.0, rewardMult: 1.0, timeBonus: 0, desc: "모든 물고기(신화 포함)가 등장합니다.", maxRarity: "Mythical", tensionMult: 1.3 }
};

let gameSettings = {
    difficulty: 'HARD', // 기본값: 상
    vibration: true,
    currentWeather: null
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
    lineBreakCount: 0, // 낚싯줄 끊어짐 횟수
    
    // 로컬 게임 상태 (DB에 저장 안 함)
    reelingProgress: 0, // 0 ~ 100
    targetFish: null,
    reelingInterval: null,
    isThrashing: false, // 물고기가 저항 중인지 여부
    thrashTimer: 0,     // 저항 지속 시간
    hookTimer: null,    // 챔질 타이머
    isReeling: false,   // 릴링 버튼 누르고 있는지 여부
    tension: 0,         // 낚싯줄 텐션 (0~100)
    lineHealth: 100,    // 낚싯줄 내구도 (빨간 구간에서 감소)
    greenZoneMin: 30,   // 초록색 구간 시작점
    greenZoneMax: 70,   // 초록색 구간 끝점
    tensionSpeed: 1.0   // 텐션 증가/감소 속도
};

let currentState = GameState.IDLE;

// --- DOM 요소 선택 (DOM Elements) ---

const ui = {
    gold: document.getElementById('gold'),
    level: document.getElementById('level'),
    exp: document.getElementById('exp'),
    weather: document.getElementById('weather-display'),
    scene: document.querySelector('.scene'),
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
    tensionGradient: document.getElementById('tension-gradient'), // 텐션 배경
    tensionMarker: document.getElementById('tension-marker'),     // 텐션 마커
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
    closeGuideBtn: document.getElementById('close-guide'),

    // 설정 요소
    settingsBtn: document.getElementById('settings-btn'),
    settingsModal: document.getElementById('settings-modal'),
    closeSettingsBtn: document.getElementById('close-settings'),
    vibrationToggle: document.getElementById('vibration-toggle'),
    diffDesc: document.getElementById('diff-desc')
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
    playerStats.lineBreakCount = Number(profile.line_break_count) || 0;
    playerStats.isReeling = false;

    // 떡밥은 항상 무제한 보장
    playerStats.baits["paste"] = Infinity;
    
    // 게임 초기화
    createBaitButton(); // 미끼 버튼 생성
    updateUI();
    setWeather();
    
    loadLocalSettings(); // 로컬 설정 불러오기

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
    
    // 설정 관련 이벤트
    ui.settingsBtn.addEventListener('click', openSettings);
    ui.closeSettingsBtn.addEventListener('click', closeSettings);
    ui.vibrationToggle.addEventListener('click', toggleVibration);
    
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', (e) => setDifficulty(e.currentTarget.dataset.diff));
    });


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

// 진동 래퍼 함수
function vibrate(pattern) {
    if (gameSettings.vibration && navigator.vibrate) navigator.vibrate(pattern);
}

// 레벨 보너스 계산 함수 (5레벨마다 10% 복리)
function getLevelBonus(level) {
    const bonusTiers = Math.floor((level - 1) / 5);
    return Math.pow(1.1, bonusTiers);
}

async function updateUI() {
    ui.gold.textContent = playerStats.gold.toLocaleString();
    
    // 레벨 옆에 현재 적용되는 보너스율 표시 (기존 사용자 동기화 확인용)
    const bonusMult = getLevelBonus(playerStats.level);
    const bonusPercent = Math.round((bonusMult - 1) * 100);
    if (bonusPercent > 0) {
        ui.level.innerHTML = `${playerStats.level} <span style="font-size:0.7rem; color:#fbbf24; vertical-align:middle;">(+${bonusPercent}%)</span>`;
    } else {
        ui.level.textContent = playerStats.level;
    }
    
    ui.exp.textContent = playerStats.exp;
    
    // 버튼 상태 업데이트
    if (currentState === GameState.IDLE) {
        ui.castBtn.disabled = false;
        ui.castBtn.innerHTML = '<div class="btn-icon">✨</div><div class="btn-label">낚시하기</div>';
        ui.shopBtn.disabled = false;
        ui.inventoryBtn.disabled = false;
        ui.rankingBtn.disabled = false;
        ui.guideBtn.disabled = false;
        ui.settingsBtn.disabled = false; // 설정 버튼 활성화
        
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
        ui.settingsBtn.disabled = true; // 낚시 중 설정 불가
        
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
    const weather = WEATHER_OPTIONS[Math.floor(Math.random() * WEATHER_OPTIONS.length)];
    gameSettings.currentWeather = weather;

    // 기존 날씨 클래스 모두 제거
    WEATHER_OPTIONS.forEach(opt => {
        if (opt.className) ui.scene.classList.remove(opt.className);
    });
    // 새 날씨 클래스 추가
    ui.scene.classList.add(weather.className);

    // 텍스트 업데이트
    ui.weather.textContent = `날씨: ${weather.name}`;
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
    const startX = containerRect.width / 2 + 15; // 사람 이모지(🧑) 쪽으로 위치 조정
    const startY = containerRect.height - 70; // 낚싯대가 없으므로 손 위치쯤으로 높이 조정

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

    // 난이도에 따른 시간 보너스 추가
    hookWindow += DIFFICULTY_CONFIG[gameSettings.difficulty].timeBonus;

    // 시각/청각 효과
    ui.mainMessage.textContent = "!!!";
    ui.subMessage.textContent = "지금 당기세요!! (터치)";
    ui.mainMessage.style.color = "#ef4444";
    ui.bobber.style.animation = "bobber-bite 0.2s infinite"; // 격렬하게 흔들림
    updateUI();

    // 진동 피드백 (강한 진동)
    vibrate(200);

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
    playerStats.lineHealth = 100;     // 줄 내구도 초기화
    playerStats.isThrashing = false;
    playerStats.isReeling = true; // 챔질 성공 후 바로 릴링 시작 (버튼 누르고 있으므로)
    playerStats.tension = 20; // 텐션 초기값 (파란색 구간 시작)
    playerStats.thrashTimer = 0;
    
    // 물고기 등급에 따른 난이도 설정
    // 1. 초록색 구간(Green Zone) 너비 계산
    let baseGreenWidth = 30; // 기본 너비 축소 (40 -> 30)
    const rarity = playerStats.targetFish.rarity;
    const diffConfig = DIFFICULTY_CONFIG[gameSettings.difficulty];
    
    let thrashChance = 0.02; // 기본 저항 확률

    // 쓰레기도 일반 물고기처럼 보이도록 난이도 로직을 통합합니다.
    // 희귀도에 따른 너비 감소 (어려울수록 좁아짐)
    let widthPenalty = 0;
    if (rarity === 'Uncommon') widthPenalty = 3;
    if (rarity === 'Rare') widthPenalty = 8;
    if (rarity === 'Epic') widthPenalty = 12;
    if (rarity === 'Legendary') widthPenalty = 16;
    if (rarity === 'Mythical') widthPenalty = 20;

    // 장비(낚싯줄)에 따른 너비 보너스 (레벨당 1.5씩 증가)
    let gearBonus = (playerStats.lineLevel - 1) * 1.5;

    // 난이도에 따른 너비 보너스
    let difficultyBonus = 0;
    if (gameSettings.difficulty === 'EASY') difficultyBonus = 15;
    if (gameSettings.difficulty === 'NORMAL') difficultyBonus = 0; // 기준점
    if (gameSettings.difficulty === 'HARD') difficultyBonus = -10;

    // 최종 너비 계산 (최소 8, 최대 50)
    let finalGreenWidth = Math.max(8, Math.min(50, baseGreenWidth - widthPenalty + gearBonus + difficultyBonus));

    // 구간 설정 (중앙 50을 기준으로 배치)
    playerStats.greenZoneMin = 50 - (finalGreenWidth / 2);
    playerStats.greenZoneMax = 50 + (finalGreenWidth / 2);

    // 2. 텐션 변화 속도 (물고기 힘) - 유기적 조절
    let baseTensionSpeed = 1.8; // 기본 속도 상향 (1.5 -> 1.8)
    if (rarity === 'Uncommon') baseTensionSpeed = 2.0;
    if (rarity === 'Rare') baseTensionSpeed = 2.4; // 1.8 -> 2.4
    if (rarity === 'Epic') baseTensionSpeed = 3.0; // 2.2 -> 3.0
    if (rarity === 'Legendary') baseTensionSpeed = 3.8; // 2.8 -> 3.8
    if (rarity === 'Mythical') baseTensionSpeed = 4.5; // 3.5 -> 4.5

    // 난이도에 따른 속도 배율 적용
    baseTensionSpeed *= diffConfig.tensionMult;

    // 장비(낚싯대, 낚싯줄) 레벨에 따른 속도 감소 (제어력 증가)
    // 낚싯대: 레벨당 0.12 감소, 낚싯줄: 레벨당 0.08 감소
    const rodReduction = (playerStats.rodLevel - 1) * 0.12;
    const lineReduction = (playerStats.lineLevel - 1) * 0.08;
    
    // 최종 텐션 속도 계산 (최소 1.0 보장)
    playerStats.tensionSpeed = Math.max(1.0, baseTensionSpeed - rodReduction - lineReduction);

    if (rarity === 'Legendary' || rarity === 'Mythical') thrashChance = 0.05;

    // 게임 루프
    if (playerStats.reelingInterval) clearInterval(playerStats.reelingInterval);
    
    playerStats.reelingInterval = setInterval(() => {
        // 1. 저항(Thrashing) 상태 관리 (랜덤하게 텐션을 빨간색 쪽으로 밈)
        if (playerStats.isThrashing) {
            playerStats.thrashTimer--;
            if (playerStats.thrashTimer <= 0) {
                playerStats.isThrashing = false;
            }
        } else {
            if (Math.random() < thrashChance) {
                playerStats.isThrashing = true;
                playerStats.thrashTimer = 20 + Math.random() * 30; // 1~2.5초간 지속
                vibrate(200);
                ui.mainMessage.textContent = "물고기가 저항합니다!!";
                ui.mainMessage.style.color = "#ef4444";
            } else {
                ui.mainMessage.style.color = "white";
            }
        }

        // 2. 텐션(마커 위치) 업데이트
        // 버튼 누름: 텐션 증가 (오른쪽 이동), 뗌: 감소 (왼쪽 이동)
        let change = 0;
        if (playerStats.isReeling) {
            change = playerStats.tensionSpeed;
        } else {
            change = -playerStats.tensionSpeed;
        }

        // 물고기가 저항하면 텐션이 강제로 증가(오른쪽으로 밀림)
        if (playerStats.isThrashing) {
            change += 1.0; 
            ui.bobber.style.transform = `translate(${Math.random()*10 - 5}px, ${Math.random()*10 - 5}px)`;
        }

        playerStats.tension += change;
        playerStats.tension = Math.max(0, Math.min(100, playerStats.tension));

        // 3. 구간별 효과 처리
        const t = playerStats.tension;
        const min = playerStats.greenZoneMin;
        const max = playerStats.greenZoneMax;

        if (t < min) {
            // [파란색 구간] 텐션 부족 -> 물고기 도망 (게이지 감소)
            let drainSpeed = 0.5 * diffConfig.drainMult;
            playerStats.reelingProgress -= drainSpeed;
            
            ui.mainMessage.textContent = "텐션이 너무 약해요! (감으세요)";
            ui.mainMessage.style.color = "#3b82f6";
            
        } else if (t >= min && t <= max) {
            // [초록색 구간] 적정 텐션
            if (playerStats.isReeling) {
                // 버튼을 누르고 있을 때만 게이지 증가 (물고기와의 거리 좁히기)
                // 낚싯대 레벨이 높을수록 파워 증가
                let power = (0.3 + (playerStats.rodLevel * 0.15)) * diffConfig.powerMult;
                playerStats.reelingProgress += power;
                
                ui.mainMessage.textContent = "좋아요! 당기는 중!";
                ui.mainMessage.style.color = "#22c55e";
                
                // 초록색 구간에서 릴링 시 미세 진동
                if (Math.random() < 0.1) vibrate(5);
            } else {
                // 버튼을 떼고 있으면 텐션만 유지 (게이지 변화 없음, 힘겨루기 상태)
                ui.mainMessage.textContent = "좋아요! 텐션 유지 중...";
                ui.mainMessage.style.color = "#22c55e";
            }

        } else {
            // [빨간색 구간] 텐션 과다 -> 줄 손상 (내구도 감소)
            // 낚싯줄 레벨이 높을수록 데미지 감소
            let damage = 2.5 - (playerStats.lineLevel * 0.15);
            damage = Math.max(0.2, damage); // 최소 데미지
            
            playerStats.lineHealth -= damage;

            // 낚싯대 파손 확률 (매우 희귀)
            const rodBreakChance = 0.0005; // 0.05%
            if (playerStats.rodLevel > 1 && Math.random() < rodBreakChance) {
                handleRodBreak();
                return; // 릴링 즉시 중단
            }
            playerStats.lineHealth -= damage;
            
            ui.mainMessage.textContent = "줄이 끊어지려 합니다!! (푸세요)";
            ui.mainMessage.style.color = "#ef4444";
            vibrate(30); // 경고 진동

            if (playerStats.lineHealth <= 0) {
                endReeling(false, 'broken');
                return;
            }
        }

        updateReelingUI();

        // 실패 조건
        if (playerStats.reelingProgress <= 0) {
            endReeling(false, 'escape');
        }
        // 성공 조건
        if (playerStats.reelingProgress >= 100) {
            endReeling(true);
        }
    }, 50); // 0.05초마다 업데이트
}

function handleReelDown(e) {
    // 1. 대기 중 누름 (너무 빠름 - 실패)
    if (currentState === GameState.WAITING) {
        handleHookFail("early");
        return;
    }

    // 2. 챔질 타이밍 누름 (성공)
    if (currentState === GameState.HOOKING) {
        if (playerStats.hookTimer) clearTimeout(playerStats.hookTimer);
        
        // 릴링 상태로 전환
        currentState = GameState.REELING;
        ui.mainMessage.textContent = "히트!! 무언가 물었습니다!";
        ui.subMessage.textContent = "텐션을 초록색 구간에 맞추세요!"; // 안내 문구 변경
        ui.mainMessage.style.color = "white";
        ui.bobber.style.animation = "bobber-bite 0.5s infinite";
        
        updateUI();
        startReelingGame();
        // startReelingGame 내부에서 isReeling = true로 설정됨
        return;
    }

    // 3. 릴링 중 누름 (감기 시작)
    if (currentState === GameState.REELING) {
        playerStats.isReeling = true;
        // 버튼 시각 효과
        ui.reelBtn.style.transform = "scale(0.95)";
    }
}

function handleReelUp(e) {
    if (currentState === GameState.REELING) {
        playerStats.isReeling = false;
        ui.reelBtn.style.transform = "scale(1)";
    }

}

function updateReelingUI() {
    // 1. 텐션 게이지 배경 (파랑-초록-빨강 구간 시각화)
    const min = playerStats.greenZoneMin;
    const max = playerStats.greenZoneMax;
    
    // CSS 그라데이션으로 구간 표시
    ui.tensionGradient.style.background = 
        `linear-gradient(90deg, #3b82f6 0%, #3b82f6 ${min}%, #22c55e ${min}%, #22c55e ${max}%, #ef4444 ${max}%, #ef4444 100%)`;

    // 2. 텐션 마커 위치 업데이트
    ui.tensionMarker.style.left = `${playerStats.tension}%`;

    // 3. 남은 거리 (진행도) 업데이트
    const progress = Math.max(0, Math.min(100, playerStats.reelingProgress));
    ui.reelingBar.style.width = `${progress}%`;
    ui.reelingBar.style.backgroundColor = '#22c55e'; // 진행도는 항상 초록색

    // 남은 거리 표시 (역으로 계산)
    const distance = Math.floor(100 - progress);
    ui.fishDistance.textContent = distance;

    // 4. 줄 내구도 경고 (빨간 구간에 있을 때 화면 붉어짐 효과)
    if (playerStats.tension > max) {
        ui.reelingOverlay.style.boxShadow = `0 0 20px rgba(239, 68, 68, ${1 - (playerStats.lineHealth / 100)})`;
    } else {
        ui.reelingOverlay.style.boxShadow = 'none';
    }
}

async function endReeling(isSuccess, reason = 'escape') {
    clearInterval(playerStats.reelingInterval);
    ui.bobber.style.animation = "bobber-float 1s ease-in-out infinite"; // 애니메이션 복구
    ui.mainMessage.style.color = "white"; // 메시지 색상 복구
    ui.reelingOverlay.style.boxShadow = 'none'; // 붉은 효과 제거

    if (isSuccess) {
        const caughtItem = playerStats.targetFish;

        // 잡은 것이 쓰레기인지 확인
        if (caughtItem.rarity === 'Junk') {
            handleJunkCatch(caughtItem);
        } else {
            // 기존 물고기 잡기 성공 로직
            await handleFishCatch(caughtItem);
        }
    } else {
        // 실패
        if (reason === 'broken') {
            ui.mainMessage.textContent = "줄이 끊어졌습니다!!";
            ui.subMessage.textContent = "빨간색 구간에 너무 오래 머물렀습니다.";
            ui.mainMessage.style.color = "#ef4444";
            vibrate(500); // 길게 진동

            // 낚싯줄 내구도 시스템
            if (playerStats.lineLevel > 1) {
                playerStats.lineBreakCount = (playerStats.lineBreakCount || 0) + 1;
                const breakThreshold = 3;
                if (playerStats.lineBreakCount >= breakThreshold) {
                    const brokenLine = LINE_UPGRADES[playerStats.lineLevel - 1];
                    playerStats.lineLevel--;
                    playerStats.lineBreakCount = 0;
                    
                    setTimeout(() => {
                        alert(`낚싯줄이 완전히 삭아버렸습니다!\n'${brokenLine.name}'을(를) 잃고 한 단계 낮은 낚싯줄로 교체됩니다.`);
                        savePlayerData(playerStats);
                        updateUI(); // UI 갱신
                    }, 200);

                } else {
                    const remaining = breakThreshold - playerStats.lineBreakCount;
                    ui.subMessage.textContent += ` (현재 줄 내구도: ${remaining}번 남음)`;
                    savePlayerData(playerStats);
                }
            }
        } else {
            // 놓친 물고기 정보 표시
            const missedFish = playerStats.targetFish;
            ui.mainMessage.textContent = "놓쳤습니다... 😭";
            ui.subMessage.textContent = `파란색 구간(텐션 부족)으로 인해 도망갔습니다.`;
        }
    }

    currentState = GameState.IDLE;
    updateUI();
    setWeather(); // 날씨 변경
}

async function handleFishCatch(caughtFish) {
    // 난이도 설정 가져오기
    const diffConfig = DIFFICULTY_CONFIG[gameSettings.difficulty];

    // 레벨 보너스 계산 (5레벨마다 10%씩 복리 증가, 1~5레벨은 보너스 없음)
    const levelBonusMultiplier = getLevelBonus(playerStats.level);

    // 보상 계산 (난이도 배율 적용)
    const finalExp = Math.floor((caughtFish.exp || 10) * diffConfig.rewardMult);
    // 기본 가격에 난이도 배율과 레벨 보너스 배율을 모두 적용
    const finalPrice = Math.floor(caughtFish.price * diffConfig.rewardMult * levelBonusMultiplier);

    playerStats.exp += finalExp;
    playerStats.gold += finalPrice;
    
    addToInventory(caughtFish);
    
    let leveledUp = false;
    // 레벨업 체크
    if (playerStats.exp >= playerStats.level * 100) {
        playerStats.level++;
        playerStats.exp = 0;
        leveledUp = true;
    }

    const phrases = CONGRATS_PHRASES[caughtFish.rarity] || CONGRATS_PHRASES['Common'];
    const comment = phrases[Math.floor(Math.random() * phrases.length)];

    let bonusText = `(즉시 ${finalPrice.toLocaleString()} G 획득!)`;
    if (levelBonusMultiplier > 1) {
        bonusText = `(즉시 ${finalPrice.toLocaleString()} G 획득! Lv 보너스 +${((levelBonusMultiplier - 1) * 100).toFixed(0)}%)`;
    }

    ui.mainMessage.textContent = `${caughtFish.name}을(를) 잡았습니다!`;
    ui.subMessage.textContent = `${comment} ${bonusText}`;
    
    showCatchModal(caughtFish, finalPrice);

    await savePlayerData(playerStats);

    if (leveledUp) {
        setTimeout(() => alert("🎉 레벨 업! 더 좋은 낚시꾼이 되었습니다."), 100);
    }
}

function handleJunkCatch(junkItem) {
    ui.mainMessage.textContent = `${junkItem.name}을(를) 낚았습니다...`;
    ui.subMessage.textContent = junkItem.message || "이런, 쓸모없는 걸 낚았네.";
    vibrate([50, 100, 50]);
    showCatchModal(junkItem);
}

function handleRodBreak() {
    clearInterval(playerStats.reelingInterval);
    currentState = GameState.IDLE;
    ui.bobber.style.animation = "bobber-float 1s ease-in-out infinite";
    ui.mainMessage.style.color = "white";
    ui.reelingOverlay.style.boxShadow = 'none';

    const brokenRod = ROD_UPGRADES[playerStats.rodLevel - 1];
    playerStats.rodLevel--;
    
    ui.mainMessage.textContent = "쨍그랑!!! 낚싯대가 부러졌습니다!";
    ui.subMessage.textContent = `${brokenRod.name}이(가) 파손되어 등급이 하락했습니다.`;
    ui.mainMessage.style.color = "#ef4444";
    vibrate([200, 100, 200]);

    // alert는 다른 UI 업데이트가 끝난 후 표시
    setTimeout(() => {
        alert(`💥 아뿔싸! 무리한 릴링으로 인해 ${brokenRod.name}이(가) 부러졌습니다!\n낚싯대 등급이 1 하락합니다.`);
    }, 100);
    
    savePlayerData(playerStats);
    updateUI();
}

function showCatchModal(fish, actualPrice) {
    if (fish.rarity === 'Junk') {
        const titles = ["이런...", "에구머니나!", "이게 뭐야!"];
        ui.catchTitle.textContent = titles[Math.floor(Math.random() * titles.length)];
        ui.catchEmoji.textContent = fish.emoji;
        ui.catchName.textContent = fish.name;
        ui.catchRarity.textContent = "쓰레기";
        ui.catchPrice.textContent = `💰 0 G`;
        ui.catchRarity.style.color = "#64748b";
        ui.catchRarity.style.borderColor = "#64748b";
    } else {
        // 기존 물고기 잡았을 때 로직
        const titles = ["🎉 월척이다!", "🎣 나이스 캐치!", "✨ 대박!", "🌊 바다의 선물!", "🐟 잡았다!"];
        ui.catchTitle.textContent = titles[Math.floor(Math.random() * titles.length)];

        ui.catchEmoji.textContent = fish.emoji;
        ui.catchName.textContent = fish.name;
        ui.catchRarity.textContent = fish.rarity;
        ui.catchPrice.textContent = `💰 ${actualPrice.toLocaleString()} G`;
        
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
    
    // 3. 확인 버튼 오클릭 방지
    ui.catchCloseBtn.disabled = true;
    setTimeout(() => {
        ui.catchCloseBtn.disabled = false;
    }, 1000); // 1초 후 버튼 활성화

    ui.catchModal.classList.remove('hidden');
}

function closeCatchModal() {
    ui.catchModal.classList.add('hidden');
}

function catchRandomFish() {
    // 1. 일정 확률로 쓰레기 낚기
    if (Math.random() < JUNK_CHANCE) {
        const junk = JUNK_ITEMS[Math.floor(Math.random() * JUNK_ITEMS.length)];
        // 쓰레기 아이템은 fish 데이터베이스와 형식을 맞추기 위해 'Junk' rarity를 부여
        return { ...junk, rarity: 'Junk', price: 0, exp: 0 };
    }

    // 2. 현재 조건(난이도, 미끼)에서 잡을 수 있는 모든 물고기 목록 생성
    const maxRarity = DIFFICULTY_CONFIG[gameSettings.difficulty].maxRarity;
    const maxRarityVal = RARITY_ORDER[maxRarity];
    const baitRarities = BAIT_TYPES[playerStats.selectedBait].rarities;
    const allowedRarities = new Set(baitRarities.filter(r => RARITY_ORDER[r] <= maxRarityVal));
    if (allowedRarities.size === 0) allowedRarities.add("Common");

    const possibleFish = FISH_DATABASE.filter(fish => allowedRarities.has(fish.rarity));

    // 3. 가중치 계산 (날씨 효과 적용)
    let totalWeight = 0;
    const weightedFishList = possibleFish.map(fish => {
        let weight = RARITY_WEIGHTS[fish.rarity];
        // 날씨가 일치하면 가중치 5배 증가
        if (gameSettings.currentWeather && fish.weather === gameSettings.currentWeather.effect) {
            weight *= 5;
        }
        totalWeight += weight;
        return { ...fish, finalWeight: weight };
    });

    if (weightedFishList.length === 0) {
        // 잡을 수 있는 물고기가 없는 예외 케이스 (Common 등급으로 대체)
        const commonFish = FISH_DATABASE.filter(f => f.rarity === "Common");
        return commonFish[Math.floor(Math.random() * commonFish.length)];
    }

    // 4. 가중치 기반으로 물고기 최종 선택
    const rand = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    for (const fish of weightedFishList) {
        cumulativeWeight += fish.finalWeight;
        if (rand <= cumulativeWeight) {
            return fish;
        }
    }

    return weightedFishList[weightedFishList.length - 1]; // 만약의 경우 마지막 물고기 반환
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

    // 내구도 정보 추가
    let durabilityInfo = '';
    if (playerStats.lineLevel > 1) {
        const breakThreshold = 3;
        const remaining = breakThreshold - (playerStats.lineBreakCount || 0);
        durabilityInfo = `<br><span style="color:#f87171; font-size:0.8rem;">내구도: ${remaining}/${breakThreshold} (3번 끊어지면 등급 하락)</span>`;
    }

    ui.lineLevel.textContent = playerStats.lineLevel;
    if (nextLine) {
        ui.lineInfo.innerHTML = `현재: ${currentLine.name}${durabilityInfo}<br><span style="color:#38bdf8">다음: ${nextLine.name} (${nextLine.cost}G)</span>`;
        ui.upgradeLineBtn.disabled = playerStats.gold < nextLine.cost;
        ui.upgradeLineBtn.textContent = "강화하기";
    } else {
        ui.lineInfo.innerHTML = `현재: ${currentLine.name} (최고 레벨)${durabilityInfo}`;
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
        
        // 구매한 미끼를 즉시 장착하여 바로 사용할 수 있도록 함
        playerStats.selectedBait = type;

        alert(`${bait.name} 10개를 구매했습니다! (자동으로 장착됩니다)`);
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
    
    // 1. 장비 & 미끼 섹션 (새로 추가)
    const equipSection = document.createElement('div');
    equipSection.className = 'inventory-section';
    equipSection.innerHTML = '<h3 class="inv-section-title">🎒 장비 & 미끼</h3>';
    
    const equipGrid = document.createElement('div');
    equipGrid.className = 'inventory-grid-mini';

    // 현재 장착 중인 낚싯대
    const currentRod = ROD_UPGRADES[playerStats.rodLevel - 1];
    equipGrid.innerHTML += `
        <div class="inv-item-mini">
            <div class="inv-emoji">🎣</div>
            <div class="inv-info">
                <div class="inv-name">${currentRod.name}</div>
                <div class="inv-desc">Lv.${playerStats.rodLevel}</div>
            </div>
        </div>
    `;

    // 현재 장착 중인 낚싯줄
    const currentLine = LINE_UPGRADES[playerStats.lineLevel - 1];
    equipGrid.innerHTML += `
        <div class="inv-item-mini">
            <div class="inv-emoji">🧵</div>
            <div class="inv-info">
                <div class="inv-name">${currentLine.name}</div>
                <div class="inv-desc">Lv.${playerStats.lineLevel}</div>
            </div>
        </div>
    `;

    // 보유 중인 미끼 (기본 미끼 포함)
    Object.entries(playerStats.baits).forEach(([key, count]) => {
        if (count === 0 && key !== 'paste') return; // 없는 미끼는 숨김
        const bait = BAIT_TYPES[key];
        const countText = count === Infinity ? "∞" : `${count}개`;
        const isSelected = playerStats.selectedBait === key ? 'selected-bait' : '';
        
        equipGrid.innerHTML += `
            <div class="inv-item-mini ${isSelected}">
                <div class="inv-emoji">${bait.emoji}</div>
                <div class="inv-info">
                    <div class="inv-name">${bait.name}</div>
                    <div class="inv-desc">${countText}</div>
                </div>
            </div>
        `;
    });

    equipSection.appendChild(equipGrid);
    ui.inventoryList.appendChild(equipSection);

    // 2. 물고기 섹션
    const fishSection = document.createElement('div');
    fishSection.className = 'inventory-section';
    fishSection.innerHTML = '<h3 class="inv-section-title">🐟 어망 (잡은 물고기)</h3>';

    if (playerStats.inventory.length === 0) {
        fishSection.innerHTML += '<div class="empty-msg">잡은 물고기가 없습니다.</div>';
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
            fishSection.appendChild(itemEl);
        });
    }
    ui.inventoryList.appendChild(fishSection);
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
                <div class="ranking-username">👤 ${player.username} (Lv.${player.level})</div>
                <div class="ranking-stats">
                    🏆 ${player.total_score.toLocaleString()} 점
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

    // 현재 난이도 정보 표시
    const diffConfig = DIFFICULTY_CONFIG[gameSettings.difficulty];
    const diffInfo = document.createElement('div');
    const maxRarity = diffConfig.maxRarity;
    const maxRarityVal = RARITY_ORDER[maxRarity];

    diffInfo.style.cssText = "text-align:center; margin-bottom:10px; color:#94a3b8; font-size:0.85rem; background:#1e293b; padding:8px; border-radius:8px;";
    diffInfo.innerHTML = `현재 난이도: <span style="color:#fbbf24; font-weight:bold;">${diffConfig.label}</span><br>보상 배율: <span style="color:#fbbf24">${Math.round(diffConfig.rewardMult * 100)}%</span> 적용 중`;
    guideBody.appendChild(diffInfo);

    const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythical"];

    rarities.forEach(rarity => {
        const fishes = FISH_DATABASE.filter(f => f.rarity === rarity);
        if (fishes.length === 0) return;

        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'guide-section-title';
        sectionTitle.textContent = `${rarity} 등급`;
        guideBody.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'guide-grid';

        fishes.forEach(fish => {
            // 난이도별 보상 계산
            const currentPrice = Math.floor(fish.price * diffConfig.rewardMult);
            const currentExp = Math.floor(fish.exp * diffConfig.rewardMult);
            const isObtainable = RARITY_ORDER[fish.rarity] <= maxRarityVal;

            const card = document.createElement('div');
            card.className = `guide-card rarity-${rarity.toLowerCase()}`;
            
            if (isObtainable) {
                card.innerHTML = `
                    <div class="guide-emoji">${fish.emoji}</div>
                    <div class="guide-name">${fish.name}</div>
                    <div class="guide-stats" style="color:#fbbf24">💰 ${currentPrice.toLocaleString()} G</div>
                    <div class="guide-stats" style="color:#38bdf8">✨ ${currentExp} EXP</div>
                    <div class="guide-req" style="color:#64748b; margin-top:2px;">(기본: ${fish.price} G)</div>
                `;
            } else {
                card.style.opacity = "0.5";
                card.innerHTML = `
                    <div class="guide-emoji">${fish.emoji}</div>
                    <div class="guide-name">${fish.name}</div>
                    <div class="guide-stats" style="color:#ef4444; font-weight:bold; margin-top:5px;">⛔ 획득 불가</div>
                    <div class="guide-req" style="color:#94a3b8">난이도 상향 필요</div>
                `;
            }
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
    rodTitle.textContent = '🎣 낚싯대 (릴링 파워 증가)';
    guideBody.appendChild(rodTitle);

    const rodList = document.createElement('div');
    rodList.className = 'equip-list';

    ROD_UPGRADES.forEach((rod, index) => {
        const card = document.createElement('div');
        card.className = 'guide-card equip-card';
        card.innerHTML = `
            <div class="guide-emoji">🎣</div>
            <div style="flex:1">
                <div class="guide-name">${rod.name} (Lv.${index + 1})</div>
                <div class="guide-stats">비용: ${rod.cost === 0 ? '기본 지급' : rod.cost.toLocaleString() + ' G'}</div>
                <div class="guide-req" style="color:#94a3b8">물고기를 더 빠르게 끌어당깁니다.</div>
            </div>
        `;
        rodList.appendChild(card);
    });
    guideBody.appendChild(rodList);

    // 낚싯줄 섹션
    const lineTitle = document.createElement('div');
    lineTitle.className = 'guide-section-title';
    lineTitle.textContent = '🧵 낚싯줄 (텐션 제어력 증가)';
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
                <div class="guide-req" style="color:#94a3b8">텐션 관리가 쉬워지고 줄이 덜 손상됩니다.</div>
            </div>
        `;
        lineList.appendChild(card);
    });
    guideBody.appendChild(lineList);
}

// --- 설정(Settings) 로직 ---

function openSettings() {
    ui.settingsModal.classList.remove('hidden');
    updateSettingsUI();
}

function closeSettings() {
    ui.settingsModal.classList.add('hidden');
}

function setDifficulty(level) {
    if (!DIFFICULTY_CONFIG[level]) return;
    gameSettings.difficulty = level;
    saveLocalSettings();
    updateSettingsUI();
}

function toggleVibration() {
    gameSettings.vibration = !gameSettings.vibration;
    if (gameSettings.vibration) vibrate(100); // 켜졌을 때 확인 진동
    saveLocalSettings();
    updateSettingsUI();
}

function updateSettingsUI() {
    // 난이도 버튼 상태
    document.querySelectorAll('.diff-btn').forEach(btn => {
        if (btn.dataset.diff === gameSettings.difficulty) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 설명 텍스트
    ui.diffDesc.textContent = DIFFICULTY_CONFIG[gameSettings.difficulty].desc;

    // 진동 버튼 상태
    if (gameSettings.vibration) {
        ui.vibrationToggle.textContent = "켜짐 (ON)";
        ui.vibrationToggle.className = "toggle-btn toggle-on";
    } else {
        ui.vibrationToggle.textContent = "꺼짐 (OFF)";
        ui.vibrationToggle.className = "toggle-btn toggle-off";
    }
}

function saveLocalSettings() {
    localStorage.setItem('fishingGameSettings', JSON.stringify(gameSettings));
}

function loadLocalSettings() {
    const saved = localStorage.getItem('fishingGameSettings');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            gameSettings = { ...gameSettings, ...parsed };
        } catch (e) {
            console.error("설정 불러오기 실패", e);
        }
    }
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
        playerStats.isReeling = false; // 초기화
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

        // 버튼 누름 처리 (릴링 시작)
        handleReelDown(e);
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

        // 버튼 뗌 처리 (릴링 멈춤)
        handleReelUp(e);

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