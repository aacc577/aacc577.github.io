// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const texts = [
        "Hello! 欢迎参观X的个人博客。",
        "Hello! here Xz personal blog.",
        "你可能发现了，这个个人博客什么都没有~",
        "因为一些特殊原因，导致这个个人博客的内容已经被我清空了",
        "所以现在什么东西都没有",
        "As you may have noticed, there is nothing in this personal blog.",
        "如您所见，目前还没有任何内容，但以后就会有新的了。",
        "As you can see, there is nothing yet, but there will be later.......",
        "此个人博客还在施工中。。。",
        "This personal blog is still under construction",
        "祝你能有愉快的一天",
        "And here is the fourth one.",
        // 添加更多自定义文本...
    ];

    const typingTextElement = document.getElementById('typingText');
    const cursorElement = document.getElementById('cursor');
    let currentIndex = 0;
    let currentTextIndex = 0;
    let typingInterval;

    function type() {
        if (currentTextIndex < texts[currentIndex].length) {
            typingTextElement.textContent += texts[currentIndex].charAt(currentTextIndex);
            currentTextIndex++;
        } else {
            // 当前文本已经打完
            clearInterval(typingInterval);
            cursorElement.style.animation = 'none'; // 停止光标闪烁

            // 等待一段时间后显示下一条文本或重新开始
            setTimeout(() => {
                typingTextElement.textContent = ''; // 清空文本
                currentTextIndex = 0; // 重置当前文本索引

                // 切换到下一条文本，如果到达末尾则重新开始
                currentIndex = (currentIndex + 1) % texts.length;

                // 重新开始打字效果
                cursorElement.style.animation = 'caret 1s steps(1) infinite'; // 重新开始光标闪烁
                typingInterval = setInterval(type, 100); // 调整打字速度
            }, 1000); // 等待时间，可以根据需要调整
        }
    }

    // 开始打字效果
    typingInterval = setInterval(type, 100);
});