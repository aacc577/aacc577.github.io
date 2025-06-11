// js/typing.js

document.addEventListener('DOMContentLoaded', function() {
    // 打字机效果
    const typingText = document.getElementById('typing-text');
    const texts = [
        "Welcome to My","欢迎来到我的",
        "Tech Blog","科技博客",
        "QwQ","QwQ",
        "Hello 👋~","你好👋~",
        "This is a demonstration of a typewriter effect","这是一个打字机效果的演示",
        "I hope you like the effect","希望你喜欢这个效果",
        "Feel free to browse through my blog content","请随意浏览我的博客内容",
        "Thank you for visiting!" ,"感谢你的访问！",
        "Have a nice day!" ,"祝你有美好的一天！",
        "Thank you for following my blog","谢谢关注我的博客",
        "The future is full of infinite possibilities ♾️","未来充满无限可能♾️",
        "This blog initially seemed very low","这个博客最初看起来非常low",
        "But now it's okay","但现在已经变得还行了🌊⭐",
        "Welcome to my tech blog 🙂","欢迎来到我的科技博客🙂",
        "Are you still watching?","你还在看吗？",
        "Hello! Welcome!",
        "你好!欢迎!",
        "Welcome to my personal tech blog",
        "欢迎来到我的个人科技博客",
        "Thank you for visiting my blog!",
        "感谢你访问我的博客！",
        "...",
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