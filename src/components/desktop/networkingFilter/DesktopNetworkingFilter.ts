interface SortOption {
  label: string;
  value: string;
}

const SORT_OPTIONS: SortOption[] = [
  { label: 'Recent Activity', value: 'recent' },
  { label: 'Popular', value: 'popular' },
  { label: 'Most Connected', value: 'connected' },
];


export function renderDesktopNetworkingFilter(currentSort: string): string {
  const linksHtml = SORT_OPTIONS.map((option) => {
    let activeClass = '';
    if (option.value === currentSort) {
      activeClass = 'desktop-networking__link--active';
    }
    return `
      <li>
        <button class="desktop-networking__link ${activeClass}" data-sort="${option.value}">
          ${option.label}
        </button>
      </li>`;
  }).join('');

  return `
    <ul class="desktop-networking__sort-list">
      ${linksHtml}
    </ul>`;
}