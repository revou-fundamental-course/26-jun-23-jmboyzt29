
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

var userIdInput = document.getElementById('userId');
  userIdInput.value = generateRandomCode();

  function generateRandomCode() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = '';
    for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  }
