/**
 * KakaoTalk Theme Creator - Main App
 * 앱 초기화 및 UI 이벤트 핸들러
 */

/**
 * 앱 초기화
 */
function initApp() {
    lucide.createIcons();
    updatePreview();
    
    // 디바이스별 화면 목록 생성 (preview.js)
    if (typeof populateDeviceSelector === 'function') {
        populateDeviceSelector();
    }
    
    // 초기 디바이스 설정 적용
    if (typeof changeDevicePreview === 'function') {
        changeDevicePreview();
    }
    
    // 첫 방문시 도움말 표시
    if (!localStorage.getItem('helpShown')) {
        setTimeout(() => openHelpModal(), 500);
        localStorage.setItem('helpShown', 'true');
    }
}

/**
 * 도움말 모달 열기
 */
function openHelpModal() {
    document.getElementById('helpModal').classList.add('active');
    lucide.createIcons();
}

/**
 * 도움말 모달 닫기
 */
function closeHelpModal() {
    document.getElementById('helpModal').classList.remove('active');
}

/**
 * Step 이동
 */
function goToStep(step) {
    // Step 컨텐츠 전환
    document.querySelectorAll('.step-content').forEach(el => el.classList.add('hidden'));
    document.getElementById('step' + step).classList.remove('hidden');
    
    // Step 버튼 스타일 업데이트
    document.querySelectorAll('.step-btn').forEach((btn, i) => {
        if (i === step - 1) {
            // Active State
            btn.classList.add('step-active');
            btn.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
        } else {
            // Inactive State
            btn.classList.remove('step-active');
            btn.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
        }
    });
    
    currentStep = step;
    
    // 미리보기 전환
    if (typeof switchPreviewForStep === 'function') {
        switchPreviewForStep(step);
    }
}

/**
 * 이벤트 리스너 설정
 */
function setupEventListeners() {
    // 색상 입력 변경시 미리보기 업데이트
    document.querySelectorAll('input[type="color"]').forEach(input => {
        input.addEventListener('change', updatePreview);
        input.addEventListener('input', updatePreview);
    });
    
    // 텍스트 입력 변경시 데이터 업데이트
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => {
        input.addEventListener('change', updateProjectData);
    });
    
    // 라디오 버튼 변경시 데이터 업데이트
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', updateProjectData);
    });
}

// DOM 로드시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupEventListeners();
});
