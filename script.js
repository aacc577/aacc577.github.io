document.addEventListener('DOMContentLoaded', () => {      
    // 获取页面中的打字文本元素    
    const typingText = document.getElementById('typing-text');      
          
    // 定义要显示的消息数组    
    const messages = [      
        'Hello! 欢迎参观X的个人博客。',  // 第一条消息  
        'Hello! here Xz personal blog.',  // 第一条消息    
        '你可能发现了，这个个人博客什么都没有~',  // 第二条消息    
        '因为一些特殊原因，导致这个个人博客的内容已经被我清空了',
        '所以现在什么东西都没有',
        'As you may have noticed, there is nothing in this personal blog.',  // 第二条消息    
        '如您所见，目前还没有任何内容，但以后就会有新的了。',  // 第三条消息    
        'As you can see, there is nothing yet, but there will be later.......',  // 第三条消息    
        '此个人博客还在施工中。。。' ,// 第四条消息  
        'This personal blog is still under construction' ,// 第四条消息    
        '祝你能有愉快的一天', 
        'And here is the fourth one.', 
        // 可以继续添加更多消息      
    ];      
          
    // 当前消息的索引    
    let currentIndex = 0;      
    // 当前字符的索引    
    let charIndex = 0;      
    // 打字阶段，'typing'表示正在打字，'deleting'表示正在删除    
    let typingPhase = 'typing';      
          
    // 打字或删除的函数    
    function typeOrDelete() {      
        // 获取当前要显示的消息    
        const currentMessage = messages[currentIndex];      
              
        // 如果正在打字阶段    
        if (typingPhase === 'typing') {      
            // 如果当前字符索引小于消息长度    
            if (charIndex < currentMessage.length) {      
                // 向打字文本元素中添加当前字符    
                typingText.textContent += currentMessage.charAt(charIndex);      
                // 字符索引加一    
                charIndex++;      
                // 0.1秒后继续调用打字或删除函数    
                setTimeout(typeOrDelete, 100);      
            } else {      
                // 打字完成后，等待一定时间（这里可以保持原来的3.5秒或调整为其他时间）再开始删除    
                // 但由于我们要在删除后等待2秒，所以这里的等待时间不影响最终效果    
                setTimeout(() => {      
                    // 切换到删除阶段（这里的逻辑不需要改变）    
                    typingPhase = 'deleting';      
                    // 由于删除是从后往前，所以字符索引应设置为消息长度    
                    charIndex = currentMessage.length;      
                    // 调用打字或删除函数开始删除    
                    typeOrDelete();      
                }, 3500); // 原来的等待时间，可以调整    
            }      
        } else if (typingPhase === 'deleting') {      
            // 如果正在删除阶段且字符索引大于0    
            if (charIndex > 0) {      
                // 从打字文本元素中删除最后一个字符    
                typingText.textContent = currentMessage.slice(0, charIndex - 1);      
                // 字符索引减一    
                charIndex--;      
                // 0.1秒后继续调用打字或删除函数    
                setTimeout(typeOrDelete, 100);      
            } else {      
                // 删除完成后，等待2秒再开始打字下一条消息    
                setTimeout(() => {      
                    // 切换到下一条消息或循环回第一条消息    
                    currentIndex = (currentIndex + 1) % messages.length;      
                    // 重置字符索引    
                    charIndex = 0;      
                    // 切换到打字阶段    
                    typingPhase = 'typing';      
                    // 调用打字或删除函数开始打字下一条消息    
                    typeOrDelete();      
                }, 5000); // 等待2秒    
            }      
        }      
    }      
          
    // 初始调用打字或删除函数开始动画    
    typeOrDelete();      
});