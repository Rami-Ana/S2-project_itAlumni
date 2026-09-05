// import type { IUser } from '../types/IUser';

// export function renderMemberProfile(user: IUser): string {
//     let activityLabel: string;
//     if (user.isRecentlyActive) {
//         activityLabel = "Activu recientement";
//     } else if (!user.isRecentlyActive) { activityLabel = "Sense activitat recent" }
//     else { activityLabel = "Sin informació"; }

//     let available: string;
//     if (user.employmentStatus) {
//         available = "Disponible";
//     } else if (!user.employmentStatus) { available = "No disponible" }
//     else { available = "Sense informació"; }
//     //   const activityLabel = user.isRecentlyActive ? "Activo recientemente" : "Sin actividad reciente";

//     return `
//     <img src="src/assets/img/" alt="Foto de ${user.name}">
//     <ul>
//         <h2>Nom i cognoms: ${user.name}</h2>
//         <p>Any de estudis: ${user.classYear}</p>
//         <p>Posició actual: ${user.position}</p>
//         <p>Rol: ${user.seniority}</p>
//         <p>Skills: ${user.skills.join(" | ")}</p>
//         <p>Localitat: ${user.location}</p>
//         <p>Activitat recent: ${activityLabel}</p>
//         <p>Situació laboral: ${available}</p>
//     </ul>
// `
// }