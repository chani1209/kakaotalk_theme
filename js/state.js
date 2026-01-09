/**
 * KakaoTalk Theme Creator - State Management
 * 상태 관리
 */

// 프로젝트 데이터
const projectData = {
    manifest: {
        name: 'My Theme',
        version: '25.11.0',
        id: 'com.kakao.talk.theme.custom',
        author: 'Author',
        url: '',
        style: 'light'
    },
    images: {},
    colors: {}
};

// 현재 상태
let currentStep = 1;
let editorFilename = '';
let filerobotEditor = null;

/**
 * 프로젝트 데이터 업데이트
 */
function updateProjectData() {
    projectData.manifest.name = document.getElementById('themeName')?.value || 'My Theme';
    projectData.manifest.id = document.getElementById('themeId')?.value || 'com.kakao.talk.theme.custom';
    projectData.manifest.version = document.getElementById('themeVersion')?.value || '25.11.0';
    projectData.manifest.author = document.getElementById('themeAuthor')?.value || 'Author';
    projectData.manifest.style = document.querySelector('input[name="themeStyle"]:checked')?.value || 'light';
}

/**
 * 폼 값 가져오기
 */
function getFormValue(id, defaultValue) {
    return document.getElementById(id)?.value || defaultValue;
}

/**
 * 모든 폼 데이터 수집
 */
function collectFormData() {
    const formData = {};
    document.querySelectorAll('input[type="color"], input[type="text"], input[type="number"]').forEach(input => {
        if (input.id) {
            formData[input.id] = input.value;
        }
    });
    formData.themeStyle = document.querySelector('input[name="themeStyle"]:checked')?.value || 'light';
    return formData;
}

/**
 * 폼 데이터 복원
 */
function restoreFormData(formData) {
    for (const [id, value] of Object.entries(formData)) {
        const el = document.getElementById(id);
        if (el) {
            el.value = value;
        }
    }
    if (formData.themeStyle) {
        const radio = document.querySelector(`input[name="themeStyle"][value="${formData.themeStyle}"]`);
        if (radio) radio.checked = true;
    }
}

/**
 * 샘플 테마 로드
 */
function loadSampleTheme() {
    document.getElementById('themeName').value = APEACH_SAMPLE.manifest.name;
    document.getElementById('themeId').value = APEACH_SAMPLE.manifest.id;
    document.getElementById('themeAuthor').value = APEACH_SAMPLE.manifest.author;
    
    for (const [id, value] of Object.entries(APEACH_SAMPLE.colors)) {
        const el = document.getElementById(id);
        if (el) el.value = value;
    }
    
    updateProjectData();
    updatePreview();
    alert('Apeach 샘플 테마를 불러왔습니다!');
}
