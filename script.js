// تبديل الوضع الليلي / النهاري
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = '🌙';
  }
});

// تبديل اللغة (مثال رابط)
const langToggleBtn = document.getElementById('lang-toggle');
langToggleBtn.addEventListener('click', () => {
  if (document.documentElement.lang === 'en') {
    window.location.href = 'index.html'; // النسخة العربية
  } else {
    window.location.href = 'index-en.html'; // النسخة الإنجليزية
  }
});

// معالجة نموذج تسجيل الدخول
const signinForm = document.getElementById('signin-form');
const usernameInput = document.getElementById('username');
const welcomeMessage = document.getElementById('welcome-message');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = usernameInput.value.trim();
  if (name.length > 0) {
    welcomeMessage.textContent = `Hello, ${name}! Welcome back 👋`;
    signinForm.reset();
  }
});

// ظهور الأقسام عند التمرير (Animation)
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach(section => observer.observe(section));
