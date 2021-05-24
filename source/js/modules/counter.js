export default function startCounter(maxCount, initialCount, step, selector, fps) {

  let counter = initialCount;
  selector.innerHTML = counter;

  let myTimer = setInterval(() => {
    counter = counter + step;

    if (counter >= maxCount) {
      clearInterval(myTimer);
      counter = maxCount;
    }

    requestAnimationFrame(() => {
      selector.innerHTML = counter;
    });

  }, 1000 / fps);

}
