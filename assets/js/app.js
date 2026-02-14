// assets/js/app.js
// Minimal JS for the homepage: market toggle + year + optional search stub.

(function () {
  const pills = document.querySelectorAll('.pill');
  const currentView = document.getElementById('currentView');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  pills.forEach((p) => {
    p.addEventListener('click', () => {
      pills.forEach((x) => x.classList.remove('active'));
      p.classList.add('active');

      const m = p.getAttribute('data-market') || 'India';
      if (currentView) currentView.textContent = m.includes('Middle East') ? 'India' : m; // mirrors your screenshot behavior
      // If you want exact label behavior, change the line above.
    });
  });

  const q = document.getElementById('q');
  if (q) {
    q.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        window.location.href = './pages/screeners.html';
      }
    });
  }
})();
