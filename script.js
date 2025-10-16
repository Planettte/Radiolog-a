// smooth scroll y foco accesible
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.card').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // mover foco (para accesibilidad)
      setTimeout(() => {
        target.setAttribute('tabindex','-1');
        target.focus({preventScroll:true});
      }, 600);
    });
  });
});
