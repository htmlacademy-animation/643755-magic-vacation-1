export default function startCounter(maxCount, initialCount, step, selector, fps) {

  let counter = initialCount;
  selector.innerHTML = counter;
  var lastLoop = new Date();
  let myTimer = setInterval(() => {
    counter = counter + step;

    if (counter >= maxCount) {
      clearInterval(myTimer);
      counter = maxCount;
    }

    requestAnimationFrame(() => {
      selector.innerHTML = counter;


      var thisLoop = new Date();
      var _fps = 1000 / (thisLoop - lastLoop);
      lastLoop = thisLoop;

      console.log(_fps);
    });

  }, 1000 / fps);

}
