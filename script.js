const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// تحقق من التفضيل المخزن في localStorage أو تفضيل النظام
const userPreference = localStorage.getItem('theme');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (userPreference) {
  htmlElement.setAttribute('data-theme', userPreference);
} else {
  htmlElement.setAttribute('data-theme', systemPreference);
}

toggleButton.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleButton.textContent = newTheme === 'light' ? '🌙' : '☀️';
});
