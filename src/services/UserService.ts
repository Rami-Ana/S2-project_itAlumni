import { User } from "../../models/User";

export function searchUsers(searchQuery: string, usersList: User[]): User[] {
    const searchResults: User[] = [];
    const targetKeyword = searchQuery.toLowerCase();

    if (usersList.length === 0) return usersList;

    for (const candidate of usersList) {
        const matchName = candidate.name.toLowerCase().includes(targetKeyword);

        const matchSkill = candidate.skills.some(skill => skill.toLowerCase().includes(targetKeyword));

        if (matchName || matchSkill) {
            searchResults.push(candidate); 
        }
    }
    return searchResults;
}
