# 🎣 우리가족 낚시게임 (Family Fishing Game)

가족들과 함께 즐길 수 있는 간단한 웹 기반 낚시 게임입니다.

## 🎮 게임 특징
- **로그인**: 간편한 ID 생성 및 로그인
- **낚시하기**: 찌를 던지고 타이밍에 맞춰 물고기를 낚으세요!
- **상점 시스템**: 낚싯대와 낚싯줄을 업그레이드하여 더 희귀한 물고기를 잡으세요.
- **도감 및 랭킹**: 잡은 물고기를 확인하고 가족들과 경쟁해보세요.
- **모바일 최적화**: 스마트폰과 태블릿에서도 편하게 즐길 수 있습니다.

## 🛠 기술 스택
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Supabase (Auth, Database)
- **Deployment**: Cloudflare Pages

## 🚀 배포 방법 (Cloudflare Pages)
1. 이 저장소를 GitHub 저장소([jeonhongchan-sudo/family-fishing-game](https://github.com/jeonhongchan-sudo/family-fishing-game))에 올립니다.
2. Cloudflare Dashboard에 로그인하여 **Workers & Pages** > **Pages**로 이동합니다.
3. **Connect to Git**을 선택하고 이 저장소를 연결합니다.
4. **Build settings**에서 **Root directory**를 `FishingGame`으로 설정합니다. (Framework: None)
5. **Save and Deploy**를 클릭하면 완료!

## ⚠️ 주의사항
- Supabase 프로젝트의 **Authentication > URL Configuration**에 배포된 Cloudflare Pages 주소를 추가해야 로그인이 정상 작동할 수 있습니다.