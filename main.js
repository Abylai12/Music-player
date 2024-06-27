const btnB = document.getElementById("btnBwrd");
const btnP = document.getElementById("btnPse");
const btnF = document.getElementById("btnFrwd");
const disc = document.querySelector(".disc");
const audio = document.getElementsByTagName("audio")[0];
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");
const seekBar = document.getElementsByClassName("seek-bar")[0];
const slider = document.getElementsByClassName("slider")[0];

const songPath = [
  {
    song: "./assets/songs/game.mp3",
    name: "Summer",
    cover: "./assets/img/img2.jpg",
  },
  {
    song: "./assets/songs/hip.mp3",
    name: "Spring",
    cover: "./assets/img/img3.jpg",
  },
  {
    song: "./assets/songs/ice.mp3",
    name: "Summer",
    cover: "./assets/img/pawel-szvmanski-0hvjtWc91js-unsplash.jpg",
  },
  {
    song: "./assets/songs/simple.mp3",
    name: "Spring",
    cover: "./assets/img/img3.jpg",
  },
];
let currentSong = 0;
let playTime = audio.currentTime;

btnP.addEventListener("click", () => {
  console.log("time", audio.currentTime);
  if (audio.className.includes("play")) {
    audio.pause();
    console.log("stop");
    pauseIcon.classList.remove("unhide");
    playIcon.classList.remove("hide");
  } else {
    audio.src = songPath[currentSong].song;
    audio.play();
    console.log("play");
    pauseIcon.classList.add("unhide");
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
  audio.src = songPath[currentSong].song;
  audio.play();
  console.log(currentSong);
}
btnF.addEventListener("click", forwardSongs);

function backwardSongs() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songPath.length - 1;
  }
  audio.src = songPath[currentSong].song;
  audio.play();
  console.log(currentSong);
}
btnB.addEventListener("click", backwardSongs);

console.log(currentSong);
// seek interval

audio.onloadeddata = function () {
  // seekBar.max = audio.duration;
  // seekBar.value = audio.currentTime;
};

setInterval(() => {
  const percent = (audio.currentTime / audio.duration) * 100;
  slider.value = percent;
}, 1000);
