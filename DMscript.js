const keys = document.querySelectorAll(".key");

function playSound(key) {
  const audio = document.querySelector(
    `audio[data-key="${key.toUpperCase()}"]`
  );
  const keyElement = document.querySelector(
    `.key[data-key="${key.toUpperCase()}"]`
  );
  if (keyElement) {
    animateKey(keyElement);
  }
  if (!audio) return;

  keyElement.classList.add("active");
  audio.currentTime = 0; // Rewind to the start
  audio.play();

  setTimeout(() => {
    keyElement.classList.remove("active");
  }, 100);
}

window.addEventListener("keydown", function (event) {
  playSound(event.key);
});

keys.forEach((key) => {
  key.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Prevent the default touch behavior, like scrolling
    const keyAttribute = this.getAttribute("data-key");
    playSound(keyAttribute);
  });

  key.addEventListener("click", function () {
    const keyAttribute = this.getAttribute("data-key");
    playSound(keyAttribute);
  });
});

function animateKey(key) {
  key.animate(
    [
      // Keyframes
      { transform: "scale(1)", backgroundColor: "#333" },
      { transform: "scale(1.1)", backgroundColor: "#ffc600" },
      { transform: "scale(1)", backgroundColor: "#333" },
    ],
    {
      // Timing options
      duration: 100,
      iterations: 1,
    }
  );
}
