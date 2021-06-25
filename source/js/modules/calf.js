export default function animateCalf() {
  const ctx = document.getElementById(`canvasCalf`).getContext(`2d`);

  const tick = () => {
    // очищаем холст
    ctx.clearRect(0, 0, 800, 800);
    // сохраняем состояние контекста
    ctx.save();
    // рисуем сцену
    drawObject({el: iceImgDom, dx: ice.dx, dy: ice.dy, dw: ice.dw, dh: ice.dh, isVisible: ice.isVisible});
    drawObject({el: calfImgDom, dx: calf.dx, dy: calf.dy, dw: calf.dw, dh: calf.dh, isVisible: calf.isVisible});
    drawObject({el: snowImgDom1, dx: snow1.dx, dy: snow1.dy, dw: snow1.dw, dh: snow1.dh, isVisible: snow1.isVisible});
    drawObject({el: snowImgDom2, dx: snow2.dx, dy: snow2.dy, dw: snow2.dw, dh: snow2.dh, isVisible: snow2.isVisible});
    // восстанавливаем состояние контекста
    ctx.restore();
    // запускаем на отрисовку следующий кадр
    window.requestAnimationFrame(tick);
  };

  const drawObject = ({el, dx, dy, dw, dh, isVisible}) => {
    ctx.globalAlpha = isVisible;
    ctx.drawImage(el, dx, dy, dw, dh);
  };

  const createImgElement = (objectProperties) => {
    const elImgDom = new Image();
    elImgDom.src = objectProperties.src;
    elImgDom.onload = () => {
      drawObject({el: elImgDom, dx: objectProperties.dx, dy: objectProperties.dy, dw: objectProperties.dw, dh: objectProperties.dh, isVisible: objectProperties.isVisible});
    };

    return elImgDom;
  };

  const animateIt = ({elFunction, started, duration}) => {
    elFunction();
    let timePassed = Date.now() - started;
    if (timePassed < duration) {
      requestAnimationFrame(() => animateIt({elFunction, started, duration}));
    }
  };

  // морж
  const calf = {
    dx: 130,
    dy: 550,
    dw: 550,
    dh: 550,
    src: `/img/module-4/win-primary-images/sea-calf-2.png`,
    isVisible: 1
  };

  const calfImgDom = createImgElement(calf);
  const animateCalfImg = () => {
    calf.dy = (calf.dy - 10);
    drawObject({el: calfImgDom, dx: calf.dx, dy: calf.dy, dw: calf.dw, dh: calf.dh, isVisible: calf.isVisible});
  };

  // льдина
  const ice = {
    dx: 190,
    dy: 800,
    dw: 450,
    dh: 200,
    src: `/img/module-4/win-primary-images/ice.png`,
    isVisible: 1
  };

  const iceImgDom = createImgElement(ice);
  const animateIceImg = () => {
    ice.dy = (ice.dy - 10);
    drawObject({el: iceImgDom, dx: ice.dx, dy: ice.dy, dw: ice.dw, dh: ice.dh, isVisible: ice.isVisible});
  };


  // снег 1
  const snow1 = {
    dx: 10,
    dy: 250,
    dw: 250,
    dh: 250,
    src: `/img/module-4/win-primary-images/snowflake.png`,
    isVisible: 0
  };

  const snowImgDom1 = createImgElement(snow1);
  const animateSnowImg1 = () => {
    snow1.isVisible = 1;
    snow1.dy = (snow1.dy - 1);
    drawObject({el: snowImgDom1, dx: snow1.dx, dy: snow1.dy, dw: snow1.dw, dh: snow1.dh, isVisible: snow1.isVisible});
  };


  // снег 2
  const snow2 = {
    dx: 550,
    dy: 250,
    dw: 250,
    dh: 250,
    src: `/img/module-4/win-primary-images/snowflake.png`,
    isVisible: 0
  };

  const snowImgDom2 = createImgElement(snow2);
  const animateSnowImg2 = () => {
    snow2.isVisible = 1;
    snow2.dy = (snow2.dy - 1);
    drawObject({el: snowImgDom2, dx: snow2.dx, dy: snow2.dy, dw: snow2.dw, dh: snow2.dh, isVisible: snow2.isVisible});
  };


  tick();
  animateIt({elFunction: animateIceImg, started: Date.now(), duration: 600});

  animateIt({elFunction: animateCalfImg, started: Date.now(), duration: 600});

  setTimeout(() => {
    animateIt({elFunction: animateSnowImg1, started: Date.now(), duration: 500});
    animateIt({elFunction: animateSnowImg2, started: Date.now(), duration: 500});
  }, 600);


}
