import animateCalf from "./calf";

export default () => {

  const makeAnimateTag = (path, pathLength) => {
    const animateTag = document.createElementNS(`http://www.w3.org/2000/svg`, `animate`);
    const length = Math.ceil(pathLength / 3);
    path.setAttribute(`stroke-dasharray`, `0 ${length}`);
    animateTag.setAttribute(`attributeName`, `stroke-dasharray`);
    animateTag.setAttribute(`from`, `0 ${length}`);
    animateTag.setAttribute(`to`, `${length} 0`);
    animateTag.setAttribute(`dur`, `0.5s`);
    animateTag.setAttribute(`fill`, `freeze`);

    return animateTag;
  };

  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {

        //анимация моржа
        animateCalf();

        // анимация слова "Победа!"
        let pathEls = document.querySelectorAll(`.js-victory path`);
        pathEls.forEach(function (item) {
          item.appendChild(makeAnimateTag(item, item.getTotalLength()));
          let animate = item.querySelector(`animate`);
          animate.beginElement();
        });

        // анимация слова "Не угадал!"
        let pathEls2 = document.querySelectorAll(`.js-fail path`);
        pathEls2.forEach(function (item, index) {
          item.appendChild(makeAnimateTag(item, item.getTotalLength()));
          item.style.animationDelay = `${index / 25}s`;
          let animate = item.querySelector(`animate`);
          animate.beginElement();
        });

        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
