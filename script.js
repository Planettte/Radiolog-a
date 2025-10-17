document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.card').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) { // ✅ Solo si es un enlace interno
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          target.setAttribute('tabindex','-1');
          target.focus({preventScroll:true});
        }, 600);
      }
    });
  });
});
