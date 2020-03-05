const getRandomHue = randomRange(0, 360);
let mousedown = false;

document.addEventListener("mousedown", event => {
  const { clientX, clientY } = event;
  mousedown = true;

  function createBurst(x, y) {
    const el = document.createElement("div");
    el.classList.add("burst");
    const hue = getRandomHue();
    const top = clientY - 8 / 2;
    const left = clientX - 8 / 2;
    el.style.setProperty("--hue", hue);
    el.style.setProperty("top", top + "px");
    el.style.setProperty("left", left + "px");

    let size = 1;
    function grow() {
      size += 1;
      el.style.setProperty("transform", `scale(${size})`);
      if (mousedown) {
        requestAnimationFrame(grow);
      }
    }

    requestAnimationFrame(grow);
    return el;
  }

  const burst = createBurst(clientX, clientY);
  document.body.appendChild(burst);
});

document.addEventListener("mouseup", event => {
  mousedown = false;
});
