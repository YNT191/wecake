// 取得漢堡菜單按鈕和菜單本身
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// 當漢堡菜單被點擊時，切換菜單顯示
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show'); // 當菜單按鈕被點擊時切換 'show' 類別
});
