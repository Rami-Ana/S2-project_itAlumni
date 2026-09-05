import { renderMobileHeader } from "../components/mobile/MobileHeader";
import { renderMobileSearch } from "../components/mobile/MobileSearch";
import { renderMobileNetworkingCard } from "../components/mobile/cards/MobileNetworkingCard";
import { generateDummyUsers } from "../mocks/mockUsers";
import { applyFilters } from "../services/UserService";
import type { NetworkingFilters } from "../types/INetworkingFilters";

export function renderNetworking(filters: NetworkingFilters): string {
  return window.innerWidth < 768
    ? renderMobileNetworking(filters)
    : renderDesktopNetworking(filters);
}

export function renderFilterPanel(filters: NetworkingFilters): string {
  return `
    <div class="filter-panel">
    <h3 class="filter-title">Filter</h3>
      <div class="filter-panel__row">

        <div class="filter-panel__chips">
          <button aria-label="Junior" class="chip ${filters.level === "junior" ? "chip--active" : ""}" data-level="junior">Junior</button>
          <button aria-label="mid" class="chip ${filters.level === "mid" ? "chip--active" : ""}" data-level="mid">Mid</button>
          <button aria-label="senior"  class="chip ${filters.level === "senior" ? "chip--active" : ""}" data-level="senior">Senior</button>
        </div>

        <label class="filter-panel__checkbox">
          <input type="checkbox" id="onlyActive" ${filters.onlyActive ? "checked" : ""}>
          Activity
        </label>

        <label class="filter-panel__checkbox">
          <input type="checkbox" id="onlyAvailable" ${filters.onlyAvailable ? "checked" : ""}>
          Availability
        </label>
      </div>

    </div>
  `;
}

export function renderMobileNetworking(filters: NetworkingFilters): string {
  const allUsers = generateDummyUsers();
  const users = applyFilters(allUsers, filters);

  let cardsHtml: string;
  if (users.length === 0) {
    cardsHtml = `<p class="text-secondary text-s text-center">No results found</p>`;
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
        ${renderMobileSearch(filters.query)}
        ${renderFilterPanel(filters)}

        <div class="mobile-networking__cards-grid">
          ${cardsHtml}
        </div>
      </div>
    </div>
  `;
}

export function renderDesktopNetworking(filters: NetworkingFilters): string {
  return `<div class="networking"></div>`;
}
