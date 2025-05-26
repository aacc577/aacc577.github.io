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
        "Translation from Chinese to English The word count would be much better This page was originally designed for Chinese Typography issues may arise in some places using English Thank you for your understanding","从中文到英文的翻译字数会好得多此页面最初是为中文设计的在某些地方使用英语可能会出现排版问题感谢您的理解",
        "If you have any questions or suggestions","如果你有任何问题或建议",
        "Feel free to leave me a message","欢迎给我说留言",
        "Thank you for visiting!" ,"感谢你的访问！",
        "Looking forward to communicating with you","期待与你的交流",
        "Have a nice day!" ,"祝你有美好的一天！",
        "Exploring the infinite possibilities of technology","探索科技的无限可能",
        "Let's learn and grow together","让我们一起学习和成长",
        "Technology changes life","科技改变生活",
        "The future belongs to scientific and technological innovation","未来属于科技创新",
        "Be curious and explore","保持好奇心，勇于探索",
        "Every day is a new beginning","每一天都是新的开始",
        "Let's meet the challenge together","让我们一起迎接挑战",
        "Technology makes the world a better place","科技让世界更美好",
        "Thank you for following my blog","谢谢关注我的博客",
        "Let's explore more tech topics together","一起探索更多科技话题",
        "Let's share knowledge and experience together","让我们一起分享知识和经验",
        "The power of science and technology lies in sharing","科技的力量在于分享",
        "Let's learn new technologies together","让我们一起学习新技术",
        "Constantly improve yourself","不断提升自我",
        "Technology makes life easier","科技让生活更便捷",
        "Let's embrace change together","让我们一起拥抱变化",
        "The future is full of infinite possibilities ♾️","未来充满无限可能♾️",
        "This blog initially seemed very low","这个博客最初看起来非常low",
        "But now it's 🌊⭐ okay","但现在已经变得还行了🌊⭐",
        "Welcome to my tech blog 🙂","欢迎来到我的科技博客🙂",
        "Are you still watching?","你还在看吗？",
        "AAAAAAAAA AAAAAAAAAAAA AAAAAAAAAAA AAAAAAAAAAA AAAAAAAAAAAA AAAAAAAAAAA AAAAAAAAAAAA AAAAAAAAAAA AAAAAAAAAAAAA AAAAAAAAAA AAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAA AAAAAAAAA","额(⊙﹏⊙)我不想说废话I'm sorry"
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