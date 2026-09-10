export function renderMobileHeader(titleSection: string): string {
  return `
    <header class="mobile-header">
      <h2 class="mobile-header__title text-m text-regular text-primary">${titleSection}</h2>

      <div class="mobile-header__actions">
        <button class="mobile-header__filter-btn" onclick="return false" aria-label="filtre">
          <img src="src/assets/icons/nav--icon__1.png" alt="Icon" class="mobile-header__icon">
        </button>
        <button class="mobile-header__profile-btn" data-page="register"  aria-label="Profile">
          <img src="src/assets/images/profile_template.png" alt="Profile" class="mobile-header__avatar">
        </button>
      </div>
    </header>
  `;
}