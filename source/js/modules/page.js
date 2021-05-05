import AccentTypographyBuild from "./text";

export default () => {

  window.addEventListener(`load`, () => {
    const body = document.querySelector(`body`);
    body.classList.add(`loaded`);
    body.classList.add(`theme1`);

    const animationIntroTitle = new AccentTypographyBuild(`.intro__title`, 500, `animate`, `transform`);
    const animationIntroDate = new AccentTypographyBuild(`.intro__date`, 500, `animate`, `transform`);
    const animationHistory = new AccentTypographyBuild(`.slider__item-title--history`, 500, `animate`, `transform`);
    const prizesTitle = new AccentTypographyBuild(`.prizes__title`, 500, `animate`, `transform`);
    const rulesTitle = new AccentTypographyBuild(`.rules__title`, 500, `animate`, `transform`);
    const gameTitle = new AccentTypographyBuild(`.game__title`, 500, `animate`, `transform`);
    // запуск анимации при первоначальной загрузки любой страницы
    animationIntroTitle.destroyAnimation();
    animationIntroDate.destroyAnimation();
    animationHistory.destroyAnimation();
    prizesTitle.destroyAnimation();
    rulesTitle.destroyAnimation();
    gameTitle.destroyAnimation();

    setTimeout(() => {
      animationIntroTitle.runAnimation();
    }, 10);
    setTimeout(() => {
      animationIntroDate.runAnimation();
    }, 200);

    setTimeout(() => {
      animationHistory.runAnimation();
    }, 10);

    setTimeout(() => {
      prizesTitle.runAnimation();
    }, 10);

    setTimeout(() => {
      rulesTitle.runAnimation();
    }, 10);

    setTimeout(()=>{
      gameTitle.runAnimation();
    }, 10);


    body.addEventListener(`screenChanged`, (event) => {
      // запуск анимации при смене экранов
      animationIntroTitle.destroyAnimation();
      animationIntroDate.destroyAnimation();
      animationHistory.destroyAnimation();
      prizesTitle.destroyAnimation();
      rulesTitle.destroyAnimation();
      gameTitle.destroyAnimation();

      switch (event.detail.screenName) {

        case `top`:
          setTimeout(() => {
            animationIntroTitle.runAnimation();
          }, 20);

          setTimeout(() => {
            animationIntroDate.runAnimation();
          }, 200);
          break;

        case `story`:
          setTimeout(() => {
            animationHistory.runAnimation();
          }, 10);
          break;

        case `prizes`:
          setTimeout(() => {
            prizesTitle.runAnimation();
          }, 430);

          const primaryPrizeEl = document.querySelector(`.prizes__icon img`);
          primaryPrizeEl.src = `img/module-3/img/primary-award.svg`;
          break;

        case `rules`:
          setTimeout(() => {
            rulesTitle.runAnimation();
          }, 10);
          break;

        case `game`:
          setTimeout(()=>{
            gameTitle.runAnimation();
          }, 10);
      }
    });



  });
};
