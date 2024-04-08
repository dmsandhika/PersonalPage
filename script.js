const themeSwitch = document.querySelector('.theme-switch__checkbox');
const themeSwitchh = document.querySelector('.theme-switch_responsive');
const themeStyle = document.getElementById('theme-style');
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
themeSwitchh.addEventListener('change', function() {
  if (this.checked) {
    themeStyle.href = 'dark.css';
    image.src = 'img/myImg-dark.png'; 
  } else {
    themeStyle.href = 'light.css'; 
    image.src = 'img/myImg-light.png';
  }
});





