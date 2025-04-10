document.addEventListener("DOMContentLoaded", () => {
  const sounds = {
    sound1: new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_48a6a2f027.mp3?filename=applause-cheer-236786.mp3"),
    sound2: new Audio("https://cdn.pixabay.com/download/audio/2021/09/17/audio_37a529bfbf.mp3?filename=boo-6377.mp3"),
    sound3: new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_e00ec9e3e0.mp3?filename=gasp-6253.mp3"),
    sound4: new Audio("https://cdn.pixabay.com/download/audio/2021/08/09/audio_15073fcfef.mp3?filename=tada-fanfare-a-6313.mp3"),
    sound5: new Audio("https://cdn.pixabay.com/download/audio/2022/03/30/audio_7fc7032a55.mp3?filename=075747-inception-horn-victory-82997.mp3"),
    sound6: new Audio("https://cdn.pixabay.com/download/audio/2022/03/30/audio_67b4b8fd36.mp3?filename=wrong-answer-129254.mp3"),
    sound7: new Audio("https://cdn.pixabay.com/download/audio/2022/10/15/audio_c5fd942c87.mp3?filename=vinyl-stop-sound-effect-241388.mp3"),
  };

  let currentSound = null;

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      const soundId = button.id;
      if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
      }
      currentSound = sounds[soundId];
      currentSound.play();
    });
  });

  document.querySelector(".stop").addEventListener("click", () => {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }
  });
});
