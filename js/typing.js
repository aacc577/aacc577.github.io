// js/typing.js

document.addEventListener('DOMContentLoaded', function() {
    // 打字机效果
    const typingText = document.getElementById('typing-text');
    const texts = [
        "欢迎来到我的",
        "科技博客",
        "QwQ",
        "你好👋~"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isEnd = true;
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1500);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        const speed = isDeleting ? 100 : 150;
        setTimeout(type, isEnd ? speed / 2 : speed);
    }

    // 启动打字机效果
    setTimeout(type, 1000);

    // Logo打字效果
    const logo = "Techblog for aacc577";
    let logoCharIndex = 0;

    function typeLogo() {
        if (logoCharIndex < logo.length) {
            document.getElementById('typing-logo').textContent += logo[logoCharIndex];
            logoCharIndex++;
            setTimeout(typeLogo, 150);
        }
    }

    typeLogo();
});