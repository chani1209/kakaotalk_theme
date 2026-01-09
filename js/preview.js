/**
 * KakaoTalk Theme Creator - Preview
 * 미리보기 업데이트 관련 기능
 */

/**
 * 디바이스 미리보기 변경
 */
function changeDevicePreview() {
    const selector = document.getElementById('deviceSelector');
    if (!selector) return;
    
    const deviceKey = selector.value;
    // DEVICE_PRESETS must be available from config.js
    const device = DEVICE_PRESETS[deviceKey];
    if (!device) return;
    
    // Update Info Text
    const infoEl = document.getElementById('deviceInfo');
    if (infoEl) {
        infoEl.textContent = `${device.name} • ${device.width}×${device.height} • @${device.scale}x`;
    }
    
    // Update Frame Size
    const frame = document.getElementById('phoneFrame');
    if (frame) {
        // Base width for preview is 280px (Standard size fitting the panel)
        // We calculate height based on the device aspect ratio
        const baseWidth = 280;
        const ratio = device.height / device.width;
        const newHeight = Math.round(baseWidth * ratio);
        
        frame.style.width = `${baseWidth}px`;
        frame.style.height = `${newHeight}px`;
        
        // Add specific class for potential CSS adjustments (e.g. notch styling)
        frame.className = `phone-frame bg-white relative transition-all duration-300 ease-in-out ${deviceKey}`;
    }
}

/**
 * 미리보기 업데이트
 */
function updatePreview() {
    const root = document.documentElement;
    
    // CSS 변수 업데이트
    root.style.setProperty('--chat-bg', getFormValue('chatBgColor', '#FFDEDE'));
    root.style.setProperty('--bubble-send-bg', getFormValue('sendBtnBgColor', '#FF7F7F'));
    root.style.setProperty('--bubble-send-text', getFormValue('bubbleSendTextColor', '#FFFFFF'));
    root.style.setProperty('--bubble-receive-text', getFormValue('bubbleReceiveTextColor', '#4D4D4D'));
    root.style.setProperty('--input-bg', getFormValue('inputBgColor', '#FFFFFF'));
    root.style.setProperty('--header-text', getFormValue('headerTextColor', '#664242'));
    root.style.setProperty('--main-bg', getFormValue('mainBgColor', '#FFDEDE'));
    root.style.setProperty('--main-text', getFormValue('mainTextColor', '#664242'));
    
    // 미리보기 컴포넌트 업데이트
    updateChatPreview();
    updateMainPreview();
}

/**
 * 채팅방 미리보기 업데이트
 */
function updateChatPreview() {
    const chatBg = document.getElementById('chatPreviewBg');
    if (chatBg) {
        chatBg.style.backgroundColor = getFormValue('chatBgColor', '#FFDEDE');
    }
    
    // 보낸 말풍선
    const sendBubbles = document.querySelectorAll('.send-bubble');
    sendBubbles.forEach(bubble => {
        bubble.style.backgroundColor = getFormValue('sendBtnBgColor', '#FF7F7F');
        bubble.style.color = getFormValue('bubbleSendTextColor', '#FFFFFF');
    });
    
    // 받은 말풍선
    const recvBubbles = document.querySelectorAll('.receive-bubble');
    recvBubbles.forEach(bubble => {
        bubble.style.color = getFormValue('bubbleReceiveTextColor', '#4D4D4D');
    });
    
    // 인풋바
    const inputBar = document.querySelector('.input-bar-preview');
    if (inputBar) {
        inputBar.style.backgroundColor = getFormValue('inputBgColor', '#FFFFFF');
    }
}

/**
 * 메인화면 미리보기 업데이트
 */
function updateMainPreview() {
    const mainBg = document.getElementById('mainPreviewBg');
    if (mainBg) {
        mainBg.style.backgroundColor = getFormValue('mainBgColor', '#FFDEDE');
    }
    
    const headerText = document.querySelectorAll('.header-text-preview');
    headerText.forEach(el => {
        el.style.color = getFormValue('headerTextColor', '#664242');
    });
}

/**
 * 현재 Step에 맞는 미리보기 화면 전환
 */
function switchPreviewForStep(step) {
    // 미리보기 컨테이너들
    const mainPreview = document.getElementById('mainScreenPreview');
    const chatPreview = document.getElementById('chatRoomPreview');
    const otherPreview = document.getElementById('otherSettingsPreview');
    
    // 모두 숨기기
    [mainPreview, chatPreview, otherPreview].forEach(el => {
        if (el) el.style.display = 'none';
    });
    
    // 현재 Step에 맞는 미리보기 표시
    switch(step) {
        case 2:
            if (mainPreview) mainPreview.style.display = 'block';
            break;
        case 3:
            if (chatPreview) chatPreview.style.display = 'flex';
            break;
        case 4:
            if (otherPreview) otherPreview.style.display = 'block';
            break;
        default:
            // Step 1은 기본 미리보기 (채팅방)
            if (chatPreview) chatPreview.style.display = 'flex';
            break;
    }
}
