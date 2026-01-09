/**
 * KakaoTalk Theme Creator - Image Editor
 * Filerobot Image Editor 관련 기능
 */

/**
 * 이미지 업로드 및 에디터 열기
 */
function handleImageUploadWithEditor(event, filename) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        editorFilename = filename;
        openFilerobotEditor(e.target.result);
    };
    reader.readAsDataURL(file);
}

/**
 * Filerobot 에디터 열기
 */
function openFilerobotEditor(imageSource) {
    const backdrop = document.getElementById('editor_backdrop');
    const container = document.getElementById('editor_container');
    backdrop.style.display = 'block';
    
    const { TABS, TOOLS } = window.FilerobotImageEditor;
    
    // 현재 이미지 설정 가져오기
    const currentConfig = IMAGE_CONFIGS[editorFilename] || { width: null, height: null, desc: '자유 크기' };
    
    // 배너 업데이트
    if (currentConfig.width) {
        document.getElementById('editor_size_banner').style.display = 'flex';
        document.getElementById('editor_size_title').textContent = currentConfig.desc;
        document.getElementById('editor_size_value').textContent = `${currentConfig.width}×${currentConfig.height}`;
    } else {
        document.getElementById('editor_size_banner').style.display = 'none';
    }
    
    // 크롭 프리셋 구성
    const cropPresets = currentConfig.width ? [
        { titleKey: `★ ${currentConfig.desc}`, descriptionKey: `${currentConfig.width}×${currentConfig.height}`, ratio: currentConfig.width / currentConfig.height, width: currentConfig.width, height: currentConfig.height },
    ] : [];
    
    const allPresets = [
        ...cropPresets,
        ...CROP_PRESETS.icons.filter(p => p.titleKey !== currentConfig.desc),
        ...CROP_PRESETS.backgrounds,
        ...CROP_PRESETS.standard,
    ];
    
    const config = {
        source: imageSource,
        onSave: handleEditorSave,
        onClose: closeFilerobotEditor,
        onBeforeSave: () => false, // 저장 다이얼로그 건너뛰기
        annotationsCommon: {
            fill: '#FF7F7F',
        },
        Text: {
            text: '텍스트',
            fonts: ['Roboto', 'Arial', 'sans-serif'],
        },
        tabsIds: [TABS.ADJUST, TABS.FINETUNE, TABS.FILTERS, TABS.ANNOTATE],
        defaultTabId: TABS.ADJUST,
        defaultToolId: TOOLS.CROP,
        Crop: {
            presetsItems: allPresets,
            autoResize: true,
        },
        theme: {
            palette: {
                'bg-primary': '#1e293b',
                'bg-secondary': '#0f172a',
                'accent-primary': '#6366f1',
            },
        },
        useBackendTranslations: false,
        translations: KOREAN_TRANSLATIONS,
        savingPixelRatio: 1,
        previewPixelRatio: 1,
    };
    
    filerobotEditor = new window.FilerobotImageEditor(container, config);
    filerobotEditor.render();
}

/**
 * 에디터 저장 핸들러
 */
function handleEditorSave(editedImageObject, designState) {
    const originalDataUrl = editedImageObject.imageBase64;
    const currentConfig = IMAGE_CONFIGS[editorFilename] || { width: null, height: null };
    
    // 자동 리사이즈
    if (currentConfig.width && currentConfig.height) {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = currentConfig.width;
            canvas.height = currentConfig.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, currentConfig.width, currentConfig.height);
            
            const resizedDataUrl = canvas.toDataURL('image/png');
            projectData.images[editorFilename + '.png'] = resizedDataUrl;
            
            updateImagePreview(editorFilename, resizedDataUrl);
            closeFilerobotEditor();
            alert(`${editorFilename}.png 이미지가 ${currentConfig.width}×${currentConfig.height} 크기로 저장되었습니다!`);
        };
        img.src = originalDataUrl;
    } else {
        projectData.images[editorFilename + '.png'] = originalDataUrl;
        updateImagePreview(editorFilename, originalDataUrl);
        closeFilerobotEditor();
        alert(`${editorFilename}.png 이미지가 적용되었습니다!`);
    }
}

/**
 * 이미지 미리보기 업데이트
 */
function updateImagePreview(filename, dataUrl) {
    // 테마 아이콘
    if (filename === 'commonIcoTheme') {
        const preview = document.getElementById('themeIconPreview');
        if (preview) {
            preview.innerHTML = `<img src="${dataUrl}" class="w-full h-full object-cover rounded-xl">`;
        }
    }
    
    // 채팅방 배경
    if (filename === 'chatroomBgImage') {
        const preview = document.getElementById('chatPreviewBg');
        if (preview) {
            preview.style.backgroundImage = `url(${dataUrl})`;
            preview.style.backgroundSize = 'cover';
        }
    }
    
    // 필요에 따라 추가 미리보기 업데이트...
}

/**
 * Filerobot 에디터 닫기
 */
function closeFilerobotEditor() {
    const backdrop = document.getElementById('editor_backdrop');
    const container = document.getElementById('editor_container');
    backdrop.style.display = 'none';
    container.innerHTML = '';
    if (filerobotEditor) {
        filerobotEditor.terminate();
        filerobotEditor = null;
    }
}
