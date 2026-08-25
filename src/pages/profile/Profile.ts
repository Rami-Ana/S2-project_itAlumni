import { generateDummyUsers } from "../../mocks/mockUsers";
import { ProfileCard } from "../../components/ProfileCard";
import { User } from "../../models/User";


const mockUserList = generateDummyUsers();

export function renderProfilePage(): string {
    return convertListHtml(mockUserList);
}


export function convertListHtml(userList: User[]): string {
    const userCardsHtml: string[] = [];

    for (const user of userList) {
        const card = new ProfileCard(user);
        userCardsHtml.push(card.render());
    }
    return userCardsHtml.join("<br>");
}
