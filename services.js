document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".expandable-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
});