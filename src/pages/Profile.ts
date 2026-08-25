import { ProfileCard } from '../components/ProfileCard';
import { User } from '../models/User';

export function renderSearchBar(): string {
    return `
    <label for="nameSearchUser">Buscar:</label>
    <input type ="text" id="nameSearchUser" placeholder="Escribe el nombre">
    <input type ="button" id="searchUser" class="cta-style" value="Buscar">
`;
}


export function convertListHtml(userList: User[]): string {
    // const userCardsHtml: string[] = [];
    let userCardsHtml = '<ul class="user-list">';


    for (const user of userList) {
        const card = new ProfileCard(user).render();
        userCardsHtml += `<li class="user-list__item">${card}</li>`;
    }
    userCardsHtml += '</ul>';
    return userCardsHtml;
}


export function renderFullProfilePage(userList: User[]): string {
    return `${renderSearchBar()} ${convertListHtml(userList)}`
}