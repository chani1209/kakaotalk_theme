# KakaoTalk Theme Creator - TODO

## 프로젝트 구조
```
kakaotalk_ios/
├── index.html         # 메인 HTML (UI 구조)
├── js/
│   ├── config.js      # 설정 및 상수
│   ├── state.js       # 상태 관리 (projectData)
│   ├── editor.js      # Filerobot 에디터 관련
│   ├── preview.js     # 미리보기 업데이트
│   ├── css-generator.js # CSS 생성
│   ├── build.js       # 빌드/저장/로드
│   └── app.js         # 메인 앱 로직
└── TODO.md            # 이 파일
```

---

## Phase 0: 코드 리팩토링 ✅
- [x] JS 코드 모듈 분리
- [x] TODO 파일 생성
- [x] 테스트 및 검증
- [x] index.html 인라인 스크립트 제거 및 모듈 연결

---

## Phase 0.5: 디바이스 미리보기 사이즈
> 다양한 디바이스 화면 크기로 미리보기 가능하도록

### 지원 디바이스 목록

#### iPhone 시리즈
| 모델 | 논리 해상도 | 물리 해상도 | 비율 |
|------|------------|------------|------|
| iPhone SE (3rd) | 375×667 | 750×1334 | @2x |
| iPhone 8 | 375×667 | 750×1334 | @2x |
| iPhone 12/13 mini | 375×812 | 1080×2340 | @3x |
| iPhone 12/13/14 | 390×844 | 1170×2532 | @3x |
| iPhone 14 Pro | 393×852 | 1179×2556 | @3x |
| iPhone 14 Pro Max | 430×932 | 1290×2796 | @3x |
| iPhone 15 | 393×852 | 1179×2556 | @3x |
| iPhone 15 Pro Max | 430×932 | 1290×2796 | @3x |

#### Android 시리즈
| 모델 | 논리 해상도 | 물리 해상도 | 비율 |
|------|------------|------------|------|
| Galaxy S23 | 360×780 | 1080×2340 | @3x |
| Galaxy S24 | 360×780 | 1080×2340 | @3x |
| Galaxy S24 Ultra | 384×824 | 1440×3088 | xxhdpi |
| Pixel 7 | 412×892 | 1080×2400 | @2.625x |
| Pixel 8 Pro | 412×892 | 1344×2992 | @3.5x |

### 구현 항목
- [x] 디바이스 선택 드롭다운 UI
- [x] https://yesviz.com 참조하여 데이터 추가. 아이폰/안드로이드 최근 3년치 모델 추가
- [x] 미리보기 크기 동적 변경
- [x] config.js에 디바이스 설정 추가

---

## Phase 1.5: UI/UX Redesign (High-End SaaS)
> [UI/UX Design Principles for High-End SaaS] 적용

### Design System
- **Color Palette**
  - Base: Slate-50 (#F8FAFC) - 전체 배경
  - Surface: White (#FFFFFF) - 카드, 패널 배경
  - Primary: Indigo-600 (#4F46E5) - 주요 버튼, 강조
  - Text: Slate-900 (Headings), Slate-600 (Body)
  - Borders: Slate-200 (1.5px solid)

- **Spacing & Layout**
  - Grid: 8pt grid system
  - Padding: 16px / 24px standard
  - Whitespace: 섹션 간 충분한 여백 확보

- **Effects**
  - Shadows: `0 4px 6px -1px rgb(0 0 0 / 0.1)` (Subtle Soft)
  - Backdrop Blur: `backdrop-blur-md` (10px) for modals/overlays
  - Corner Radius: 12px (Cards), 8px (Buttons)

- **Components**
  - **Buttons**:
    - Primary: Indigo-600 bg, White text, hover scale 1.02
    - Ghost: No bg, Slate-600 text -> Slate-900 on hover
  - **Inputs**:
    - Light styling (White bg, Slate-200 border, Slate-900 text)
    - Focus ring with Indigo-600

### 구현 작업
- [x] Global Background 변경 (Slate-900 -> Slate-50)
- [x] Sidebar & Panels 스타일 변경 (Dark -> White Surface)
- [x] Typography 및 색상 업데이트
- [x] Buttons & Inputs 스타일 재정의
- [x] Glassmorphism 효과 적용 (Modals)

---

## Phase 1: UI 구조 개선
> 각 Step에 맞는 미리보기 화면 구현

### 1.1 미리보기 컴포넌트 분리
- [ ] 메인화면 미리보기 (친구탭)
- [ ] 메인화면 미리보기 (채팅탭)
- [ ] 채팅방 미리보기 (현재 있음, 개선 필요)
- [ ] 잠금화면 미리보기
- [ ] Step 변경시 미리보기 전환 로직

### 1.2 Step별 옵션 패널 재구성
- [ ] Step 2 (메인화면): TabBar, Header, MainView 그룹화
- [ ] Step 3 (채팅방): InputBar, MessageCell 그룹화
- [ ] Step 4 (기타): Passcode, Notification, Banner 그룹화

---

## Phase 2: Step 2 - 메인화면 옵션 완성

### 2.1 TabBarStyle-Main
- [ ] background-color
- [ ] -ios-background-image (maintabBgImage.png)
- [ ] 친구 아이콘 (normal/selected)
- [ ] 채팅 아이콘 (normal/selected)
- [ ] 지금 아이콘 (normal/selected)
- [ ] 쇼핑 아이콘 (normal/selected)
- [ ] 더보기 아이콘 (normal/selected)
- [ ] 콜 아이콘 (normal/selected)

### 2.2 HeaderStyle-Main
- [ ] -ios-text-color (헤더 타이틀)
- [ ] -ios-tab-text-color (탭 기본)
- [ ] -ios-tab-highlighted-text-color (탭 선택)

### 2.3 MainViewStyle-Primary
- [ ] background-color
- [ ] -ios-background-image (mainBgImage.png)
- [ ] -ios-text-color
- [ ] -ios-description-text-color
- [ ] -ios-highlighted-text-color
- [ ] -ios-paragraph-text-color
- [ ] -ios-selected-background-color
- [ ] -ios-selected-background-alpha

### 2.4 SectionTitleStyle-Main
- [ ] -ios-description-text-color
- [ ] border-color
- [ ] border-alpha

### 2.5 기타 메인화면 요소
- [ ] ButtonStyle-AddFriend (-ios-image)
- [ ] DefaultProfileStyle (-ios-profile-images)
- [ ] FeatureStyle-Primary (-ios-text-color)

---

## Phase 3: Step 3 - 채팅방 옵션 완성

### 3.1 BackgroundStyle-ChatRoom
- [x] background-color
- [x] -ios-background-image

### 3.2 InputBarStyle-Chat (9개 속성)
- [ ] background-color
- [ ] -ios-send-normal-background-color
- [ ] -ios-send-highlighted-background-color
- [ ] -ios-send-normal-foreground-color
- [ ] -ios-send-highlighted-foreground-color
- [ ] -ios-button-normal-foreground-color
- [ ] -ios-button-highlighted-foreground-color
- [ ] -ios-button-text-color (NEW)
- [ ] -ios-button-normal-background-color (NEW)

### 3.3 MessageCellStyle-Send
- [x] -ios-background-image (chatroomBubbleSend01.png)
- [ ] -ios-selected-background-image
- [ ] -ios-group-background-image
- [ ] -ios-group-selected-background-image
- [ ] -ios-title-edgeinsets
- [ ] -ios-text-color
- [ ] -ios-selected-text-color
- [ ] -ios-unread-text-color

### 3.4 MessageCellStyle-Receive
- [x] -ios-background-image (chatroomBubbleReceive01.png)
- [ ] -ios-selected-background-image
- [ ] -ios-group-background-image
- [ ] -ios-group-selected-background-image
- [ ] -ios-title-edgeinsets
- [ ] -ios-text-color
- [ ] -ios-selected-text-color
- [ ] -ios-unread-text-color

---

## Phase 4: Step 4 - 기타 설정 완성

### 4.1 BackgroundStyle-Passcode
- [ ] background-color
- [ ] -ios-background-image

### 4.2 LabelStyle-PasscodeTitle
- [ ] -ios-text-color

### 4.3 PasscodeStyle
- [ ] -ios-bullet-first-image ~ fourth-image (4개)
- [ ] -ios-bullet-selected-first-image ~ fourth-image (4개)
- [ ] -ios-keypad-background-color
- [ ] -ios-keypad-text-normal-color
- [ ] -ios-keypad-number-highlighted-image

### 4.4 알림 배너
- [ ] BackgroundStyle-MessageNotificationBar (background-color)
- [ ] LabelStyle-MessageNotificationBarName (-ios-text-color)
- [ ] LabelStyle-MessageNotificationBarMessage (-ios-text-color)

### 4.5 전달완료 배너
- [ ] BackgroundStyle-DirectShareBar (background-color)
- [ ] LabelStyle-DirectShareBarName (-ios-text-color)
- [ ] LabelStyle-DirectShareBarMessage (-ios-text-color)

### 4.6 하단 배너
- [ ] BottomBannerStyle (background-color)

---

## 이미지 목록 (총 28개+)

### 필수 이미지
| 파일명 | 크기 | 설명 |
|--------|------|------|
| commonIcoTheme.png | 162×162 | 테마 아이콘 |
| maintabBgImage.png | 750×146 @2x | 탭바 배경 |
| mainBgImage.png | 750×1334 @2x | 메인 배경 |
| chatroomBgImage.png | 750×1334 @2x | 채팅방 배경 |

### 탭 아이콘 (12개)
| 파일명 | 크기 | 설명 |
|--------|------|------|
| maintabIcoFriends.png | 90×90 @2x | 친구 |
| maintabIcoFriendsSelected.png | 90×90 @2x | 친구 선택 |
| maintabIcoChats.png | 90×90 @2x | 채팅 |
| ... | ... | ... |

### 말풍선 이미지 (8개)
| 파일명 | 크기 | 설명 |
|--------|------|------|
| chatroomBubbleSend01.png | 자유 | 보낸 말풍선 |
| chatroomBubbleSend01Selected.png | 자유 | 보낸 선택 |
| chatroomBubbleReceive01.png | 자유 | 받은 말풍선 |
| ... | ... | ... |

### 잠금화면 이미지 (10개)
| 파일명 | 크기 | 설명 |
|--------|------|------|
| passcodeBgImage.png | 750×1334 @2x | 잠금 배경 |
| passcodeImgCode01~04.png | 60×60 @2x | 불릿 |
| passcodeImgCode01~04Selected.png | 60×60 @2x | 불릿 선택 |
| passcodeKeypadPressed.png | 자유 | 키패드 눌림 |

---

## 개발 가이드

### 새 옵션 추가 방법
1. `index.html`에 UI 요소 추가
2. `js/config.js`에 기본값 및 설정 추가
3. `js/css-generator.js`에 CSS 생성 로직 추가
4. `js/preview.js`에 미리보기 업데이트 로직 추가

### 새 이미지 업로드 추가 방법
1. `index.html`에 파일 input 추가
2. `js/config.js`의 `imageConfigs`에 크기 정보 추가
3. `handleImageUploadWithEditor()` 함수 사용
4. 필요시 미리보기 업데이트
