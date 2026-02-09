const CACHE_NAME = 'fishing-game-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/auth.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// 설치 시 캐시 저장
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('파일을 미리 저장하고 있습니다...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // 설치 즉시 활성화
});

// 업데이트 시 구버전 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('오래된 캐시를 삭제합니다:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // 즉시 제어권 가져오기
});

// 요청 가로채기 (핵심 로직 수정)
self.addEventListener('fetch', (event) => {
  // 1. 페이지 이동 요청(HTML)은 '네트워크 우선' (인터넷 되면 최신 버전, 안 되면 캐시)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/index.html');
        })
    );
    return;
  }

  // 2. 이미지, 스크립트 등은 '캐시 우선' (빠른 로딩)
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});