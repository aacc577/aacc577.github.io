// js/typing.js

document.addEventListener('DOMContentLoaded', function() {
    // 打字机效果
    const typingText = document.getElementById('typing-text');
    const texts = [
        "欢迎来到我的",
        "科技博客",
        "QwQ",
        "你好👋~",
        "这是一个打字机效果的演示",
        "希望你喜欢这个效果",
        "请随意浏览我的博客内容",
        "如果你有任何问题或建议",
        "欢迎给我说留言",
        "感谢你的访问！",
        "期待与你的交流",
        "祝你有美好的一天！",
        "探索科技的无限可能",
        "让我们一起学习和成长",
        "科技改变生活",
        "未来属于科技创新",
        "保持好奇心，勇于探索",
        "每一天都是新的开始",
        "让我们一起迎接挑战",
        "科技让世界更美好",
        "谢谢关注我的博客",
        "一起探索更多科技话题",
        "让我们一起分享知识和经验",
        "科技的力量在于分享",
        "让我们一起学习新技术",
        "不断提升自我",
        "科技让生活更便捷",
        "让我们一起拥抱变化",
        "未来充满无限可能♾️",
        "这个博客最初看起来非常low🐉👑",
        "但现在已经变得还行了🌊⭐",
        "欢迎来到我的科技博客🙂",
        
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