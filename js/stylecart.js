// 取得漢堡菜單按鈕和菜單本身
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// 當漢堡菜單被點擊時，切換菜單顯示
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show'); // 當菜單按鈕被點擊時切換 'show' 類別
});

document.getElementById("cart-form").addEventListener("submit", function (e) {
    e.preventDefault(); // 阻止表單默認提交行為
  
    const formData = new FormData(e.target);
    const data = {};
  
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    console.log("Form Data Submitted:", data);
    alert("Order submitted successfully!");
  });
  