export default function animateCalf() {
  const ctx = document.getElementById(`canvasCalf`).getContext(`2d`);

  // const runAnimation = ({timing, draw, duration}) => {
  //
  //   let start = performance.now();
  //
  //   requestAnimationFrame(function animate(time) {
  //     // timeFraction изменяется от 0 до 1
  //     let timeFraction = (time - start) / duration;
  //
  //     if (timeFraction > 1) {
  //       timeFraction = 1;
  //     }
  //
  //     // вычисление текущего состояния анимации
  //     let progress = timing(timeFraction);
  //     ctx.clearRect(0, 0, 800, 800);
  //     // сохраняем состояние контекста
  //     ctx.save();
  //     // рисуем сцену
  //     draw(progress); // отрисовать её
  //     // восстанавливаем состояние контекста
  //     ctx.restore();
  //
  //     if (timeFraction < 1) {
  //       requestAnimationFrame(animate);
  //     }
  //
  //   });
  //
  // };
  //
  //
  // const iceImgDom = new Image();
  // iceImgDom.src = `/img/module-4/win-primary-images/ice.png`;
  // iceImgDom.onload = () => {
  //   ctx.drawImage(iceImgDom, 150, 550, 500, 250);
  // };
  //
  // const calfImgDom = new Image();
  // calfImgDom.src = `/img/module-4/win-primary-images/sea-calf-2.png`;
  // calfImgDom.onload = () => {
  //   ctx.drawImage(calfImgDom, 100, 300, 600, 600);
  // };
  //
  // const snow1ImgDom = new Image();
  // snow1ImgDom.src = `/img/module-4/win-primary-images/snowflake.png`;
  // snow1ImgDom.onload = () => {
  //   ctx.drawImage(snow1ImgDom, 100, 350, 200, 200);
  // };
  //
  //
  // let y = 1;
  // const animateCalfImg = (progress) => {
  //   y = progress * 100;
  //   ctx.drawImage(iceImgDom, 150, 750 - y, 500, 250);
  //   ctx.drawImage(calfImgDom, 100, 500 - y, 600, 600);
  // };
  //
  // let y2 = 1;
  // const animateSnow1 = (progress) => {
  //   y2 = progress * 100;
  //   ctx.drawImage(snow1ImgDom, 100, 550 - y2, 200, 200);
  // };


  // runAnimation({
  //   duration: 2000,
  //   timing(timeFraction) {
  //     return timeFraction * 4;
  //   },
  //   draw(progress) {
  //     animateCalfImg(progress);
  //     animateSnow1(progress);
  //   }
  // });

  const snow1ImgDom = new Image();
  snow1ImgDom.src = `/img/module-4/win-primary-images/snowflake.png`;
  snow1ImgDom.onload = () => {
    ctx.drawImage(snow1ImgDom, 100, 350, 200, 200);
  };

  let x0 = 1;
  const animateSnowImg = () => {
    x0 = x0 + 1;
    ctx.drawImage(snow1ImgDom, x0, 0, 300, 300);
  };

  const calfImgDom = new Image();
  calfImgDom.src = `/img/module-4/win-primary-images/sea-calf-2.png`;
  calfImgDom.onload = () => {
    ctx.drawImage(calfImgDom, 100, 300, 600, 600);
  };

  let x = 1;
  const animateCalfImg = () => {
    x = x + 1;
    ctx.drawImage(calfImgDom, x, 0, 300, 300);
  };

  const tick = () => {
    // очищаем холст
    ctx.clearRect(0, 0, 800, 800);
    // сохраняем состояние контекста
    ctx.save();
    // рисуем сцену
    animateCalfImg();
    // восстанавливаем состояние контекста
    ctx.restore();
    // запускаем на отрисовку следующий кадр
    window.requestAnimationFrame(tick);
  };


  const tick2 = () => {
    // очищаем холст
    ctx.clearRect(0, 0, 800, 800);
    // сохраняем состояние контекста
    ctx.save();
    // рисуем сцену
    animateSnowImg();
    // восстанавливаем состояние контекста
    ctx.restore();
    // запускаем на отрисовку следующий кадр
    window.requestAnimationFrame(tick2);
  };

  window.requestAnimationFrame(tick);

  setTimeout(() => {
    window.requestAnimationFrame(tick2);
  }, 1000);


}
