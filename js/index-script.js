document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Menghentikan pengiriman form secara default

  // Mengambil nilai input
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var job = document.getElementById('job').value;
  var message = document.getElementById('message').value;

  // Reset pesan kesalahan sebelumnya
  document.getElementById('email-error').innerHTML = '';
  document.getElementById('message-error').innerHTML = '';

  // Validasi input
  var isValid = true;

  if (!validateEmail(email)) {
    document.getElementById('email-error').innerHTML = 'Email tidak valid';
    isValid = false;
  }

  if (message === '') {
    document.getElementById('message-error').innerHTML = 'Pesan harus diisi';
    isValid = false;
  }

  // Jika input valid, lakukan pengiriman form
  if (isValid) {
    // Lakukan pengiriman form atau aksi lainnya
    console.log('Form dikirim');
    // ...
  }
});

// Fungsi untuk validasi email menggunakan regular expression
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

$(document).ready(function() {
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<a class="slick-prev">⟨</a>',
    nextArrow: '<a class="slick-next">⟩</a>'
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.menu li:first-child');
  var menu = document.querySelector('.menu');

  dropdownToggle.addEventListener('click', function() {
    menu.classList.toggle('open');
  });
});
