let downloadCount = 0;

function downloadManga(mangaTitle) {
  showLoginPopup();
}

function showLoginPopup() {
  document.getElementById('loginPopup').classList.add('active');
}

function closeLoginPopup() {
  document.getElementById('loginPopup').classList.remove('active');
}

function redirectToLogin() {
  window.location.href = 'https://gigaconnex.onrender.com';
}

document.querySelectorAll('.genre-btn').forEach(button => {
  button.addEventListener('click', () => {
    const genre = button.getAttribute('data-genre');
    document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    document.querySelectorAll('.manga-item').forEach(item => {
      if (genre === 'all' || item.getAttribute('data-genre') === genre) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

function showPopup() {
  document.getElementById('welcomePopup').classList.add('active');
}

function closePopup() {
  document.getElementById('welcomePopup').classList.remove('active');
}

window.onload = function() {
  setTimeout(showPopup, 500);
};

function searchManga(query) {
  query = query.toLowerCase();
  document.querySelectorAll('.manga-item').forEach(item => {
    const title = item.querySelector('.manga-title').textContent.toLowerCase();
    const author = item.querySelector('.manga-author').textContent.toLowerCase();
    if (title.includes(query) || author.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function toggleNightMode() {
  document.body.classList.toggle('night-mode');
}