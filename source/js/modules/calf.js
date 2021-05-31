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
    // ctx.drawImage(calfImgDom, 100, 300, 600, 600);

    // восстанавливаем состояние контекста
    ctx.restore();
    // запускаем на отрисовку следующий кадр
    window.requestAnimationFrame(tick);
  };

  tick();

  const calfImgDom = new Image();
  calfImgDom.src = `/img/module-4/win-primary-images/sea-calf-2.png`;
  calfImgDom.onload = () => {
    ctx.drawImage(calfImgDom, 100, 300, 600, 600);
  };

  const snow1ImgDom = new Image();
  snow1ImgDom.src = `/img/module-4/win-primary-images/snowflake.png`;
  snow1ImgDom.onload = () => {
    ctx.drawImage(snow1ImgDom, 100, 350, 200, 200);
  };

  let y = 1;
  const animateCalfImg = () => {
    y = Math.pow(timeFraction, 1.8);
    ctx.drawImage(calfImgDom, 100, 300 - y, 600, 600);
    requestAnimationFrame(animateCalfImg);
  };

  let x0 = 1;
  const animateSnowImg = () => {
    x0 = x0 + 1;
    ctx.drawImage(snow1ImgDom, x0, 0, 300, 300);
    requestAnimationFrame(animateSnowImg);
  };

  animateCalfImg();
  setTimeout(animateSnowImg, 1000);

}
