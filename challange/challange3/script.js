document.querySelectorAll('.neumorphism-box').forEach(box => {
  box.addEventListener('mousedown', () => {
    if (!box.classList.contains('outward')) {
      box.style.boxShadow = 'inset 10px 10px 20px #a3b1c6, inset -10px -10px 20px #ffffff';
    }
  });

  box.addEventListener('mouseup', () => {
    if (!box.classList.contains('outward')) {
      box.style.boxShadow = '10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff';
    }
  });
});
