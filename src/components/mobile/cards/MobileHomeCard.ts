
export function renderMobileHomeCard(imgSrc:string,title:string, description:string, btnText:string, id:string) {
  return `
    <div class="mobile-home-card">
      <img class="mobile-home-card__img" src="${imgSrc}" alt="${title}">
      <h3 class="mobile-home-card__title text-s text-bold  text-primary text-left">${title}</h3>
      <p class="mobile-home-card__text  text-xxs text-regular text-light text-left">${description}</p>
      <button id="${id}" class="mobile-home-card__btn btn  btn--s btn--outline" onclick="return false;">
        ${btnText}
      </button>
    </div>
  `;
}