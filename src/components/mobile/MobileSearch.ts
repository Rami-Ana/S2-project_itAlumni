export function renderMobileSearch(value: string = "") {
  return `
    <div class="mobile-search">
      <img alt = "Icon Search" src="src/assets/icons/search-bar--icon__black.png" class="search-icon">
      <input type="text" id="searchInput" placeholder="Search alumni…" value="${value}">
    </div>
  `;
}

// export function renderMemberSearchBar(): string {
//     return `
//     <label for="querySearchUser">Buscar:</label>
//     <input type ="text" id="querySearchUser" placeholder="Escriu el nom o les skills">
//     <button> 
//     <input type ="button" id="searchUser" class="cta-style" value="Buscar">
// `;
// }