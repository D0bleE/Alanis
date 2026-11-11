const eggButton = document.getElementById("eggButton");
const reveal = document.getElementById("reveal");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const adeleBtn = document.getElementById("adeleBtn");
const adeleMessage = document.getElementById("adeleMessage");

eggButton.addEventListener("click", () => {
  if (eggButton.classList.contains("cracking")) return;
  eggButton.classList.add("cracking");
  eggButton.setAttribute("aria-label", "El huevo se está rompiendo");
  window.setTimeout(() => {
    eggButton.hidden = true;
    reveal.hidden = false;
    reveal.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 820);
});

musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicBtn.textContent = "♫ Pausar música";
      musicBtn.setAttribute("aria-pressed", "true");
    } catch {
      musicBtn.textContent = "No se pudo reproducir";
    }
  } else {
    bgMusic.pause();
    musicBtn.textContent = "♫ Activar música";
    musicBtn.setAttribute("aria-pressed", "false");
  }
});

adeleBtn.addEventListener("click", () => {
  const opening = adeleMessage.hidden;
  adeleMessage.hidden = !opening;
  document.body.classList.toggle("adele-mode", opening);
  adeleBtn.textContent = opening ? "Desactivar modo Adela" : "Activar modo Adela";
});
