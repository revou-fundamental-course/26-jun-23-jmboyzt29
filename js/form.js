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

    // Kirim data ke server menggunakan metode POST
    fetch('./form.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      // Tangani respon dari server
      console.log('Form berhasil dikirim');
    })
    .catch(function(error) {
      // Tangani kesalahan
      console.error('Terjadi kesalahan saat mengirim form:', error);
    });
  }
});

// Fungsi untuk validasi email menggunakan regular expression
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
