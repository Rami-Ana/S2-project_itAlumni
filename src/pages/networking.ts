import { renderMobileHeader } from "../components/mobile/MobileHeader";
import { renderMobileSearch } from "../components/mobile/MobileSearch";
import { renderMobileNetworkingCard } from "../components/mobile/cards/MobileNetworkingCard";
import { generateDummyUsers } from "../mocks/mockUsers";
import { searchUsers } from "../services/UserService";
// import { User } from "../models/User";

export function renderNetworking(query: string): string {
  return window.innerWidth < 768 
  ? renderMobileNetworking(query) 
  : renderDesktopNetworking(query);
}



export function renderMobileNetworking(query: string): string {
  // Primero aplicamos el buscador
  const allUsers = generateDummyUsers();
  const users = searchUsers(query, allUsers);

  let cardsHtml: string;

  if (users.length === 0) {
    cardsHtml = `<p class="text-center text-light text-s">No s'han trobat resultats.</p>`;
  } else {
    cardsHtml = users.map(user => renderMobileNetworkingCard(user, "src/assets/images/image--template__square.png")).join("");
  }

  // card
  // let cardsHtml = users.length === 0
  //   ? `<p class="text-light text-center text-s">No s'han trobat resultats</p>`
  //   : users.map(user => renderMobileNetworkingCard(user, "src/assets/images/image--template__square.png")).join("");

  return `
    <div class="mobile-networking__container">
      <div class="mobile-networking__wrapper">

        ${renderMobileHeader("Networking")}
        ${renderMobileSearch()}

        <div class="mobile-networking__cards-grid">
          ${cardsHtml}
        </div>

      </div>
    </div>
  `;
}

export function renderDesktopNetworking(query: string = ""): string {
  return `
   <div class="networking"></div>
  `;
}

// <div class="filter-users">
//             <h3 class="filter-title">Filtres</h3>

//             <div id="chipContainer">
//               <button class="chip" data-level="junior">Junior</button>
//               <button class="chip" data-level="mid">Mid</button>
//               <button class="chip" data-level="senior">Senior</button>
//             </div>

//             <label for="stack">Stack:</label>
//             <input type="text" id="stack" placeholder="React, Angular, Node…">

//             <label>
//               <input type="checkbox" id="employmentOption">
//               Disponible per treball
//             </label>

//             <label>
//               <input type="checkbox" id="activityOption">
//               Actius recentment
//             </label>

//             <button id="applyFilter" class="cta-style">Aplicar filtres</button>

//         </div>