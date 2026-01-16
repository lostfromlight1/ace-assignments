document.querySelectorAll("dt").forEach(dt => {
    dt.addEventListener("click", () => {
      const dd = dt.nextElementSibling;

      // toggle current dd
      dd.classList.toggle("hidden");
    });
  });
