import AccentTypographyBuild from "./text";
const animationController = (screenId) => {

  const animationIntroTitle = new AccentTypographyBuild(`.intro__title`, 500, `animate`, `transform`);
  const animationIntroDate = new AccentTypographyBuild(`.intro__date`, 500, `animate`, `transform`);
  const animationHistory = new AccentTypographyBuild(`.slider__item-title--history`, 500, `animate`, `transform`);
  const prizesTitle = new AccentTypographyBuild(`.prizes__title`, 500, `animate`, `transform`);
  const rulesTitle = new AccentTypographyBuild(`.rules__title`, 500, `animate`, `transform`);
  const gameTitle = new AccentTypographyBuild(`.game__title`, 500, `animate`, `transform`);

  animationIntroTitle.destroyAnimation();
  animationIntroDate.destroyAnimation();
  animationHistory.destroyAnimation();
  prizesTitle.destroyAnimation();
  rulesTitle.destroyAnimation();
  gameTitle.destroyAnimation();

  switch (screenId) {

    case `top`:
      setTimeout(() => {
        animationIntroTitle.runAnimation();
      }, 4000);

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
};

export default animationController;
