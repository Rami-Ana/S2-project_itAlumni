import type { IUser } from "../../../types/IUser";

export function renderDesktopNetworkingCard(user: IUser):string {
    return `
    <div class="desktop-networking-card">
      <div class="desktop-networking-card__info">
        <h3 class="desktop-networking-card__name">${user.name}</h3>
        <p>Class of ${user.position}</p>
        <p>${user.location}</p>

        <button class="btn btn--s btn--solid " onclick="return false" aria-label="Message">Message</button>
      </div>
    </div>

  `;
}