document.querySelectorAll('.expandable-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.expandable-item').forEach(i => {
      if (i !== item) i.classList.remove('open');
    });
    item.classList.toggle('open');
  });
});