// import { generateDummyUsers } from "../../../mocks/mockUsers";
import type { IUser } from "../../../types/IUser";

export function renderMobileNetworkingCard(user: IUser, imgSrc:string) {
  return `
    <div class="networking-card">
      <div class="networking-card__info">
        <h3 class="text-m text-bold text-primary">${user.name}</h3>
        <p class="text-s text-light">Class of ${user.classYear}</p>
        <p class="text-s text-light">${user.position}</p>
      </div>
        <img src="${imgSrc}" alt="${user.name}" class="networking-card__img">
    </div>

  `;
}

// networking-card__name
// networking-card__year
// networking-card__position
      // <div class="networking-card__img">
      // </div>
