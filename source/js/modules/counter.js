export default function startCounter(maxCount, initialCount, step, selector) {
  let counter = initialCount;
  selector.innerHTML = counter;

  let myTimer = setInterval(() => {
    counter = counter + step;

    requestAnimationFrame(() => {
      selector.innerHTML = counter;
    });

    if (counter >= maxCount) {
      clearInterval(myTimer);
    }

  }, 120);
}
