const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('ruletas-theme');
if (savedTheme === 'light') document.body.classList.add('light');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const theme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('ruletas-theme', theme);
  themeToggle.setAttribute('aria-label', theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
});

document.getElementById('printButton').addEventListener('click', () => {
  document.querySelectorAll('.essay-body details').forEach(item => item.open = true);
  window.print();
});
