/**
 * KakaoTalk Theme Creator - Build & File Operations
 * 빌드, 저장, 로드 기능
 */

/**
 * 테마 빌드 (.ktheme 파일 생성)
 */
async function buildTheme() {
    updateProjectData();
    const zip = new JSZip();
    const imgFolder = zip.folder('Images');
    
    // CSS 파일 생성
    zip.file('KakaoTalkTheme.css', generateCSS());
    
    // 이미지 파일 추가
    for (const [filename, dataUrl] of Object.entries(projectData.images)) {
        const base64 = dataUrl.split(',')[1];
        imgFolder.file(filename, base64, { base64: true });
    }
    
    // ZIP 생성 및 다운로드
    const blob = await zip.generateAsync({ type: 'blob' });
    const themeName = projectData.manifest.name.replace(/\s+/g, '_');
    saveAs(blob, themeName + '.ktheme');
}

/**
 * 프로젝트 저장 (ZIP)
 */
async function saveProject() {
    updateProjectData();
    const zip = new JSZip();
    
    // 폼 데이터 수집
    const formData = collectFormData();
    
    // 프로젝트 데이터 저장
    zip.file('project_data.json', JSON.stringify({
        manifest: projectData.manifest,
        formData: formData,
        images: Object.keys(projectData.images)
    }, null, 2));
    
    // 이미지 저장
    const imgFolder = zip.folder('Images');
    for (const [filename, dataUrl] of Object.entries(projectData.images)) {
        const base64 = dataUrl.split(',')[1];
        imgFolder.file(filename, base64, { base64: true });
    }
    
    // ZIP 생성 및 다운로드
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, projectData.manifest.name.replace(/\s+/g, '_') + '_project.zip');
}

/**
 * 프로젝트 로드 트리거
 */
function loadProject() {
    document.getElementById('fileInput').click();
}

/**
 * 프로젝트 파일 로드 핸들러
 */
async function handleFileLoad(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    try {
        const zip = await JSZip.loadAsync(file);
        const dataFile = zip.file('project_data.json');
        
        if (dataFile) {
            const data = JSON.parse(await dataFile.async('string'));
            
            // Manifest 복원
            projectData.manifest = data.manifest;
            
            // 폼 데이터 복원
            restoreFormData(data.formData);
            
            // 이미지 복원
            for (const filename of data.images) {
                const imgFile = zip.file('Images/' + filename);
                if (imgFile) {
                    const base64 = await imgFile.async('base64');
                    projectData.images[filename] = 'data:image/png;base64,' + base64;
                    
                    // 미리보기 업데이트
                    updateImagePreview(filename.replace('.png', ''), projectData.images[filename]);
                }
            }
            
            updatePreview();
            alert('프로젝트를 불러왔습니다!');
        } else {
            alert('유효한 프로젝트 파일이 아닙니다.');
        }
    } catch (e) {
        console.error('Error loading project:', e);
        alert('프로젝트 로드 중 오류가 발생했습니다.');
    }
}
