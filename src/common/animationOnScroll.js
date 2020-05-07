// Используется для анимации элементов страницы при первичной загрузке. Можно передавать параметром класс, можно id
// При сколле вешает класс active, к которому, в свою очередь, цепляется анимация
// Пример анимации и использования можно посмотреть на promo.toyota-kuntsevo
function animationOnScroll(element) {
  let isScrolling = false;

  window.addEventListener("scroll", throttleScroll, false);

  function throttleScroll(e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }

  document.addEventListener("DOMContentLoaded", scrolling, false);

  const listItems = document.querySelectorAll(element);

  function scrolling(e) {
    for (let i = 0; i < listItems.length; i++) {
      const listItem = listItems[i];
      // if (i === 0) {
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        }
      // } else {
      //   if (isFullyVisible(listItem)) {
      //     listItem.classList.add("active");
      //   }
      // }
    }
  }

  function isPartiallyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;
    // отнимая или прибавляя циферки ниже меняем нижнюю границу, начиная с которой будет вешаться класс
    return ((top + height >= 0) && (height + window.innerHeight - 200 >= bottom));
  }

  function isFullyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    // отнимая или прибавляя циферки ниже меняем нижнюю границу, начиная с которой будет вешаться класс
    return ((top >= 0) && (bottom <= window.innerHeight + 100));
  }
}

export default animationOnScroll;
