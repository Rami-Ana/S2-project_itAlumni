import { renderHome, renderWelcome } from "../pages/home";
import { renderNetworking } from "../pages/networking";
// import { generateDummyUsers } from "../mocks/mockUsers";
// import { renderJobs } from "../pages/jobs";
// import { renderEvents } from "../pages/events";


type PageName = "welcome" | "home" | "networking";// | "applyFilter"; //| "jobs" | "events";

export class PageManager {
    private root: HTMLElement;// BOX guardar un DOM: es el contenedor donde vas a pintar cada página, una tras otra.

    constructor(rootSelector: string) { //rootSelector = #app
        this.root = document.querySelector(rootSelector) as HTMLElement;
        this.bindEvents(); /* Escucha de clicks */
    }
//  query: string = ""
    loadPage(page: PageName, query: string = ""): void { //SOLICITA  → pinta ese HTML en el DOM (efecto en pantalla).
        this.root.innerHTML = this.getPageHTML(page, query) //page = home query=seach
    }

    private getPageHTML(page: PageName, query: string): string { //FABRICA → decide qué HTML corresponde a una página (lógica de decisión).
        switch (page) {
            case "welcome":
                return renderWelcome();
            case "home":
                return renderHome();
            case "networking":
                return renderNetworking(query);        
            // case "applyFilter":
            //     return handleFilter();
            // case "jobs":
            // return renderJobs();      
            // case "events":
            // return renderEvents();
            default:
                return "<p>Página no encontrada</p>";
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
            // if (target.id === "applyFilter") {
            //     this.handleFilter();
            // }
            // //INVESTIGAR:
            // if (target.classList.contains("chip")) {
            //     document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
            //     target.classList.add("active");
            // }


            // if (target.id === "page-jobs") {
            //     this.loadPage("jobs");
            // }

            //  if (target.id === "page-events") {
            //     this.loadPage("events");
            // }
        });

        this.root.addEventListener("keyup", (event) => {
            const target = event.target as HTMLElement;
            const keyboardEvent = event as KeyboardEvent;

            if (target.id === "searchInput" && keyboardEvent.key === "Enter") {
                const input = target as HTMLInputElement; // ← esta línea declara "input"
                this.loadPage("networking", input.value);
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

