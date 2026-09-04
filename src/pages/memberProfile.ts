

//NO NECESARIO: Ver perfil concreto
import type { IUser } from '../types/IUser';


export function renderMemberProfile(user: IUser): string {
    let activityLabel: string;
    if (user.isRecentlyActive) {
        activityLabel = "Activo recientemente";
    } else if (!user.isRecentlyActive) { activityLabel = "Sin actividad reciente" }
    else { activityLabel = "Sin información"; }
//   const activityLabel = user.isRecentlyActive ? "Activo recientemente" : "Sin actividad reciente";

    return `
 <img src="src/assets/img/" alt="Foto de ${user.name}">
<ul>
  <h2>Nom i cognoms: ${user.name}</h2>
  <p>Experiéncia: ${user.seniority}</p>
  <p>Skills: ${user.skills.join(" | ")}</p>
  <p>Localitat: ${user.location}</p>
  <p>Activitat recent: ${activityLabel}</p>
  <p>Situació laboral: ${user.employmentStatus}</p>
</ul>
`

//
}