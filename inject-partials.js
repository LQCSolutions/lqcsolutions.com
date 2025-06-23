document.addEventListener('DOMContentLoaded', () => {
  fetch('/partials/header.html')
    .then(r => r.text())
    .then(html => {
      document.getElementById('navbar-placeholder').innerHTML = html;
    });
});