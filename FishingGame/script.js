// --- 상수 및 데이터 (Constants & Data) ---

const GameState = {
    IDLE: 'IDLE',
    CASTING: 'CASTING',
    WAITING: 'WAITING',
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
    { name: "고등어", rarity: "Common", price: 100, emoji: "🐟" },
    { name: "멸치", rarity: "Common", price: 50, emoji: "🐟" },
    { name: "송어", rarity: "Common", price: 120, emoji: "🐟" },
    { name: "붕어", rarity: "Common", price: 80, emoji: "🐟" },
    { name: "망둥어", rarity: "Common", price: 60, emoji: "🐟" },
    { name: "전어", rarity: "Common", price: 110, emoji: "🐟" },
    { name: "꽁치", rarity: "Common", price: 90, emoji: "🐟" },
    { name: "정어리", rarity: "Common", price: 70, emoji: "🐟" },
    { name: "빙어", rarity: "Common", price: 40, emoji: "🐟" },
    { name: "피라미", rarity: "Common", price: 30, emoji: "🐟" },
    
    // Uncommon (드묾)
    { name: "광어", rarity: "Uncommon", price: 300, emoji: "🐠" },
    { name: "우럭", rarity: "Uncommon", price: 350, emoji: "🐠" },
    { name: "오징어", rarity: "Uncommon", price: 400, emoji: "🦑" },
    { name: "문어", rarity: "Uncommon", price: 450, emoji: "🐙" },
    { name: "연어", rarity: "Uncommon", price: 500, emoji: "🐠" },
    { name: "삼치", rarity: "Uncommon", price: 320, emoji: "🐠" },
    { name: "농어", rarity: "Uncommon", price: 380, emoji: "🐠" },
    { name: "도다리", rarity: "Uncommon", price: 310, emoji: "🐠" },
    { name: "쥐치", rarity: "Uncommon", price: 280, emoji: "🐠" },
    { name: "가자미", rarity: "Uncommon", price: 290, emoji: "🐠" },
    { name: "쭈꾸미", rarity: "Uncommon", price: 420, emoji: "🐙" },

    // Rare (희귀)
    { name: "참돔", rarity: "Rare", price: 1000, emoji: "🐡" },
    { name: "돌돔", rarity: "Rare", price: 1200, emoji: "🐡" },
    { name: "복어", rarity: "Rare", price: 1500, emoji: "🐡" },
    { name: "아귀", rarity: "Rare", price: 1300, emoji: "🐡" },
    { name: "쏘가리", rarity: "Rare", price: 1100, emoji: "🐡" },
    { name: "장어", rarity: "Rare", price: 1400, emoji: "🐍" },
    { name: "민어", rarity: "Rare", price: 1600, emoji: "🐡" },
    { name: "방어", rarity: "Rare", price: 1250, emoji: "🐡" },
    { name: "감성돔", rarity: "Rare", price: 1150, emoji: "🐡" },
    { name: "랍스터", rarity: "Rare", price: 1800, emoji: "🦞" },

    // Epic (영웅)
    { name: "다금바리", rarity: "Epic", price: 5000, emoji: "🦈" },
    { name: "참치", rarity: "Epic", price: 6000, emoji: "🐟" },
    { name: "킹크랩", rarity: "Epic", price: 5500, emoji: "🦀" },
    { name: "돗돔", rarity: "Epic", price: 5200, emoji: "🦈" },
    { name: "붉은바다거북", rarity: "Epic", price: 5800, emoji: "🐢" },
    { name: "대왕문어", rarity: "Epic", price: 5300, emoji: "🐙" },
    { name: "철갑상어", rarity: "Epic", price: 6500, emoji: "🦈" },
    { name: "돛새치", rarity: "Epic", price: 6200, emoji: "🦈" },

    // Legendary (전설)
    { name: "청새치", rarity: "Legendary", price: 20000, emoji: "🐋" },
    { name: "백상아리", rarity: "Legendary", price: 25000, emoji: "🦈" },
    { name: "황금잉어", rarity: "Legendary", price: 30000, emoji: "👑" },
    { name: "범고래", rarity: "Legendary", price: 28000, emoji: "🐋" },
    { name: "대왕오징어", rarity: "Legendary", price: 22000, emoji: "🦑" },
    { name: "실러캔스", rarity: "Legendary", price: 35000, emoji: "🐟" },
    { name: "개복치", rarity: "Legendary", price: 21000, emoji: "🐠" },

    // Mythical (신화)
    { name: "크라켄", rarity: "Mythical", price: 99999, emoji: "🦑" },
    { name: "리바이어던", rarity: "Mythical", price: 150000, emoji: "🐉" },
    { name: "모비딕", rarity: "Mythical", price: 120000, emoji: "🐋" },
    { name: "히드라", rarity: "Mythical", price: 130000, emoji: "🐍" }
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

// --- 상태 관리 (State) ---

let playerStats = {
    gold: 0,
    level: 1,
    exp: 0,
    rodLevel: 1,
    lineLevel: 1,
    inventory: [], // { name, count, emoji, rarity, price }
    
    // 로컬 게임 상태 (DB에 저장 안 함)
    reelingProgress: 0, // 0 ~ 100
    targetFish: null,
    reelingInterval: null
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
    catchEmoji: document.getElementById('catch-emoji'),
    catchName: document.getElementById('catch-name'),
    catchRarity: document.getElementById('catch-rarity'),
    catchPrice: document.getElementById('catch-price'),
    catchCloseBtn: document.getElementById('catch-close-btn')
};

// --- 게임 로직 (Game Logic) ---

function startGameWithProfile(profile) {
    // Supabase에서 불러온 데이터로 playerStats 초기화
    playerStats.gold = profile.gold || 0;
    playerStats.level = profile.level || 1;
    playerStats.exp = profile.exp || 0;
    playerStats.rodLevel = profile.rod_level || 1;
    playerStats.lineLevel = profile.line_level || 1;
    playerStats.inventory = profile.inventory || [];
    
    // 게임 초기화
    updateUI();
    setWeather();
    addEventListeners();
}

function addEventListeners() {
    
    // 이벤트 리스너 등록
    ui.castBtn.addEventListener('click', handleCast);
    ui.reelBtn.addEventListener('click', handleReelClick);
    ui.shopBtn.addEventListener('click', openShop);
    ui.inventoryBtn.addEventListener('click', openInventory);
    ui.rankingBtn.addEventListener('click', openRanking);
    ui.closeRankingBtn.addEventListener('click', closeRanking);
    ui.closeShopBtn.addEventListener('click', closeShop);
    ui.closeInventoryBtn.addEventListener('click', closeInventory);
    ui.upgradeRodBtn.addEventListener('click', () => buyUpgrade('rod'));
    ui.upgradeLineBtn.addEventListener('click', () => buyUpgrade('line'));
    ui.catchCloseBtn.addEventListener('click', closeCatchModal);
}

async function updateUI() {
    ui.gold.textContent = playerStats.gold.toLocaleString();
    ui.level.textContent = playerStats.level;
    ui.exp.textContent = playerStats.exp;
    
    // 버튼 상태 업데이트
    if (currentState === GameState.IDLE) {
        ui.castBtn.disabled = false;
        ui.castBtn.textContent = "🎣 낚시하기";
        ui.shopBtn.disabled = false;
        ui.inventoryBtn.disabled = false;
        ui.rankingBtn.disabled = false;
        
        ui.castBtn.classList.remove('hidden');
        ui.reelBtn.classList.add('hidden');
        ui.reelingOverlay.classList.add('hidden');
        ui.bobber.classList.add('hidden');
        updateLinePosition(false); // 줄 숨기기
    } else {
        ui.castBtn.disabled = true;
        ui.shopBtn.disabled = true;
        ui.inventoryBtn.disabled = true;
        ui.rankingBtn.disabled = true;
        
        if (currentState === GameState.CASTING) ui.castBtn.textContent = "던지는 중...";
        if (currentState === GameState.WAITING) ui.castBtn.textContent = "기다리는 중...";
        if (currentState === GameState.REELING) {
            ui.castBtn.classList.add('hidden');
            ui.reelBtn.classList.remove('hidden');
            ui.reelingOverlay.classList.remove('hidden');
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
    const rodTipY = "70%"; // 배 위쪽

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
    await wait(2000 + Math.random() * 2000);

    // 3. 입질 및 릴링 (Reeling)
    currentState = GameState.REELING;
    ui.mainMessage.textContent = "히트!! 무언가 물었습니다!";
    ui.subMessage.textContent = "릴 감기 버튼을 연타하세요!";
    
    // 찌 흔들림 효과
    ui.bobber.style.animation = "bobber-bite 0.5s infinite";
    
    updateUI();

    // 미니게임 시작
    startReelingGame();
}

// --- 릴링 미니게임 로직 ---

function startReelingGame() {
    // 잡힐 물고기 미리 결정
    playerStats.targetFish = catchRandomFish();
    playerStats.reelingProgress = 30; // 시작 게이지 30%
    
    // 물고기 등급에 따른 난이도 설정
    let drainRate = 0.5; // 기본 감소율
    const rarity = playerStats.targetFish.rarity;
    
    if (rarity === 'Uncommon') drainRate = 0.8;
    if (rarity === 'Rare') drainRate = 1.2;
    if (rarity === 'Epic') drainRate = 1.8;
    if (rarity === 'Legendary') drainRate = 2.5;
    if (rarity === 'Mythical') drainRate = 3.5;

    // 낚싯줄 레벨이 높으면 감소율 완화
    drainRate = Math.max(0.1, drainRate - (playerStats.lineLevel * 0.1));

    // 게임 루프
    if (playerStats.reelingInterval) clearInterval(playerStats.reelingInterval);
    
    playerStats.reelingInterval = setInterval(() => {
        // 게이지 자연 감소 (물고기 저항)
        playerStats.reelingProgress -= drainRate;
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
    if (currentState !== GameState.REELING) return;

    // 낚싯대 레벨에 따른 게이지 증가량
    const reelPower = 3 + (playerStats.rodLevel * 0.5);
    playerStats.reelingProgress += reelPower;
    
    // 시각적 효과 (찌가 당겨짐)
    const currentTop = parseFloat(ui.bobber.style.top);
    ui.bobber.style.top = (currentTop + 1) + '%'; // 약간 움직임
    
    updateReelingUI();
}

function updateReelingUI() {
    // 게이지 바 업데이트
    const progress = Math.max(0, Math.min(100, playerStats.reelingProgress));
    ui.reelingBar.style.width = `${progress}%`;
    
    // 색상 변경 (위험하면 빨강)
    if (progress < 30) ui.reelingBar.style.backgroundColor = '#ef4444';
    else if (progress > 70) ui.reelingBar.style.backgroundColor = '#22c55e';
    else ui.reelingBar.style.backgroundColor = '#eab308';

    // 남은 거리 표시 (역으로 계산)
    const distance = Math.floor(100 - progress);
    ui.fishDistance.textContent = distance;
}

function endReeling(isSuccess) {
    clearInterval(playerStats.reelingInterval);
    ui.bobber.style.animation = "bobber-float 1s ease-in-out infinite"; // 애니메이션 복구

    if (isSuccess) {
        // 물고기 잡음
        const caughtFish = playerStats.targetFish;
        
        // 보상 지급
        playerStats.exp += 10;
        addToInventory(caughtFish);
        
        // 레벨업 체크
        if (playerStats.exp >= playerStats.level * 100) {
            playerStats.level++;
            playerStats.exp = 0;
            alert("레벨 업! 더 좋은 낚시꾼이 되었습니다.");
        }

        // 코멘트 생성
        const phrases = CONGRATS_PHRASES[caughtFish.rarity] || CONGRATS_PHRASES['Common'];
        const comment = phrases[Math.floor(Math.random() * phrases.length)];

        ui.mainMessage.textContent = `${caughtFish.name}을(를) 잡았습니다!`;
        ui.subMessage.textContent = `${comment} (가방에 보관됨)`;
        
        // 획득 팝업 표시
        showCatchModal(caughtFish);

        // 데이터 저장
        savePlayerData(playerStats);
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
    
    ui.catchModal.classList.remove('hidden');
}

function closeCatchModal() {
    ui.catchModal.classList.add('hidden');
}

function catchRandomFish() {
    // 희귀도 가중치 기반 랜덤 선택
    const rand = Math.random() * 100;
    let cumulativeWeight = 0;
    let selectedRarity = "Common";

    // 장비 레벨 보너스 (희귀한 물고기 확률 약간 증가)
    const bonus = (playerStats.rodLevel - 1) * 0.5;

    for (const [rarity, weight] of Object.entries(RARITY_WEIGHTS)) {
        // 상위 등급일수록 보너스 적용 (Common 제외)
        const adjustedWeight = rarity === 'Common' ? weight - bonus : weight + (bonus / 5);
        
        cumulativeWeight += adjustedWeight;
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
    // 잡자마자 골드 획득이 아니라 판매 시 획득으로 변경할 수도 있지만, 
    // 게임 단순화를 위해 잡을 때 골드 획득 방식 유지하려면 아래 주석 해제
    playerStats.gold += fish.price;
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
    let totalValue = 0;

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
            totalValue += item.price * item.count;
        });
    }
    ui.inventoryTotal.textContent = totalValue.toLocaleString();
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

// 유틸리티 함수
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}