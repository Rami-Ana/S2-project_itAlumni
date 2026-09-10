
import { renderDesktopSearch } from "../search/DesktopSearch";
import { renderDesktopNetworkingFilter } from "../networkingFilter/DesktopNetworkingFilter"; 
import type { NetworkingFilters } from "../../../types/INetworkingFilters";

export function renderDesktopNetworkingHeader(filters: NetworkingFilters): string {
  return `
    <div class="desktop-networking__header">
      <h2 class="desktop-networking__title">Networking</h2>

      <div class="desktop-networking__controls">
        ${renderDesktopSearch(filters.query)}
        ${renderDesktopNetworkingFilter("")}
      </div>
    </div>
  `;
}
// ${renderDesktopNetworkingFilter(filters.sort || "recent")}
