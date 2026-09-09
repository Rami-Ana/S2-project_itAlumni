import type { NavLink } from "../../../types/INavLink";

interface NavLinkMobile extends NavLink {
  icon: string;
}

const NAV_LINKS: NavLinkMobile[] = [
  { label: 'Home', page: 'home', icon: 'fa-house' },
  { label: 'Networking', page: 'networking', icon: 'fa-user-group' },
  { label: 'Job Portal', page: 'job-portal', icon: 'fa-briefcase' },
  { label: 'Events', page: 'events', icon: 'fa-user' },
];

export function renderNavbarMobile(currentPage: string): string {
  const itemsHtml = NAV_LINKS.map((link) => {
    let activeClass = '';
    if (link.page === currentPage) {
      activeClass = 'navbar-mobile__item--active';
    }
    return `
      <button class="navbar-mobile__item ${activeClass}" data-page="${link.page}">
        <i class="fa-solid ${link.icon} navbar-mobile__icon" aria-hidden="true"></i>
        <span class="navbar-mobile__label">${link.label}</span>
      </button>`;
  }).join('');

  return `
    <nav class="navbar-mobile" aria-label="Main navigation">
      ${itemsHtml}
    </nav>`;
}