/**
 * KakaoTalk Theme Creator - Configuration
 * 설정 및 상수 정의
 */

// 디바이스 화면 프리셋 (미리보기용)
const DEVICE_PRESETS = {
    // iPhone 시리즈
    'iphone-se': { name: 'iPhone SE', width: 375, height: 667, scale: 2, type: 'iphone' },
    'iphone-8': { name: 'iPhone 8', width: 375, height: 667, scale: 2, type: 'iphone' },
    'iphone-12-mini': { name: 'iPhone 12/13 mini', width: 375, height: 812, scale: 3, type: 'iphone' },
    'iphone-12': { name: 'iPhone 12/13/14', width: 390, height: 844, scale: 3, type: 'iphone' },
    'iphone-14-pro': { name: 'iPhone 14 Pro', width: 393, height: 852, scale: 3, type: 'iphone' },
    'iphone-14-pro-max': { name: 'iPhone 14 Pro Max', width: 430, height: 932, scale: 3, type: 'iphone' },
    'iphone-15': { name: 'iPhone 15', width: 393, height: 852, scale: 3, type: 'iphone' },
    'iphone-15-pro-max': { name: 'iPhone 15 Pro Max', width: 430, height: 932, scale: 3, type: 'iphone' },
    
    // Android 시리즈
    'galaxy-s23': { name: 'Galaxy S23', width: 360, height: 780, scale: 3, type: 'android' },
    'galaxy-s24': { name: 'Galaxy S24', width: 360, height: 780, scale: 3, type: 'android' },
    'galaxy-s24-ultra': { name: 'Galaxy S24 Ultra', width: 384, height: 824, scale: 3.75, type: 'android' },
    'pixel-7': { name: 'Pixel 7', width: 412, height: 892, scale: 2.625, type: 'android' },
    'pixel-8-pro': { name: 'Pixel 8 Pro', width: 412, height: 892, scale: 3.5, type: 'android' },
};

// 현재 선택된 디바이스 (기본값: iPhone 14 Pro)
let currentDevice = 'iphone-14-pro';

// 이미지 유형별 크기 설정 (KakaoTalk iOS Theme Guide 기준)
const IMAGE_CONFIGS = {
    // 테마 아이콘
    'commonIcoTheme': { width: 162, height: 162, desc: '테마 아이콘', category: 'basic' },
    
    // 탭바
    'maintabBgImage': { width: 750, height: 146, desc: '탭바 배경', category: 'tabbar' },
    'maintabIcoFriends': { width: 90, height: 90, desc: '친구 아이콘', category: 'tabbar' },
    'maintabIcoFriendsSelected': { width: 90, height: 90, desc: '친구 선택 아이콘', category: 'tabbar' },
    'maintabIcoChats': { width: 90, height: 90, desc: '채팅 아이콘', category: 'tabbar' },
    'maintabIcoChatsSelected': { width: 90, height: 90, desc: '채팅 선택 아이콘', category: 'tabbar' },
    'maintabIcoNow': { width: 90, height: 90, desc: '지금 아이콘', category: 'tabbar' },
    'maintabIcoNowSelected': { width: 90, height: 90, desc: '지금 선택 아이콘', category: 'tabbar' },
    'maintabIcoShopping': { width: 90, height: 90, desc: '쇼핑 아이콘', category: 'tabbar' },
    'maintabIcoShoppingSelected': { width: 90, height: 90, desc: '쇼핑 선택 아이콘', category: 'tabbar' },
    'maintabIcoMore': { width: 90, height: 90, desc: '더보기 아이콘', category: 'tabbar' },
    'maintabIcoMoreSelected': { width: 90, height: 90, desc: '더보기 선택 아이콘', category: 'tabbar' },
    'maintabIcoCall': { width: 90, height: 90, desc: '콜 아이콘', category: 'tabbar' },
    'maintabIcoCallSelected': { width: 90, height: 90, desc: '콜 선택 아이콘', category: 'tabbar' },
    
    // 메인 화면
    'mainBgImage': { width: 750, height: 1334, desc: '메인 배경', category: 'main' },
    'findBtnAddFriend': { width: 90, height: 90, desc: '친구추가 버튼', category: 'main' },
    'profileImg01': { width: 180, height: 180, desc: '기본 프로필', category: 'main' },
    
    // 채팅방
    'chatroomBgImage': { width: 750, height: 1334, desc: '채팅방 배경', category: 'chatroom' },
    'chatroomBubbleSend01': { width: 100, height: 100, desc: '보낸 말풍선', category: 'chatroom' },
    'chatroomBubbleSend01Selected': { width: 100, height: 100, desc: '보낸 말풍선 선택', category: 'chatroom' },
    'chatroomBubbleSend02': { width: 100, height: 100, desc: '보낸 그룹 말풍선', category: 'chatroom' },
    'chatroomBubbleSend02Selected': { width: 100, height: 100, desc: '보낸 그룹 말풍선 선택', category: 'chatroom' },
    'chatroomBubbleReceive01': { width: 100, height: 100, desc: '받은 말풍선', category: 'chatroom' },
    'chatroomBubbleReceive01Selected': { width: 100, height: 100, desc: '받은 말풍선 선택', category: 'chatroom' },
    'chatroomBubbleReceive02': { width: 100, height: 100, desc: '받은 그룹 말풍선', category: 'chatroom' },
    'chatroomBubbleReceive02Selected': { width: 100, height: 100, desc: '받은 그룹 말풍선 선택', category: 'chatroom' },
    
    // 잠금화면
    'passcodeBgImage': { width: 750, height: 1334, desc: '잠금화면 배경', category: 'passcode' },
    'passcodeImgCode01': { width: 60, height: 60, desc: '비밀번호 불릿 1', category: 'passcode' },
    'passcodeImgCode02': { width: 60, height: 60, desc: '비밀번호 불릿 2', category: 'passcode' },
    'passcodeImgCode03': { width: 60, height: 60, desc: '비밀번호 불릿 3', category: 'passcode' },
    'passcodeImgCode04': { width: 60, height: 60, desc: '비밀번호 불릿 4', category: 'passcode' },
    'passcodeImgCode01Selected': { width: 60, height: 60, desc: '비밀번호 불릿 1 선택', category: 'passcode' },
    'passcodeImgCode02Selected': { width: 60, height: 60, desc: '비밀번호 불릿 2 선택', category: 'passcode' },
    'passcodeImgCode03Selected': { width: 60, height: 60, desc: '비밀번호 불릿 3 선택', category: 'passcode' },
    'passcodeImgCode04Selected': { width: 60, height: 60, desc: '비밀번호 불릿 4 선택', category: 'passcode' },
    'passcodeKeypadPressed': { width: 150, height: 150, desc: '키패드 눌림', category: 'passcode' },
};

// 기본 색상 값
const DEFAULT_COLORS = {
    // 헤더
    headerTextColor: '#664242',
    tabTextColor: '#B39898',
    tabHighlightColor: '#664242',
    
    // 메인 뷰
    mainBgColor: '#FFDEDE',
    mainTextColor: '#664242',
    descTextColor: '#805959',
    
    // 채팅방
    chatBgColor: '#FFDEDE',
    inputBgColor: '#FFFFFF',
    sendBtnBgColor: '#FF7F7F',
    sendBtnFgColor: '#FFFFFF',
    bubbleSendTextColor: '#FFFFFF',
    bubbleReceiveTextColor: '#4D4D4D',
    
    // 잠금화면
    passcodeBgColor: '#FFDEDE',
    passcodeTitleColor: '#664242',
    keypadBgColor: '#FFF2F2',
    
    // 알림
    notifBgColor: '#FCC5C5',
    notifNameColor: '#604242',
    notifMsgColor: '#805959',
};

// 한글 번역 (Filerobot Image Editor용)
const KOREAN_TRANSLATIONS = {
    name: '이름',
    save: '저장',
    saveAs: '다른 이름으로 저장',
    back: '뒤로',
    loading: '로딩 중...',
    resetOperations: '모든 작업 초기화',
    changesLoseWarningHint: '"초기화" 버튼을 누르면 변경사항이 사라집니다. 계속하시겠습니까?',
    discardChangesWarningHint: '모달을 닫으면 마지막 변경사항이 저장되지 않습니다.',
    cancel: '취소',
    apply: '적용',
    warning: '경고',
    confirm: '확인',
    discardChanges: '변경사항 취소',
    undoTitle: '실행 취소',
    redoTitle: '다시 실행',
    showImageTitle: '원본 이미지 보기',
    zoomInTitle: '확대',
    zoomOutTitle: '축소',
    toggleZoomMenuTitle: '줌 메뉴 전환',
    adjustTab: '조정',
    finetuneTab: '미세조정',
    filtersTab: '필터',
    watermarkTab: '워터마크',
    annotateTabLabel: '주석',
    resize: '크기 조정',
    resizeTab: '크기 조정',
    imageName: '이미지 이름',
    invalidImageError: '잘못된 이미지입니다.',
    uploadImageError: '이미지 업로드 오류.',
    cropTool: '자르기',
    original: '원본',
    custom: '사용자 정의',
    square: '정사각형',
    landscape: '가로형',
    portrait: '세로형',
    ellipse: '타원',
    arrowTool: '화살표',
    blurTool: '흐림',
    brightnessTool: '밝기',
    contrastTool: '대비',
    ellipseTool: '타원',
    flipX: '좌우 반전',
    flipY: '상하 반전',
    unFlipX: '좌우 반전 취소',
    unFlipY: '상하 반전 취소',
    hsvTool: 'HSV',
    hue: '색조',
    brightness: '밝기',
    saturation: '채도',
    value: '명도',
    imageTool: '이미지',
    importing: '가져오는 중...',
    addImage: '+ 이미지 추가',
    uploadImage: '이미지 업로드',
    lineTool: '선',
    penTool: '펜',
    polygonTool: '다각형',
    sides: '면',
    rectangleTool: '사각형',
    cornerRadius: '모서리 반경',
    resizeWidthTitle: '너비 (픽셀)',
    resizeHeightTitle: '높이 (픽셀)',
    toggleRatioLockTitle: '비율 잠금 전환',
    resetSize: '원본 크기로 초기화',
    rotateTool: '회전',
    textTool: '텍스트',
    textSpacings: '텍스트 간격',
    textAlignment: '텍스트 정렬',
    fontFamily: '글꼴',
    size: '크기',
    letterSpacing: '자간',
    lineHeight: '줄 높이',
    warmthTool: '온도',
    addWatermark: '+ 워터마크 추가',
    addTextWatermark: '+ 텍스트 워터마크 추가',
    padding: '여백',
    shadow: '그림자',
    horizontal: '가로',
    vertical: '세로',
    blur: '흐림',
    opacity: '투명도',
    position: '위치',
    stroke: '테두리',
    saveAsModalTitle: '다른 이름으로 저장',
    extension: '확장자',
    format: '형식',
    nameIsRequired: '이름은 필수입니다.',
    quality: '품질',
    imageDimensionsHoverTitle: '저장 이미지 크기 (너비 x 높이)',
    actualSize: '실제 크기 (100%)',
    fitSize: '화면에 맞춤',
    download: '다운로드',
    width: '너비',
    height: '높이',
};

// 크롭 프리셋 목록
const CROP_PRESETS = {
    icons: [
        { titleKey: '테마 아이콘', descriptionKey: '162×162', ratio: 1, width: 162, height: 162 },
        { titleKey: '탭 아이콘', descriptionKey: '90×90', ratio: 1, width: 90, height: 90 },
        { titleKey: '비밀번호 아이콘', descriptionKey: '60×60', ratio: 1, width: 60, height: 60 },
    ],
    backgrounds: [
        { titleKey: '배경 (iPhone)', descriptionKey: '750×1334', ratio: 750/1334, width: 750, height: 1334 },
        { titleKey: '탭바 배경', descriptionKey: '750×146', ratio: 750/146, width: 750, height: 146 },
    ],
    standard: [
        { titleKey: '정사각형', descriptionKey: '1:1', ratio: 1 },
        { titleKey: '세로형', descriptionKey: '9:16', ratio: 9/16 },
        { titleKey: '가로형', descriptionKey: '16:9', ratio: 16/9 },
    ],
};

// Apeach 테마 샘플 값
const APEACH_SAMPLE = {
    manifest: {
        name: 'Apeach',
        id: 'com.kakao.talk.theme.apeachios',
        version: '25.8.0',
        author: 'Kakao Corp.',
        url: 'http://www.kakao.com',
        style: 'light'
    },
    colors: {
        headerTextColor: '#664242',
        tabTextColor: '#B39898',
        tabHighlightColor: '#664242',
        mainBgColor: '#FFDEDE',
        mainTextColor: '#664242',
        descTextColor: '#805959',
        chatBgColor: '#FFDEDE',
        inputBgColor: '#FFFFFF',
        sendBtnBgColor: '#FF7F7F',
        sendBtnFgColor: '#FFFFFF',
        bubbleSendTextColor: '#FFFFFF',
        bubbleReceiveTextColor: '#4D4D4D',
        passcodeBgColor: '#FFDEDE',
        passcodeTitleColor: '#664242',
        keypadBgColor: '#FFF2F2',
        notifBgColor: '#FCC5C5',
        notifNameColor: '#604242',
        notifMsgColor: '#805959',
    }
};
