import fitz

doc = fitz.open(r'카카오톡 사용자 테마 제작가이드_25.11.0_iOS.pdf')
with open('pdf_content.txt', 'w', encoding='utf-8') as f:
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text('text')
        if text.strip():
            f.write(f'PAGE {page_num + 1}\n')
            f.write('-' * 50 + '\n')
            f.write(text)
            f.write('\n\n')
print("Done!")
