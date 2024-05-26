document.addEventListener('DOMContentLoaded', function() {
  // Check if the user is on a mobile device
  if (/Mobi|Android/i.test(navigator.userAgent)) {
      Swal.fire({
          icon: 'info',
          title: 'Perhatian',
          text: 'Bagusan dibuka dilaptop, soalnya belum pinter responsive, hehe',
          confirmButtonText: 'OK'
      });
  }
});

const themeSwitch = document.querySelector(".theme-switch__checkbox");
const themeSwitchh = document.querySelector(".theme-switch_responsive");
const themeStyle = document.getElementById("theme-style");
const currentTheme = localStorage.getItem("theme");
const image = document.getElementById("image");
const ig = document.getElementById("ig");
const link = document.getElementById("linkedin");
const git = document.getElementById("git");
const email = document.getElementById("email");
const spt = document.getElementById("spt");
themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    themeStyle.href = "dark.css";
    image.src = "img/myImg-dark.png";
    ig.src = "img/instagram-d.png"
    git.src = "img/github-d.png"
    link.src = "img/linkedin-d.png"
    email.src = "img/mail-d.png"
    spt.src = "img/spotify-d.png"
  } else {
    themeStyle.href = "light.css";
    image.src = "img/myImg-light.png";
    ig.src = "img/instagram-l.png"
    git.src = "img/github-l.png"
    link.src = "img/linkedin-l.png"
    email.src = "img/mail-l.png"
    spt.src = "img/spotify-l.png"
  }
});

themeSwitchh.addEventListener("change", function () {
  if (this.checked) {
    themeStyle.href = "dark.css";
    image.src = "img/myImg-dark.png";
    ig.src = "img/instagram-d.png"
    git.src = "img/github-d.png"
    link.src = "img/linkedin-d.png"
    email.src = "img/mail-d.png"
    spt.src = "img/spotify-d.png"
  } else {
    themeStyle.href = "light.css";
    image.src = "img/myImg-light.png";
    ig.src = "img/instagram-l.png"
    git.src = "img/github-l.png"
    link.src = "img/linkedin-l.png"
    email.src = "img/mail-l.png"
    spt.src = "img/spotify-l.png"
  }
});

// Mengatur transisi antar halaman
