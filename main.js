const btnB = document.getElementById("btnBwrd");
const btnP = document.getElementById("btnPse");
const btnF = document.getElementById("btnFwrd");
const disc = document.querySelector(".disc");

btnP.addEventListener("click", () => {
  const audio = document.getElementsByTagName("audio")[0];
  if (audio.className.includes("play")) {
    audio.pause();
  } else {
    audio.play();
  }
  disc.classList.toggle("play");
  audio.classList.toggle("play");
});
