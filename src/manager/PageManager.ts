import { renderHome, renderWelcome } from "../pages/home";
import { renderNetworking } from "../pages/networking";
import type { NetworkingFilters } from "../types/INetworkingFilters";
import type { Seniority } from "../types/IUser";
import { renderNavbarDesktop } from "../components/desktop/navbar/DesktopNavbar";
import { renderNavbarMobile } from "../components/mobile/navbar/MobileNavbar";
import { renderRegisterForm } from "../components/mobile/form/MobileForm";

type PageName = "welcome" | "home" | "networking" | "register";// | "jobs" | "events";


export class PageManager {
    private root: HTMLElement;// BOX guardar un DOM: contenedor
    private navbarRoot: HTMLElement;
    private networkingFilters: NetworkingFilters;
    private currentPage: PageName; /* = "welcome";*/

    constructor(rootSelector: string) { //rootSelector = #app
        this.root = document.querySelector(rootSelector) as HTMLElement;
        this.navbarRoot = document.querySelector("#navbar-root") as HTMLElement;
        this.networkingFilters = { query: "", level: "", onlyActive: false, onlyAvailable: false };
        this.currentPage = "welcome";

        this.bindEvents();
        this.init();         // ← vuelve a inicio, al recargar
        this.bindResize();   // ← para render auto
    }

    private init(): void {
        const isMobile = window.innerWidth < 768;
        this.loadPage(isMobile ? "welcome" : "home");
    }

    private bindResize(): void {
        window.addEventListener("resize", () => {
            const isMobile = window.innerWidth < 768;
            const isLandingPage = this.currentPage === "welcome" || this.currentPage === "home";


            if (isLandingPage) {
                const correctPage = isMobile ? "welcome" : "home";
                if (this.currentPage !== correctPage) {
                    this.loadPage(correctPage);
                    return; // loadPage ya llama a renderNavbar() internamente
                }
            }
            this.root.innerHTML = this.getPageHTML(this.currentPage);
            this.renderNavbar(); //  solo actualiza el navbar
        });
    }
    // --------------LOAD PAGE----------
    loadPage(page: PageName): void { //SOLICITA  → HTML en el DOM
        this.currentPage = page;
        this.root.innerHTML = this.getPageHTML(page);
        this.renderNavbar();
    }

    private renderNavbar(): void {
        if (this.navbarRoot === null) {
            return;
        }
        if (this.currentPage === "welcome") {
            this.navbarRoot.innerHTML = "";
            return;
        }

        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            this.navbarRoot.innerHTML = renderNavbarMobile(this.currentPage);
        } else {
            this.navbarRoot.innerHTML = renderNavbarDesktop(this.currentPage);
        }
    }

    // this.navbarRoot.innerHTML = renderNavbarDesktop(this.currentPage);

    private getPageHTML(page: PageName): string { //FABRICA → decide qué HTML corresponde a una página (lógica de decisión).
        switch (page) {
            case "welcome":
                return renderWelcome();
            case "home":
                return renderHome();
            case "networking":
                return renderNetworking(this.networkingFilters);
            case "register":
                return renderRegisterForm();
            // case "applyFilter":
            //     return handleFilter();
            // case "jobs":
            // return renderJobs();      
            // case "events":
            // return renderEvents();
            default:
                return "<p>Page not found</p>";
        }
    }

    // ------------Listeners: -----------------

    private bindEvents(): void {
        this.root.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;

            const pageLink = target.closest("[data-page]") as HTMLElement | null;
            if (pageLink !== null) {
                const page = pageLink.dataset.page as PageName;
                this.loadPage(page);
                return;
            }

            if (target.id === "joinButton") {
                this.loadPage("home");
            }
            if (target.id === "page-networking") {
                this.loadPage("networking");
            }
            if (target.classList.contains("chip")) {
                const level = target.dataset.level as Seniority;
                this.networkingFilters.level = this.networkingFilters.level === level ? "" : level;
                this.loadPage("networking");
            }

            // if (target.id === "page-jobs") {
            //     this.loadPage("jobs");
            // }

            //  if (target.id === "page-events") {
            //     this.loadPage("events");
            // }
        });

        this.navbarRoot.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            const link = target.closest("[data-page]") as HTMLElement | null;

            if (link === null) { return; }

            const page = link.dataset.page as PageName;
            this.loadPage(page);
        });

        this.root.addEventListener("change", (event) => {
            const target = event.target as HTMLInputElement;

            if (target.id === "onlyActive") {
                this.networkingFilters.onlyActive = target.checked;
                this.loadPage("networking");
            }

            if (target.id === "onlyAvailable") {
                this.networkingFilters.onlyAvailable = target.checked;
                this.loadPage("networking");
            }
        });

        this.root.addEventListener("keyup", (event) => {
            const target = event.target as HTMLElement;
            const keyboardEvent = event as KeyboardEvent;

            if (target.id === "searchInput" && keyboardEvent.key === "Enter") {
                const input = target as HTMLInputElement;
                this.networkingFilters.query = input.value;
                this.loadPage("networking");
            }
        });
    }
}

//   // -----------------------------
//   // HU3.1 — MemberSearch
//   // -----------------------------


//   // -----------------------------
//   // HU3.3 — FilterMemberProfiles
//   // -----------------------------


//   // -----------------------------
//   // MemberProfile (fuera de MVP)
//   // -----------------------------

