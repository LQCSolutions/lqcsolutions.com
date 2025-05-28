document.querySelectorAll('.expandable-item').forEach(item => {
  item.setAttribute('tabindex', '0'); // Make focusable

  item.addEventListener('click', () => {
    document.querySelectorAll('.expandable-item').forEach(i => {
      if (i !== item) i.classList.remove('open');
    });
    item.classList.toggle('open');
  });

  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent page scroll on space
      item.click(); // Trigger the click handler
    }
  });

  item.addEventListener('click', () => {
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.expandable-item').forEach(el => {
    el.classList.remove('open');
    el.setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    item.classList.add('open');
    item.setAttribute('aria-expanded', 'true');
  }
});
});