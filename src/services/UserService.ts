import { User } from "../models/User";
import type { Seniority } from "../types/IUser";

export function searchUsers(searchQuery: string, usersList: User[]): User[] {
    const searchResults: User[] = [];
    const targetKeyword = searchQuery.toLowerCase();

    if (usersList.length === 0) return usersList;

    for (const candidate of usersList) {
        const matchName = candidate.name.toLowerCase().includes(targetKeyword);

        const matchSkill = candidate.skills.some(skill => skill.toLowerCase().includes(targetKeyword));

        if (matchName || matchSkill) {searchResults.push(candidate);}
    }
    return searchResults;
}

export function filterByActivity(userList: User[], activity: boolean): User[] {
    if (!activity) { return userList; }
    return userList.filter(user => user.isRecentlyActive);
}

export function filterBySeniority(userList: User[], level: Seniority): User[] {
    return userList.filter(user => user.seniority === level);
}


export function filterByStack(userList: User[], stack: string): User[] {
    return userList.filter(user => user.skills.includes(stack));
}

export function filterByEmploymentStatus(userList: User[], status: boolean): User[] {
    return userList.filter(user => user.employmentStatus === status);
}