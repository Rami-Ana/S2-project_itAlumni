export function renderMobileSearch(value: string = "") {
  return `
    <div class="mobile-search">
      <img alt = "Icon Search" src="src/assets/icons/search-bar--icon__black.png" class="search-icon">
      <input type="text" id="searchInput" placeholder="Search alumni…" value="${value}">
    </div>
  `;
}