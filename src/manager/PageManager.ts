import { renderHome, renderWelcome } from "../pages/home";
import { renderNetworking } from "../pages/networking";
import type { NetworkingFilters } from "../types/INetworkingFilters";
import type { Seniority } from "../types/IUser"; 

// import { generateDummyUsers } from "../mocks/mockUsers";
// import { renderJobs } from "../pages/jobs";
// import { renderEvents } from "../pages/events";


type PageName = "welcome" | "home" | "networking";// | "applyFilter"; //| "jobs" | "events";

export class PageManager {
    private root: HTMLElement;// BOX guardar un DOM: contenedor
    private networkingFilters: NetworkingFilters;

    constructor(rootSelector: string) { //rootSelector = #app
        this.root = document.querySelector(rootSelector) as HTMLElement;
        this.networkingFilters = { query: "", level: "", onlyActive: false, onlyAvailable: false };

        this.bindEvents(); 
    }
//  query: string = ""
    loadPage(page: PageName): void { //SOLICITA  → HTML en el DOM
        this.root.innerHTML = this.getPageHTML(page); //page = home query=seach
    }

    private getPageHTML(page: PageName): string { //FABRICA → decide qué HTML corresponde a una página (lógica de decisión).
        switch (page) {
            case "welcome":
                return renderWelcome();
            case "home":
                return renderHome();
            case "networking":
                return renderNetworking(this.networkingFilters);        
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

//   // -----------------------------
//   // Listeners:
//   // -----------------------------

    private bindEvents(): void {
        this.root.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;

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

// private handleFilter(): void {
//   const allUsers = generateDummyUsers();
//   let result = allUsers;

//   // NIVELL (chip)
//   const activeChip = document.querySelector(".chip.active");
//   if (activeChip) {
//     const level = activeChip.dataset.level; // <-- SIN "!"
//     result = result.filter(u => u.seniority === level);
//   }

//   // STACK
//   const stack = (document.getElementById("stack") as HTMLInputElement).value.toLowerCase();
//   if (stack !== "") {
//     result = result.filter(u =>
//       u.skills.some(skill => skill.toLowerCase().includes(stack))
//     );
//   }

//   // DISPONIBILITAT (boolean)
//   const employment = (document.getElementById("employmentOption") as HTMLInputElement).checked;
//   if (employment) {
//     result = result.filter(u => u.employmentStatus === true);
//   }

//   // ACTIVITAT RECENT (boolean)
//   const active = (document.getElementById("activityOption") as HTMLInputElement).checked;
//   if (active) {
//     result = result.filter(u => u.isRecentlyActive === true);
//   }

//   this.root.innerHTML = renderNetworking("", result);
// }

// }


//   // -----------------------------
//   // HU3.1 — MemberSearch
//   // -----------------------------


//   // -----------------------------
//   // HU3.3 — FilterMemberProfiles
//   // -----------------------------


//   // -----------------------------
//   // MemberProfile (fuera de MVP)
//   // -----------------------------

