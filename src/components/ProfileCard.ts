// import type { User } from "../models/User";

// export class ProfileCard {
//     private _user: User;

//     constructor(user: User) {
//         this._user = user;
//     }

//     get user(): User { return this._user; }
//     set user(value: User) { this._user = value; }

//     render(): string {
//         return `
//         <article class="profile-card">
//             <p>Nom: ${this.user.name}</p>
//             <p>Skills: ${this.user.skills.join(", ")}</p>
//             <p>Disponibilitat: ${this.user.employmentStatus}</p>
//             <p>Localitat: ${this.user.location}</p>
//         </article>
//         `;
//     }
// }


//NO NECESARIO: Ver perfil concreto
// import type { IUser } from '../types/IUser';


// export function renderMemberProfile(user: IUser): string {
//     let activityLabel: string;
//     if (user.isRecentlyActive) {
//         activityLabel = "Activo recientemente";
//     } else if (!user.isRecentlyActive) { activityLabel = "Sin actividad reciente" }
//     else { activityLabel = "Sin información"; }
// //   const activityLabel = user.isRecentlyActive ? "Activo recientemente" : "Sin actividad reciente";

//     return `
//  <img src="src/assets/img/" alt="Foto de ${user.name}">
// <ul>
//   <h2>Nom i cognoms: ${user.name}</h2>
//   <p>Skills: ${user.skills.join(" | ")}</p>
//   <p>Localitat: ${user.location}</p>
//   <p>Activitat recent: ${activityLabel}</p>
//   <p>Situació laboral: ${user.employmentStatus}</p>
// </ul>
// `
// }