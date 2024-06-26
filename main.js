const btnB = document.getElementById("btnBwrd");
const btnP = document.getElementById("btnPse");
const btnF = document.getElementById("btnFrwd");
const disc = document.querySelector(".disc");
const audio = document.getElementsByTagName("audio")[0];
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");
const songPath = [
  "./assets/songs/game.mp3",
  "./assets/songs/hip.mp3",
  "./assets/songs/ice.mp3",
  "./assets/songs/simple.mp3",
];
let currentSong = 0;

btnP.addEventListener("click", () => {
  if (audio.className.includes("play")) {
    audio.pause();
    console.log("stop");
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
  } else {
    audio.src = songPath[currentSong];
    audio.play();
    console.log("play");
    pauseIcon.classList.remove("hide");
    playIcon.classList.add("hide");
  }

  disc.classList.toggle("play");
  audio.classList.toggle("play");
});

function forwardSongs() {
  currentSong++;
  if (currentSong === songPath.length) {
    currentSong = 0;
  }
  audio.src = songPath[currentSong];
  audio.play();
  console.log(currentSong);
}
btnF.addEventListener("click", forwardSongs);

function backwardSongs() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songPath.length - 1;
  }
  audio.src = songPath[currentSong];
  audio.play();
  console.log(currentSong);
}
btnB.addEventListener("click", backwardSongs);

console.log(currentSong);
