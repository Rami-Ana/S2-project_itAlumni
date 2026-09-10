export function renderDesktopSearch(value: string = "") {
  return `
    <div class="desktop-search">
      <img alt = "Icon Search" src="src/assets/icons/search-bar--icon__black.png" class="desktop-search-icon">
      <input type="text" id="desktopSearchInput" placeholder="Search alumni…" value="${value}">
    </div>
  `;
}