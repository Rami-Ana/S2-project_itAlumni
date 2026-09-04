
export function renderNavbar() {
  const navbarRoot = document.getElementById("navbar-root")!;
  fetch("/src/assets/icons/navbar__icon--home.svg")
    .then(res => res.text())
    .then(html => {
      navbarRoot.innerHTML = html;
    });
}