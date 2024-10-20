// Inisialisasi AOS
AOS.init();

function openInvite() {
  const cover = document.querySelector(".cover");
  const coverKedua = document.querySelector(".coverKedua");
  const music = document.getElementById("weddingMusic");
  const imgmusik = document.querySelector('#imgmusik');
 
  cover.style.opacity = "0"; 
  setTimeout(() => {
    cover.style.display = "none"; 
    coverKedua.style.display = 'block';
    setTimeout(() => {
      coverKedua.style.opacity = '1';
    }, 50);

    coverKedua.classList.add("active");
    if (music.paused) {
      music.play();
      imgmusik.src = 'asset/img/musik.png'; 
    } else {
      music.pause();
      imgmusik.src = 'asset/img/musik2.png';
    }
    AOS.refresh();
  }, 1000);
}

// untuk mengsave kalender pernikahan
document.addEventListener("DOMContentLoaded", function() {
  const tombolMenu = document.querySelector('.tombol-menu');
  const menu = document.querySelector('.menu ul');

  tombolMenu.addEventListener('click', function() {
      menu.classList.toggle('show');
  });
});

document.getElementById('save-date-btn').addEventListener('click', function() {
  // Definisikan parameter acara pernikahan
  var title = 'Pernikahan Belva & Citra';
  var details = 'Jangan lewatkan hari bahagia kami! Acara pernikahan kami akan diadakan pada 5 Juni 2029.';
  var location = 'Mall Summarecon Bekasi, Jl. Boulevard Barat Raya No.1, Bekasi';
  var startTime = '20290605T150000';
  var endTime = '20290605T180000';   
  
  // URL untuk menambahkan acara ke Google Calendar
  var url = 'https://www.google.com/calendar/render?action=TEMPLATE' +
            '&text=' + encodeURIComponent(title) +
            '&details=' + encodeURIComponent(details) +
            '&location=' + encodeURIComponent(location) +
            '&dates=' + encodeURIComponent(startTime) + '/' + encodeURIComponent(endTime);
  
  // Buka URL di tab baru
  window.open(url, '_blank');
});

document.getElementById('save-date').addEventListener('click', function() {
  // Definisikan parameter acara pernikahan
  var title = 'Pernikahan Belva & Citra';
  var details = 'Jangan lewatkan hari bahagia kami! Acara pernikahan kami akan diadakan pada 5 Juni 2029.';
  var location = 'Mall Summarecon Bekasi, Jl. Boulevard Barat Raya No.1, Bekasi';
  var startTime = '20290605T150000';
  var endTime = '20290605T180000';   
  
  // URL untuk menambahkan acara ke Google Calendar
  var url = 'https://www.google.com/calendar/render?action=TEMPLATE' +
            '&text=' + encodeURIComponent(title) +
            '&details=' + encodeURIComponent(details) +
            '&location=' + encodeURIComponent(location) +
            '&dates=' + encodeURIComponent(startTime) + '/' + encodeURIComponent(endTime);
  
  // Buka URL di tab baru
  window.open(url, '_blank');
});

//waktu sebelum acara
const startCountdown = () => {

  const countDate = new Date("June 5, 2029 10:00:00").getTime();
  const now = new Date().getTime();

  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);


  document.getElementById("days").innerText = textDay >= 0 ? textDay : 0;
  document.getElementById("hours").innerText = textHour >= 0 ? textHour : 0;
  document.getElementById("minutes").innerText = textMinute >= 0 ? textMinute : 0;
  document.getElementById("seconds").innerText = textSecond >= 0 ? textSecond : 0;

  if (remainingTime < 0) {
    clearInterval(timerInterval);
    document.querySelector('.countdown-container').innerHTML = "<h1>The Event Has Started!</h1>";
  }
};
const timerInterval = setInterval(startCountdown, 500);


// hadiah
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
      alert('No. Rekening berhasil disalin: ' + text);
  }, function(err) {
      console.error('Could not copy text: ', err);
  });
}

function copyClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
      alert('Alamat pengiriman berhasil disalin: ' + text);
  }, function(err) {
      console.error('Could not copy text: ', err);
  });
}

// doa dan ucapan
function saveMessage(name, location, messageText) {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push({ name: name, location: location, text: messageText });
  localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages() {
  const messagesSection = document.querySelector('.messages-section');
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  messagesSection.innerHTML = '';
  
  messages.forEach((message) => {
    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');
    messageCard.innerHTML = `
      <p class="quote">"${message.text}"</p>
      <p class="author">— ${message.name}, ${message.location}</p>
    `;
    messagesSection.appendChild(messageCard);
  });
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const location = document.getElementById('location').value.trim();
  const message = document.getElementById('messages').value.trim();

  if (name && location && message) {
    saveMessage(name, location, message);

    document.getElementById('name').value = '';
    document.getElementById('location').value = '';
    document.getElementById('messages').value = '';

    loadMessages();
  } else {
    alert('Harap isi semua field.');
  }
});

window.onload = function() {
  loadMessages();
};
