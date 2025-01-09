// 取得漢堡菜單按鈕和菜單本身
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// 當漢堡菜單被點擊時，切換菜單顯示
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show'); // 當菜單按鈕被點擊時切換 'show' 類別
});


// Activate GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);



// Sticky header effect
const header = document.querySelector('header');
ScrollTrigger.create({
    start: "top -50",
    end: 99999,
    toggleClass: { className: "header-scrolled", targets: header }
});


// 滑動動畫設定
gsap.timeline({
    scrollTrigger: {
        trigger: "#section1",
        start: "top top", 
        end: "+=100%",
        scrub: true, 
        pin: true, 
    }
})
.to(".section-title", { 
    opacity: 1, 
    y: 0, 
    duration: 0.5 
}) // 標題出現
.to(".section-info", { 
    opacity: 1, 
    y: 0, 
    duration: 0.5 
}); // 段落文字出現

// GSAP ScrollTrigger setup for section2
gsap.timeline({
    scrollTrigger: {
        trigger: "#section2",
        start: "top top", 
        end: "+=100%",
        scrub: true,
        pin: true,
    }
})
.to("#section2 .content2 h2", { 
    opacity: 1, 
    y: 0, 
    duration: 0.5 
}) // Title fades in
.to("#section2 .content2 p", { 
    opacity: 1, 
    y: 0, 
    duration: 0.5 
}); // Paragraph fades in

// 初始化 ScrollTrigger 和 GSAP 動畫
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".scrolling-image",
    {
        opacity: 0,
        scale: 0.8, // 初始縮小
    },
    {
        opacity: 1,
        scale: 1, // 最後大小
        scrollTrigger: {
            trigger: "#section1", // 觸發點
            start: "top center", // 起點
            end: "bottom center", // 終點
            scrub: true, // 平滑滾動效果
        },
    }
);
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".content, .scrolling-image");
    
    const observerOptions = {
        root: null, // 視窗作為觀察容器
        threshold: 0.1 // 元素至少有 10% 可見時觸發
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target); // 一旦觸發，停止觀察
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});



// Target all panels
const panels = document.querySelectorAll('.panel');

// Apply animations to each panel
panels.forEach((panel, index) => {
    gsap.fromTo(
        panel,
        { scale: 0.8, opacity: 0 },
        {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
        }
    );
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const section1 = document.querySelector('#section1');
    const section2 = document.querySelector('#section2');

    // 滾動超過section1的高度後，顯示白色背景
    if (window.scrollY > section1.offsetHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // 滾動到section2時，保持header顯示
    if (window.scrollY >= section2.offsetTop) {
        header.classList.remove('scrolled'); // 在section2保持header顯示
    }
});
