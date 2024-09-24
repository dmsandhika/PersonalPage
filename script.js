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
// script.js

// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  const ratingResult = document.getElementById('rating-result');
  const nameInput = document.getElementById('name-input');
  const feedbackInput = document.getElementById('feedback-input');
  const submitBtn = document.getElementById('submit-btn');
  const feedbackCards = document.getElementById('feedback-cards');
  let ratingValue = 0;

  const loadFeedbacks = () => {
    fetch('get_feedback.php')
    .then(response => response.json())
    .then(data => {
        console.log("Data feedback yang diambil:", data); // Tambahkan ini untuk debugging
        feedbackCards.innerHTML = ''; // Kosongkan cards sebelum menambahkan yang baru
        data.forEach(feedback => {
            addFeedbackCard(feedback.name, feedback.rating, feedback.feedback);
        });
    })
    .catch(error => {
        console.error('Error loading feedbacks:', error);
    });
};


  // Menambahkan card feedback
  const addFeedbackCard = (name, rating, feedback) => {
      const card = document.createElement('div');
      card.className = 'feedback-card';
      
      // Menggunakan '★' untuk menampilkan bintang sesuai rating
      const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating); // Bintang penuh dan bintang kosong
      card.innerHTML = `<strong>${name}</strong><br>${stars}<br>${feedback}`;
      
      feedbackCards.appendChild(card);
  };

  stars.forEach(star => {
      star.addEventListener('click', () => {
          ratingValue = star.getAttribute('data-value');
          stars.forEach(s => s.classList.remove('selected'));
          for (let i = 0; i < ratingValue; i++) {
              stars[i].classList.add('selected');
          }
          ratingResult.textContent = `Rating Anda: ${ratingValue} bintang`;
      });
  });

  submitBtn.addEventListener('click', () => {
      const name = nameInput.value.trim() || 'Anonymous';
      const feedback = feedbackInput.value.trim();

      if (ratingValue === 0) {
          alert("Silakan pilih rating sebelum mengirim.");
          return;
      }

      const data = {
          name: name,
          rating: ratingValue,
          feedback: feedback
      };

      fetch('submit_feedback.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(data)
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert(`Feedback berhasil dikirim, terima kasih ${name}!`);
              addFeedbackCard(name, ratingValue, feedback);
          } else {
              alert(data.message);
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Terjadi kesalahan saat mengirim feedback.');
      });

      // Mengosongkan input setelah pengiriman
      nameInput.value = '';
      feedbackInput.value = '';
      ratingValue = 0;
      ratingResult.textContent = '';
      stars.forEach(s => s.classList.remove('selected'));
  });

  loadFeedbacks(); // Memuat data feedback saat halaman dimuat
});





// Mengatur transisi antar halaman
