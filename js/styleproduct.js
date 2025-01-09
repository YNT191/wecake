// 取得漢堡菜單按鈕和菜單本身
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// 當漢堡菜單被點擊時，切換菜單顯示
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show'); // 當菜單按鈕被點擊時切換 'show' 類別
});

document.addEventListener("DOMContentLoaded", () => {
    // Submit Order button
    const submitOrderButton = document.querySelector('button[type="submit"]');
    submitOrderButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission for demonstration
        alert("Order submitted successfully!");
    });

    // Learn More button
    const learnMoreButton = document.querySelector('button[type="Learn More"]');
    learnMoreButton.addEventListener("click", () => {
        alert("Redirecting to Learn More page...");
    });
});
