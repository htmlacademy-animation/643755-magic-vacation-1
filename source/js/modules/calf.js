export default function animateCalf() {
  // морж
  const calf = {
    dx: 130,
    dy: 550,
    dw: 550,
    dh: 550,
    src: `/img/module-4/win-primary-images/sea-calf-2.png`,
    isVisible: 1
  };

  const calfEl = new Image();
  calfEl.src = calf.src;

  const ctx = document.getElementById(`canvasCalf`).getContext(`2d`);

  const draw = () => {

    ctx.clearRect(0, 0, 800, 800);
    ctx.save();

    calfEl.onload = () => {
      ctx.drawImage(calfEl, calf.dx, calf.dy, 300, 300);
    };


    ctx.drawImage(calfEl, calf.dx, calf.dy, 300, 300);

    ctx.restore();
    window.requestAnimationFrame(draw);
  };

  function animate({timing, action, duration}) {

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

      action(progress); // отрисовать её

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }

  draw();

  animate({
    duration: 1000,
    timing(timeFraction) {
      return timeFraction ;
    },
    action(progress) {
      calf.dy = calf.dy - progress * 10;
    }
  });


  setTimeout(() => {
    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      action(progress) {
        calf.dx = calf.dx - progress * 10;
      }
    });

  }, 1000);


}


// export default function animateCalf() {
//   const ctx = document.getElementById(`canvasCalf`).getContext(`2d`);
//
//   const tick = () => {
//     // очищаем холст
//     ctx.clearRect(0, 0, 800, 800);
//     // сохраняем состояние контекста
//     ctx.save();
//     // рисуем сцену
//
//     // самолёт
//     drawObject({el: backImgDom, dx: back.dx, dy: back.dy, dw: back.dw, dh: back.dh, isVisible: back.isVisible});
//     drawObject({el: planeImgDom, dx: plane.dx, dy: plane.dy, dw: plane.dw, dh: plane.dh, isVisible: plane.isVisible});
//
//     // дерево
//     drawObject({el: treeImgDom, dx: tree.dx, dy: tree.dy, dw: tree.dw, dh: tree.dh, isVisible: tree.isVisible});
//
//     // дерево2
//     drawObject({el: treeImgDom2, dx: tree2.dx, dy: tree2.dy, dw: tree2.dw, dh: tree2.dh, isVisible: tree2.isVisible});
//
//     // льдина
//     drawObject({el: iceImgDom, dx: ice.dx, dy: ice.dy, dw: ice.dw, dh: ice.dh, isVisible: ice.isVisible});
//     // морж
//     drawObject({el: calfImgDom, dx: calf.dx, dy: calf.dy, dw: calf.dw, dh: calf.dh, isVisible: calf.isVisible});
//
//     // снег
//     drawObject({el: snowImgDom1, dx: snow1.dx, dy: snow1.dy, dw: snow1.dw, dh: snow1.dh, isVisible: snow1.isVisible});
//     drawObject({el: snowImgDom2, dx: snow2.dx, dy: snow2.dy, dw: snow2.dw, dh: snow2.dh, isVisible: snow2.isVisible});
//
//
//     // восстанавливаем состояние контекста
//     ctx.restore();
//     // запускаем на отрисовку следующий кадр
//     window.requestAnimationFrame(tick);
//   };
//
//
//   const drawObject = ({el, dx, dy, dw, dh, isVisible}) => {
//     ctx.globalAlpha = isVisible;
//
//     ctx.drawImage(el, dx, dy, dw, dh);
//   };
//
//   const createImgElement = (objectProperties) => {
//     const elImgDom = new Image();
//     elImgDom.src = objectProperties.src;
//     elImgDom.onload = () => {
//       drawObject({el: elImgDom, dx: objectProperties.dx, dy: objectProperties.dy, dw: objectProperties.dw, dh: objectProperties.dh, isVisible: objectProperties.isVisible});
//     };
//
//     return elImgDom;
//   };
//
//   const animateIt = ({elFunction, started, duration}) => {
//     elFunction();
//     let timePassed = Date.now() - started;
//     if (timePassed < duration) {
//       requestAnimationFrame(() => animateIt({elFunction, started, duration}));
//     }
//   };
//
//   // морж
//   const calf = {
//     dx: 130,
//     dy: 550,
//     dw: 550,
//     dh: 550,
//     src: `/img/module-4/win-primary-images/sea-calf-2.png`,
//     isVisible: 1
//   };
//
//   const calfImgDom = createImgElement(calf);
//   const animateCalfImg = () => {
//     calf.dy = (calf.dy - 10);
//     drawObject({el: calfImgDom, dx: calf.dx, dy: calf.dy, dw: calf.dw, dh: calf.dh, isVisible: calf.isVisible});
//   };
//
//   // льдина
//   const ice = {
//     dx: 190,
//     dy: 800,
//     dw: 450,
//     dh: 200,
//     src: `/img/module-4/win-primary-images/ice.png`,
//     isVisible: 1
//   };
//
//   const iceImgDom = createImgElement(ice);
//   const animateIceImg = () => {
//     ice.dy = (ice.dy - 10);
//     drawObject({el: iceImgDom, dx: ice.dx, dy: ice.dy, dw: ice.dw, dh: ice.dh, isVisible: ice.isVisible});
//   };
//
//
//   // снег 1
//   const snow1 = {
//     dx: 10,
//     dy: 250,
//     dw: 250,
//     dh: 250,
//     src: `/img/module-4/win-primary-images/snowflake.png`,
//     isVisible: 0
//   };
//
//   const snowImgDom1 = createImgElement(snow1);
//   const animateSnowImg1Up = () => {
//     snow1.isVisible = 1;
//     snow1.dy = snow1.dy - 1;
//
//     if (snow1.dy < 200) {
//       animateSnowImg1Down();
//       return;
//     }
//
//     drawObject({el: snowImgDom1, dx: snow1.dx, dy: snow1.dy, dw: snow1.dw, dh: snow1.dh, isVisible: snow1.isVisible});
//     requestAnimationFrame(animateSnowImg1Up);
//   };
//
//   const animateSnowImg1Down = () => {
//     snow1.isVisible = 1;
//     snow1.dy = snow1.dy + 1;
//
//     if (snow1.dy > 250) {
//       animateSnowImg1Up();
//       return;
//     }
//
//     drawObject({el: snowImgDom1, dx: snow1.dx, dy: snow1.dy, dw: snow1.dw, dh: snow1.dh, isVisible: snow1.isVisible});
//     requestAnimationFrame(animateSnowImg1Down);
//   };
//
//
//   // снег 2
//   const snow2 = {
//     dx: 550,
//     dy: 250,
//     dw: 250,
//     dh: 250,
//     src: `/img/module-4/win-primary-images/snowflake.png`,
//     isVisible: 0
//   };
//
//   const snowImgDom2 = createImgElement(snow2);
//   const animateSnowImg2Up = () => {
//     snow2.isVisible = 1;
//     snow2.dy = snow2.dy - 1;
//
//     if (snow2.dy < 200) {
//       animateSnowImg2Down();
//       return;
//     }
//
//     drawObject({el: snowImgDom2, dx: snow2.dx, dy: snow2.dy, dw: snow2.dw, dh: snow2.dh, isVisible: snow2.isVisible});
//     requestAnimationFrame(animateSnowImg2Up);
//   };
//
//   const animateSnowImg2Down = () => {
//     snow2.isVisible = 1;
//     snow2.dy = snow2.dy + 1;
//
//     if (snow2.dy > 250) {
//       animateSnowImg2Up();
//       return;
//     }
//
//     drawObject({el: snowImgDom2, dx: snow2.dx, dy: snow2.dy, dw: snow2.dw, dh: snow2.dh, isVisible: snow2.isVisible});
//     requestAnimationFrame(animateSnowImg2Down);
//   };
//
//
//   // самолёт
//   const plane = {
//     dx: 130,
//     dy: 150,
//     dw: 250,
//     dh: 250,
//     src: `/img/module-4/win-primary-images/airplane.png`,
//     isVisible: 0,
//     transforms: {
//       scale: 0.5
//     }
//   };
//
//   const planeImgDom = createImgElement(plane);
//   const animatePlane = () => {
//     plane.isVisible = 1;
//     plane.dx = (plane.dx + 10);
//     drawObject({el: planeImgDom, dx: plane.dx, dy: plane.dy, dw: plane.dw, dh: plane.dh, isVisible: plane.isVisible, transforms: plane.transforms});
//   };
//
//   // след
//   const back = {
//     dx: 180,
//     dy: 250,
//     dw: 570,
//     dh: 320,
//     src: `/img/module-4/win-primary-images/back.png`,
//     isVisible: 0
//   };
//
//   const backImgDom = createImgElement(back);
//   const animateBack = () => {
//     back.isVisible = 1;
//     drawObject({el: backImgDom, dx: back.dx, dy: back.dy, dw: back.dw, dh: back.dh, isVisible: back.isVisible});
//   };
//
//   // дерево
//   const tree = {
//     dx: 480,
//     dy: 320,
//     dw: 35,
//     dh: 150,
//     src: `/img/module-4/win-primary-images/tree2.png`,
//     isVisible: 0
//   };
//
//   const treeImgDom = createImgElement(tree);
//   const animateTree = () => {
//     tree.isVisible = 1;
//     drawObject({el: treeImgDom, dx: tree.dx, dy: tree.dy, dw: tree.dw, dh: tree.dh, isVisible: tree.isVisible});
//   };
//
//   // дерево2
//   const tree2 = {
//     dx: 530,
//     dy: 370,
//     dw: 35,
//     dh: 100,
//     src: `/img/module-4/win-primary-images/tree.png`,
//     isVisible: 0
//   };
//
//   const treeImgDom2 = createImgElement(tree2);
//   const animateTree2 = () => {
//     tree2.isVisible = 1;
//     drawObject({el: treeImgDom2, dx: tree2.dx, dy: tree2.dy, dw: tree2.dw, dh: tree2.dh, isVisible: tree2.isVisible});
//   };
//
//
//   tick();
//
//   // анимация моржа и льдины
//   animateIt({elFunction: animateIceImg, started: Date.now(), duration: 600});
//   animateIt({elFunction: animateCalfImg, started: Date.now(), duration: 600});
//
//   // след
//   setTimeout(() => {
//     animateIt({elFunction: animateBack, started: Date.now(), duration: 600});
//   }, 600);
//
//   // самолёт
//   setTimeout(() => {
//     animateIt({elFunction: animatePlane, started: Date.now(), duration: 600});
//   }, 600);
//
//
//   // дерево
//   setTimeout(() => {
//     animateIt({elFunction: animateTree, started: Date.now(), duration: 600});
//   }, 900);
//
//   // дерево2
//   setTimeout(() => {
//     animateIt({elFunction: animateTree2, started: Date.now(), duration: 600});
//   }, 900);
//
//
//   // снег
//   setTimeout(() => {
//     animateSnowImg1Up();
//     animateSnowImg2Up();
//   }, 1200);
//
//
// }
