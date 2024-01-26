var audioPlayer = document.getElementById("audioPlayer");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var songIndex = 0;
var songs = ['Nada 0.mp3', 'Nada 1.mp3', 'Nada 2.mp3', 'Nada 3.mp3', 'Nada 4.mp3', 'Nada 5.mp3', 'Nada 6.mp3', 'Nada 7.mp3', 'Nada 8.mp3', 'Nada 9.mp3', 'Nada 10.mp3', 'Nada 11.mp3', 'Nada 12 Koplo.mp3', 'Nada 13 Koplo.mp3', 'Nada 14 Koplo.mp3', 'Nada 15 Koplo.mp3', 'Nada 16 Koplo.mp3', 'Nada 17 Koplo.mp3'];

function playMusic(song) {
  audioPlayer.src = song;
  audioPlayer.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

function pause() {
  audioPlayer.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
}

function changeTempo(delta) {
  audioPlayer.playbackRate += delta;
  // Batasi agar tempo tidak kurang dari 0.5 atau lebih dari 2
  if (audioPlayer.playbackRate < 0.5) {
    audioPlayer.playbackRate = 0.5;
  } else if (audioPlayer.playbackRate > 2) {
    audioPlayer.playbackRate = 2;
  }
}