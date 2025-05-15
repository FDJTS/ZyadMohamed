const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const root = document.documentElement;

// --------- Theme toggle ---------
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// --------- Language toggle ---------
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const currentPage = window.location.pathname;
    if (currentPage.includes('index-en.html')) {
      window.location.href = 'index.html';
    } else {
      window.location.href = 'index-en.html';
    }
  });
}
