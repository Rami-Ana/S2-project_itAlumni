import { renderMobileHeader } from "../components/mobile/MobileHeader";
import { renderMobileSearch } from "../components/mobile/MobileSearch";
import { renderMobileHomeCard } from "../components/mobile/cards/MobileHomeCard";

export function renderHome(): string {
  return window.innerWidth < 768 ? renderMobileHome() : renderDesktopHome();
}

export function renderWelcome(): string {
  return `
  <div class="welcome-mobile">
    <div class="welcome-mobile__content">
      <img src="/brand__logo--primary.png" alt="Logo Alumni" class="welcome-mobile__logo">
        <p>Connectant i empoderant a la nostra comunitat global d’alumnes</p>
    </div>

      <button class="btn btn--gradient btn--m welcome-mobile__cta" id="joinButton" aria-label="Accedir a IT Alumni">Uneix-te</button>
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
            "Explore"
          )}
          ${renderMobileHomeCard(
            "src/assets/images/image--template__square.png",
            "Job Opportunities",
            "Discover openings tailored to your skills.",
            "Search Jobs"
          )}
        </div>

      </div>
    </div>
  `;
}

export function renderDesktopHome(): string {
  return `
   <div class="home"></div>
  `;
}







// export function renderHomeMobile(): string {
  // return `
  //   <div class="mobile-home">
  //     ${renderMobileHeader()}
  //     ${renderMobileSearch()}
  //     ${renderMobileCards()}
  //     ${renderMobileNavbar()}
  //   </div>
  // `; }

// componentes

// ✔ 1. Header
// Título “Home”

// Icono de perfil

// Icono de estadísticas (si lo usas)

// ✔ 2. Search bar
// Icono lupa

// Input con placeholder

// ✔ 3. Cards (Networking + Job Opportunities)
// Cada card es un componente:

// Imagen (si la hay)

// Título

// Texto

// Botón

// ✔ 4. Navbar inferior
// Home

// Networking

// Job Portal

// Profile