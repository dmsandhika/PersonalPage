const themeSwitch = document.querySelector('.theme-switch__checkbox');
const themeSwitchh = document.querySelector('.theme-switch_responsive');
const themeStyle = document.getElementById('theme-style');
const currentTheme = localStorage.getItem('theme');
const image = document.getElementById('image');
themeSwitch.addEventListener('change', function() {
  if (this.checked) {
    themeStyle.href = 'dark.css';
    image.src = 'img/myImg-dark.png'; 
  } else {
    themeStyle.href = 'light.css'; 
    image.src = 'img/myImg-light.png';
  }
});



// Mengatur transisi antar halaman





