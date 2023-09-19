window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing');
  }, 70);

  if (!audio) return;
  audio.currentTime = 0; // restart audio
  audio.play();
});
