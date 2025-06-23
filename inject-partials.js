document.addEventListener('DOMContentLoaded', () => {
  // Inject head content (e.g., meta tags, favicon, analytics)
  fetch('/partials/head.html')
    .then(res => res.text())
    .then(html => {
      const temp = document.createElement('template');
      temp.innerHTML = html.trim();
      const headContent = temp.content;
      document.head.append(...headContent.children);
    });

  fetch('/partials/header.html')
    .then(r => r.text())
    .then(html => {
      document.getElementById('navbar-placeholder').innerHTML = html;
    });
});