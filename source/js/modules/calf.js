export default function animateCalf() {
  let ctx = document.getElementById(`canvasCalf`).getContext(`2d`);
  let calfImgDom = new Image();

  const drawCalf = () => {
    // рисуем изображение на постере
    ctx.drawImage(calfImgDom, 0, 0, 300, 300);
  };

  // когда изображение загружено, рисуем его на холсте
  calfImgDom.onload = () => {
    drawCalf();
  };


  // задаём ссылку для изображения постера
  calfImgDom.src = `/img/module-4/win-primary-images/sea-calf-2.png`;

  let x = 1;
  const animateCalfImg = () => {
    x = x + 1;
    ctx.drawImage(calfImgDom, x, 0, 300, 300);
  };

  const tick = () => {


    // очищаем холст
    ctx.clearRect(0, 0, 1500, 1500);
    // сохраняем состояние контекста
    ctx.save();
    // рисуем сцену
    animateCalfImg();
    // восстанавливаем состояние контекста
    ctx.restore();
    // запускаем на отрисовку следующий кадр
    window.requestAnimationFrame(tick);
  };

  window.requestAnimationFrame(tick);

}
