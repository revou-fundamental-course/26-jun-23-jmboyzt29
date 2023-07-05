document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Menghentikan pengiriman form secara default

  // Mengambil nilai input
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var job = document.getElementById('job').value;
  var message = document.getElementById('message').value;
  var userId = document.getElementById('userId').value;

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
    // Buat objek data yang akan dikirim ke server
    var data = {
      name: name,
      email: email,
      job: job,
      message: message,
      userId: userId
    };

    // Kirim data ke localStorage
localStorage.setItem('formData', JSON.stringify(data));

      console.log('Form berhasil dikirim');
      Swal.fire({
    icon: 'success',
    title: 'Pesan berhasil dikirim',
    text: 'Terima kasih atas dukungannya!',
    showCancelButton: true,
    confirmButtonText: 'Lihat Data',
    cancelButtonText: 'Tutup',
    allowOutsideClick: false
  }).then(function(result) {
    if (result.isConfirmed) {
      // Redirect ke domain.com/data.html
      window.location.href = './data.html';
    }
  });

  }
});

// Fungsi untuk validasi email menggunakan regular expression
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
