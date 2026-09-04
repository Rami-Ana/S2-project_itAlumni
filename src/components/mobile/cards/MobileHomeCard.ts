
export function renderMobileHomeCard(imgSrc:string,title:string, description:string, btnText:string) {
  return `
    <div class="mobile-home-card">
      <img class="mobile-home-card__img" src="${imgSrc}" alt="${title}">
      <h3 class="mobile-home-card__title text-s text-bold  text-primary text-left">${title}</h3>
      <p class="mobile-home-card__text  text-xxs text-regular text-light text-left">${description}</p>
      <button class="mobile-home-card__btn btn  btn--s btn--outline" onclick="return false;">
        ${btnText}
      </button>
    </div>
  `;
}
// no se que es más correcto si poner varias clases en así:<p class="text-xxs text-regular text-light text-left" >${description}</p> o poner una unica clase con esos parametros agrupados:
// .mobile-home-card__text {
//   margin-top: 4px;
//   font-size: 12pageXOffset;
//   color: var (--text-light);
//   text-align: left;
// }



// .margin-top-home-card__title {
//   margin-top: 8px;
// }

// .mobile-home-card__text {
//   margin-top: 4px;
// }

// .mobile-home-card__btn {
//   margin-top: 8px;
// }
