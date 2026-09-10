
export function renderCarouselNav() {
  return `
  <div class="carousel-nav">
    <button class="nav-btn" aria-label="Button left" onclick="return false;">
      <i class="fa-solid fa-angle-left"></i>
    </button>
    
    <button class="nav-btn" aria-label="Button right" onclick="return false;">
      <i class="fa-solid fa-angle-right"></i>
    </button>
</div>
`;
}