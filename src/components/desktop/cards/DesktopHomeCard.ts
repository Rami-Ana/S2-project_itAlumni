
export function renderDesktopHomeCard(iconClass: string, title: string, description: string, btnText: string) {
  return `
    <article class="benefit-card" aria-labelledby="benefit-share-title">
      <div class="benefit-card__item">

      <div class="benefit-card__icon-wrapper">
        <i class="${iconClass} benefit-card__icon style="color: #ce0a86" aria-hidden="true"></i>
      </div>

      <h3 class="benefit-card__title">${title} </h3>

      <p class="benefit-card__text">
        ${description} 
      </p>

      <button class="benefit-card__cta" aria-label="${btnText}">${btnText}</button>
    </article>
`;
}