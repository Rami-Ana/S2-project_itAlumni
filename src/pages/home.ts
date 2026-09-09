import { renderMobileHeader } from "../components/mobile/MobileHeader";
import { renderMobileSearch } from "../components/mobile/MobileSearch";
import { renderMobileHomeCard } from "../components/mobile/cards/MobileHomeCard";
import { renderDesktopHomeCard } from "../components/desktop/cards/DesktopHomeCard";
import { getMockTestimonials } from "../mocks/mockTestimonials";
import { renderTestimonialCard } from "../components/desktop/cards/TestimonialCard";
import { renderCarouselNav } from "../components/CarouselNav";
import { renderDesktopFooter } from "../components/desktop/Footer";
import { renderNavbarDesktop } from "../components/desktop/navbar/DesktopNavbar";

export function renderHome(): string {
  return window.innerWidth < 768 ? renderMobileHome() : renderDesktopHome();
}

export function renderWelcome(): string {
  return `
  <div class="welcome-mobile">
    <div class="welcome-mobile__content">
      <img src="/brand__logo--primary.png" alt="Alumni Logo" class="welcome-mobile__logo">
        <p>Connecting and empowering our global community</p>
    </div>

      <button class="btn btn--gradient btn--m welcome-mobile__cta" id="joinButton" aria-label="Access to IT Alumni">Join in</button>
  </div>
  `;
}

export function renderMobileHome(): string {
  return `
    <div class="mobile-home__container">
      <div class="mobile-home__wrapper">
        ${renderMobileHeader("Home")}
        ${renderMobileSearch()}

        <div class="mobile-home__cards-grid">
          ${renderMobileHomeCard(
            "src/assets/images/image--template__square.png",
            "Networking",
            "Connect with professionals in your field.",
            "Explore",
            "page-networking"
          )}
          ${renderMobileHomeCard(
            "src/assets/images/image--template__square.png",
            "Job Opportunities",
            "Discover openings tailored to your skills.",
            "Search Jobs",
            "page-jobs"
          )}
        </div>

      </div>
    </div>
  `;
}

export function renderDesktopHome(): string {
  return `
    <div class="desktop-home__container">
      <section class="alumni-hero" aria-labelledby="alumni-hero-title">

        <header class="alumni-hero__header">
          <h1 class="alumni-hero__title" id="alumni-hero-title">Welcome Alumni</h1>
          <p class="alumni-hero__subtitle">
            Connecting and empowering our global student community.
          </p>

          <div class="alumni-hero__actions" aria-label="Primary actions">
            <button class="btn btn--gradient btn--l">Join in</button>
            <button class="btn btn--outline btn--l">Look what we do</button>
          </div>
        </header>

        <figure class="alumni-hero__image">
          <img src="/src/assets/images/image_home-header.png" alt="Alumni networking event">
          <button class="alumni-hero__play-btn" aria-label="Play video">
            <i class="fa-solid fa-caret-right" aria-hidden="true"></i>
          </button>
        </figure>

      </section>

      <section class="alumni-benefits" aria-labelledby="benefits-title">
        <h2 class="benefits-title" id="benefits-title">What do you gain by being part of it?</h2>

        <div class="alumni-benefits__grid">
          ${renderDesktopHomeCard(
            "fa-solid fa-message",
            "Share and do not lose contact",
            "Go up your important moments, explain how everything goes and stay with your colleagues. A network to be closer.",
            "Sign up now"
          )}
          ${renderDesktopHomeCard(
            "fa-solid fa-comments",
            "Participate in discussions",
            "Exchange knowledge, points of view and opinions on topics that interest you.",
            "Sign up now"
          )}
          ${renderDesktopHomeCard(
            "fa-solid fa-user-plus",
            "Alumni Network",
            "Make new friends and create memories to last a lifetime.",
            "Sign up now"
          )}
        </div>
      </section>

      <section class="alumni-testimonial" aria-labelledby="testimonial-title">
        <h2 class="testimonial-title" id="testimonial-title">"We show you what our super-users think!"</h2>

        <div class="alumni-testimonial__cards">
          ${renderTestimonials()}
        </div>

        ${renderCarouselNav()}
      </section>

    </div>
        ${renderDesktopFooter()}

  `;
}

function renderTestimonials(): string {
  const allTestimonials = getMockTestimonials();
  return allTestimonials
    .map(t => renderTestimonialCard(t.name, t.avatar, t.rating, t.message))
    .join("");
}