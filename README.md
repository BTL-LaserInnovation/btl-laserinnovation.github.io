# BlueOcean 공통 홈페이지

BlueOcean의 비상업용 소프트웨어를 소개하는 GitHub Pages 사이트입니다. 첫 번째 서비스는 Codex Pulse입니다. 정적 HTML/CSS와 언어 선택용 JavaScript를 사용하며 설치하거나 빌드할 패키지가 없습니다.

## 미리 보기

`public/index.html`을 브라우저에서 열면 전체 사이트를 로컬에서 확인할 수 있습니다. 메인 → Codex Pulse → 다운로드/개인정보처리방침/이용약관으로 이동합니다. 위젯 화면은 구성 예시이며 실제 계정이나 일정에 연결되지 않습니다.

## 권장 저장소와 공개 주소

- 조직: `BTL-LaserInnovation`
- 공통 홈페이지 저장소: `btl-laserinnovation.github.io` (공개)
- 도메인 연결 전 프리뷰: `https://btl-laserinnovation.github.io/`
- 도메인 승인·연결 후: `https://blueocean.is-a.dev/`
- Codex Pulse: `/codexpulse/`
- Codex Pulse 개인정보처리방침: `/codexpulse/privacy.html`
- Codex Pulse 이용약관: `/codexpulse/terms.html`

위 주소는 게시 설정이 끝난 뒤 사용할 예정 주소입니다. 로컬 파일 제작만으로 주소가 게시되거나 도메인 신청이 승인되는 것은 아닙니다.

현재 작업 폴더의 `blueocean-site`는 독립 저장소에 올릴 파일을 준비하는 폴더입니다. 이 폴더 자체를 CodexPulse 저장소의 Pages 소스로 바꾸지 않습니다. Codex Pulse의 소스·설치본·자동 업데이트는 기존 CodexPulse 저장소에서 관리합니다.

## GitHub Pages 게시

1. 조직에 공개 저장소 `btl-laserinnovation.github.io`를 만듭니다.
2. **이 폴더의 내용**을 저장소 루트에 올립니다. 구조는 `public/`, `.github/workflows/pages.yml`, `README.md`입니다. `blueocean-site/` 폴더가 한 단계 더 들어가지 않도록 합니다.
3. 저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 선택합니다.
4. Actions → **Publish BlueOcean website** → Run workflow를 실행합니다. 초기 push 시 이미 게시가 진행 중이면 중복 실행하지 않습니다.
5. workflow가 성공한 뒤 공통 프리뷰 주소와 Codex Pulse 상세·정책 페이지를 확인합니다.
6. is-a.dev 신청 #60730의 Website Preview를 실제로 열린 공통 프리뷰 주소로 바꿉니다. 아직 열리지 않는 도메인이나 예정 주소를 프리뷰로 넣지 않습니다.

이 workflow는 `public/`만 업로드합니다. 프로그램 소스코드·개인 설정·인증 파일·README·GitHub Actions 설정은 홈페이지 파일로 게시하지 않습니다. 외부 글꼴/분석 스크립트/쿠키/회원가입 폼은 사용하지 않습니다. 언어 선택 스크립트는 같은 사이트에서 제공하며 한국어/영어 선호도만 브라우저에 저장합니다.

## 다크 테마와 언어 선택

전체 사이트는 짙은 남색의 다크 테마이며, 바다 SVG도 밤바다 색상입니다. Codex Pulse 아이콘과 예시 위젯은 원래 색상으로 표시합니다. 이미지에 반전·명암 필터를 적용하지 않습니다.

처음 방문했을 때 기본 언어는 한국어입니다. 상단의 **한국어 / EN** 버튼으로 서비스 소개·FAQ·정책·메타데이터를 전환할 수 있습니다. 선택은 `blueocean.language` 로컬 저장소에 저장하며, 페이지 간 링크의 `lang=ko` 또는 `lang=en` 값으로도 유지합니다. Google OAuth나 사용자 계정과 연결하지 않습니다.

번역은 HTML 요소의 `data-en` 속성과 `data-en-alt`, `data-en-aria-label`, `data-en-content` 속성에 함께 작성합니다. 표시할 한국어는 원래 HTML에 남겨 JavaScript가 꺼져 있어도 읽을 수 있습니다. 앱의 실제 모습에 해당하는 예시 위젯 내부 글자는 번역하지 않습니다.

## 도메인 연결

1. `blueocean.is-a.dev` 신청이 병합되었는지 확인합니다.
2. **공통 홈페이지 저장소**의 Settings → Pages → Custom domain에 `blueocean.is-a.dev`를 저장합니다.
3. DNS 확인과 인증서 발급 뒤 Enforce HTTPS를 켭니다. 설정은 CodexPulse 저장소가 아닌 공통 홈페이지 저장소에 합니다.
4. Search Console의 **도메인 속성**에서 `blueocean.is-a.dev`의 DNS TXT 소유권을 확인합니다. OAuth 프로젝트 소유 계정으로 확인하고 TXT 기록은 유지합니다.
5. Google 브랜딩에는 아래 정보를 등록합니다.

| 항목 | 값 |
| --- | --- |
| 승인된 도메인 | `blueocean.is-a.dev` |
| Codex Pulse 홈페이지 | `https://blueocean.is-a.dev/codexpulse/` |
| 개인정보처리방침 | `https://blueocean.is-a.dev/codexpulse/privacy.html` |
| 이용약관 | `https://blueocean.is-a.dev/codexpulse/terms.html` |

브랜딩과 Google 캘린더 데이터 액세스 검증은 별개입니다. 현재 웹페이지는 공개 검증이 완료되지 않았다는 사실을 표시합니다. 실제 승인 상태가 바뀌면 해당 문구도 업데이트해야 합니다. Google 검토용 앱 내부 개인정보 고지·정책 링크는 앱 코드에서 별도로 점검해야 합니다.

## 서비스 추가와 디자인 변경

- `public/index.html`: 공통 메인 화면·서비스 목록·소개·지원
- `public/assets/styles.css`: 공통 색상·글꼴·레이아웃·모바일 대응
- `public/assets/blueocean.svg`: BlueOcean 로고
- `public/assets/ocean.svg`: 코드로 제작한 바다 일러스트
- `public/codexpulse/`: Codex Pulse 상세 페이지·정책
- `public/privacy.html`: 공통 홈페이지 방문 정보 안내

새 서비스를 추가할 때 `public/<서비스명>/index.html`과 필요한 정책 페이지를 만들고 공통 메인에 서비스 카드를 추가합니다. 해당 서비스만의 설정·데이터 처리·Google 권한이 있다면 개별 안내를 작성합니다. 하위 경로 추가에는 새로운 is-a.dev DNS 신청이 필요하지 않습니다.

Codex Pulse 설치 버튼은 기존 공개 Releases의 최신 Setup을 가리킵니다. 개인 OAuth 설정, 사용자 토큰, 계정 정보는 이 저장소에 넣지 않습니다.
