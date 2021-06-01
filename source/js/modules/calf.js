export default function animateCalf() {
  const ctx = document.getElementById(`canvasCalf`).getContext(`2d`);

  let timeFraction = 1;
  const tick = () => {
    timeFraction = timeFraction + 1;
    // очищаем холст
    ctx.clearRect(0, 0, 800, 800);
    // сохраняем состояние контекста
    ctx.save();
    // рисуем сцену


    drawObject({el: iceImgDom, dx: ice.dx, dy: ice.dy, dw: ice.dw, dh: ice.dh, isVisible: ice.isVisible});
    drawObject({el: calfImgDom, dx: calf.dx, dy: calf.dy, dw: calf.dw, dh: calf.dh, isVisible: calf.isVisible});
    drawObject({el: snow1ImgDom, dx: snow1.dx, dy: snow1.dy, dw: snow1.dw, dh: snow1.dh, isVisible: snow1.isVisible});
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

  // морж
  const calf = {
    dx: 130,
    dy: 350,
    dw: 550,
    dh: 550,
    src: `/img/module-4/win-primary-images/sea-calf-2.png`,
    isVisible: 1
  };

  const calfImgDom = createImgElement(calf);
  const animateCalfImg = () => {
    calf.dy = (calf.dy - 10);
    drawObject({el: calfImgDom, dx: calf.dx, dy: calf.dy, dw: calf.dw, dh: calf.dh, isVisible: 1});
    if (calf.dy > 150) {
      requestAnimationFrame(animateCalfImg);
    }
  };

  // льдина
  const ice = {
    dx: 190,
    dy: 600,
    dw: 450,
    dh: 200,
    src: `/img/module-4/win-primary-images/ice.png`,
    isVisible: 1
  };

  const iceImgDom = createImgElement(ice);
  const animateIceImg = (start) => {

    ice.dy = (ice.dy - 10);
    drawObject({el: iceImgDom, dx: ice.dx, dy: ice.dy, dw: ice.dw, dh: ice.dh, isVisible: ice.isVisible});
    // if (ice.dy > 400) {
    //   requestAnimationFrame(animateIceImg);
    // }

    let timePassed = Date.now() - start;

    console.log(timePassed);
    if (timePassed < 1000) {
      requestAnimationFrame(() => animateIceImg(start));
    }

  };

  // снег
  const snow1 = {
    dx: 10,
    dy: 600,
    dw: 250,
    dh: 250,
    src: `/img/module-4/win-primary-images/snowflake.png`,
    isVisible: 0
  };

  const snow1ImgDom = createImgElement(snow1);
  const animateSnow1Img = () => {
    snow1.isVisible = 1;
    snow1.dy = (snow1.dy - 10);
    drawObject({el: snow1ImgDom, dx: snow1.dx, dy: snow1.dy, dw: snow1.dw, dh: snow1.dh, isVisible: snow1.isVisible});
    if (snow1.dy > 400) {
      requestAnimationFrame(animateSnow1Img);
    }
  };


  let startTime = Date.now();
  // console.log(startTime);
  // setTimeout(() => {
  //   console.log(Date.now());
  //   console.log(Date.now() - startTime);
  // }, 3000);


  tick();

  animateIceImg(startTime);
  animateCalfImg();
  setTimeout(animateSnow1Img, 1000);

}
