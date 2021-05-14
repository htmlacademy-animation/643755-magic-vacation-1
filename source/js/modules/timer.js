export default function startTimer(duration, display) {
  let start = Date.now();

  let timer = duration;
  let minutes;
  let seconds;

  let myTimer = setInterval(() => {

    --timer;

    let timePassed = Date.now() - start;

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? `0` + minutes : minutes;
    seconds = seconds < 10 ? `0` + seconds : seconds;

    requestAnimationFrame(() => {
      display.innerHTML = `<span>` + minutes + `</span>:` + `<span>` + seconds + `</span>`;
    });

    if (timePassed >= duration * 1000) {
      clearInterval(myTimer);
    }

  }, 1000);
}
