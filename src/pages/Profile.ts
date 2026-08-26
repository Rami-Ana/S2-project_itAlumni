import { ProfileCard } from '../components/ProfileCard';
import { User } from '../models/User';

export function renderSearchBar(): string {
    return `
    <label for="nameSearchUser">Buscar:</label>
    <input type ="text" id="nameSearchUser" placeholder="Escribe el nombre o la skill">
    <input type ="button" id="searchUser" class="cta-style" value="Buscar">
`;
}

export function renderFilterControl(): string {
    return `
    <label for="levelOption">Nivell:</label>
        <select id="levelOption">
            <option value="">--- Tria el nivell---</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
        </select>

    <label for="stack">Stack:</label>
    <input type ="text" id="stack" placeholder="Escriu el stack">

        <label for="employmentOption">Disponibilitat per treball:</label>
        <select id="employmentOption">
            <option value="">--- Tria ---</option>
            <option value="available">Disponible</option>
            <option value="unavailable">No disponible</option>
            <option value="specific-hours">Hores expecífiques</option>
        </select>

        <label for="activityOption">Només actius recentment:</label>
        <input type="checkbox" id="activityOption">

        <input type="button" id="applyFilter" class="cta-style" value="Filtrar">
`;
}

export function convertListHtml(userList: User[]): string {
    let userCardsHtml = '<ul class="user-list">';

    for (const user of userList) {
        const card = new ProfileCard(user).render();
        userCardsHtml += `<li class="user-list__item">${card}</li>`;
    }
    userCardsHtml += '</ul>';
    return userCardsHtml;
}

export function renderFullProfilePage(userList: User[]): string {
    return `${renderSearchBar()} ${renderFilterControl()} ${convertListHtml(userList)}`
}