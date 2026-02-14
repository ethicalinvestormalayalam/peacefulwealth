
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const q = document.getElementById("q");
  if (q) {
    q.addEventListener("keydown", (e) => {
      if (e.key === "Enter") window.location.href = "./pages/learn.html";
    });
  }
})();
