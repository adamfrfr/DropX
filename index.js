// Theme Toggle
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.getElementById('themeToggle').textContent = '☀️';
  }
}

function toggleTheme() {
  const isDarkMode = !document.body.classList.contains('light-mode');
  const themeBtn = document.getElementById('themeToggle');
  
  if (isDarkMode) {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    themeBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
    themeBtn.textContent = '🌙';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});

function joinTeam() {
  alert("Thanks for your interest in DropX! We'll reach out soon.");
}

function contactAlert() {
  alert("Message feature coming soon!");
}