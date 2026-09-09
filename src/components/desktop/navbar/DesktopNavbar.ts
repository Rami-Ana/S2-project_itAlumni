import type { NavLink } from "../../../types/INavLink";

const NAV_LINKS: NavLink[] = [
  { label: 'Home', page: 'home' },
  { label: 'Networking', page: 'networking' },
  { label: 'Job Portal', page: 'job-portal' },
  { label: 'Events', page: 'events' },
];

export function renderNavbarDesktop(currentPage: string): string{
    const linksHtml = NAV_LINKS.map((link) => {
    let activeClass = '';
    if (link.page === currentPage) {activeClass = 'navbar__link--active';}
    return `
      <li>
        <button class="navbar__link ${activeClass}" data-page="${link.page}">
          ${link.label}
        </button>
      </li>`;
  }).join('');

  return `
    <nav class="navbar" aria-label="Main navigation">
    
    <img src="/brand__logo--primary.png" alt="Xlumni" class="navbar__logo">

      <ul class="navbar__links">
        ${linksHtml}
      </ul>

      <div class="navbar__actions">
        <button class="btn btn--outline btn--s" data-page="join">
          <i class="fa-solid fa-user-plus" aria-hidden="true"></i>
          Join in
        </button>
        <button class="btn btn--gradient btn--s" data-page="login">
          <i class="fa-solid fa-user" aria-hidden="true"></i>
          Log in
        </button>
      </div>
    </nav>
    `;
}
