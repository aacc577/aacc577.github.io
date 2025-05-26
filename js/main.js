// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // 隐藏加载动画
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScrollPosition = window.pageYOffset;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        // 显示或隐藏导航栏
        if (currentScrollPosition > lastScrollPosition) {
            // 向下滚动
            navbar.classList.remove('scrolled');
        } else {
            // 向上滚动
            navbar.classList.add('scrolled');
        }

        lastScrollPosition = currentScrollPosition;

        // 检查是否在页面顶部
        if (currentScrollPosition < 50) {
            navbar.classList.remove('scrolled');
        }
    });

    // 移动端导航菜单
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动动画
    const scrollElements = document.querySelectorAll('[data-scroll="fade-in"]');

    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    };

    // 初始化检查
    window.addEventListener('load', handleScrollAnimation);

    // 滚动事件监听
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // 3D悬停效果（已移除，改为平滑缩放）
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `scale(1.05) rotateY(${xAxis * 0.5}deg) rotateX(${yAxis * 0.5}deg)`;
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
        });
    });

    // 粒子吸附效果（已在particles.js中启用）
});