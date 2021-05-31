export default function animateCalf() {
  const ctx = document.getElementById(`canvasCalf`).getContext(`2d`);

  const calfImgDom = new Image();
  const drawCalf = () => {
    ctx.drawImage(calfImgDom, 100, 300, 600, 600);
  };
  calfImgDom.onload = () => {
    drawCalf();
  };
  calfImgDom.src = `/img/module-4/win-primary-images/sea-calf-2.png`;


  const iceImgDom = new Image();
  const drawIce = () => {
    ctx.drawImage(iceImgDom, 150, 550, 500, 250);
  };
  iceImgDom.onload = () => {
    drawIce();
  };
  iceImgDom.src = `/img/module-4/win-primary-images/ice.png`;



  let y = 1;
  const animateCalfImg = (progress) => {
    y = progress * 100;
    ctx.drawImage(iceImgDom, 150, 750 - y, 500, 250);
    ctx.drawImage(calfImgDom, 100, 500 - y, 600, 600);

  };

  function animate({timing, draw, duration}) {

    let start = performance.now();

    // eslint-disable-next-line no-shadow
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;

      if (timeFraction > 1) {
        timeFraction = 1;
      }

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
      ctx.clearRect(0, 0, 800, 800);
      // сохраняем состояние контекста
      ctx.save();
      // рисуем сцену
      draw(progress); // отрисовать её
      // восстанавливаем состояние контекста
      ctx.restore();

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }

  animate({
    duration: 5000,
    timing(timeFraction) {
      return timeFraction * 4;
    },
    draw(progress) {
      animateCalfImg(progress);
    }
  });

}
