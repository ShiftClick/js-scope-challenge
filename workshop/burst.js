// if (randomRange) {
const getRandomHue = randomRange(0, 360);
// }

let mousedown = true;
document.addEventListener("mousedown", event => {
  const { clientX, clientY } = event;

  function createBurst(x, y) {
    const el = document.createElement("div");
    el.classList.add("burst");
    const hue = getRandomHue();
    const top = clientY - 8 / 2;
    const left = clientX - 8 / 2;
    el.style.setProperty("--hue", hue);
    el.style.setProperty("top", top + "px");
    el.style.setProperty("left", left + "px");

    function grow() {
      let count = 0;
      if (!mousedown) return;
      count += 1;
      el.style.setProperty("transform", `scale(${count})`);
      requestAnimationFrame(grow);
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
