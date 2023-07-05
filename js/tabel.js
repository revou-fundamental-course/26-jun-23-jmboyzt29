// Ambil data form dari localStorage
    var formData = localStorage.getItem('formData');

    // Ubah data menjadi objek JavaScript
    var data = JSON.parse(formData);

    // Tambahkan data ke tabel
    var tableBody = document.getElementById('data-table-body');

    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var userIdCell = document.createElement('td');
    var emailCell = document.createElement('td');
    var jobCell = document.createElement('td');
    var messageCell = document.createElement('td');

    userIdCell.textContent = data.userId;
    nameCell.textContent = data.name;
    emailCell.textContent = data.email;
    jobCell.textContent = data.job;
    messageCell.textContent = data.message;

    row.appendChild(userIdCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(jobCell);
    row.appendChild(messageCell);

    tableBody.appendChild(row);
