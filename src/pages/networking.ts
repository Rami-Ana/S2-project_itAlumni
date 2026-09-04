import { renderMobileHeader } from "../components/mobile/MobileHeader";
import { renderMobileSearch } from "../components/mobile/MobileSearch";
import { renderMobileNetworkingCard } from "../components/mobile/cards/MobileNetworkingCard";
import { generateDummyUsers } from "../mocks/mockUsers";

export function renderNetworking(): string {
  return window.innerWidth < 768 ? renderMobileNetworking() : renderDesktopNetworking();
}

export function renderMobileNetworking(): string {
const users = generateDummyUsers();

  return `
    <div class="mobile-networking__container">
      <div class="mobile-networking__wrapper">
        ${renderMobileHeader("Networking")} 
        ${renderMobileSearch()}

        <div class="mobile-networking__cards-grid">
          ${renderMobileNetworkingCard(users[0], "src/assets/images/image--template__square.png")}
          ${renderMobileNetworkingCard(users[1], "src/assets/images/image--template__square.png")}
          ${renderMobileNetworkingCard(users[2], "src/assets/images/image--template__square.png")}
          ${renderMobileNetworkingCard(users[3], "src/assets/images/image--template__square.png")}
          ${renderMobileNetworkingCard(users[4], "src/assets/images/image--template__square.png")}

        </div>
       


      </div>
    </div>
  `;
}

// users.map(user => 
//   renderMobileNetworkingCard(user, "imagen.png")
// )

export function renderDesktopNetworking(): string {
  return `
   <div class="networking"></div>
  `;
}