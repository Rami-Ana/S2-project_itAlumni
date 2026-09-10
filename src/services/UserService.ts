import { User } from "../models/User";
import type { Seniority } from "../types/IUser";
import type { NetworkingFilters } from "../types/INetworkingFilters";

//========== SEARCH: nombre o skill ==============

export function searchUsers(searchQuery: string, usersList: User[]): User[] {
    const searchResults: User[] = [];
    const targetKeyword = searchQuery.toLowerCase();

    if (usersList.length === 0) return usersList;

    for (const candidate of usersList) {
        const matchName = candidate.name.toLowerCase().includes(targetKeyword);

        const matchSkill = candidate.skills.some(skill => skill.toLowerCase().includes(targetKeyword));

        if (matchName || matchSkill) { searchResults.push(candidate); }
    }
    return searchResults;
}
//========== FILTROS RESULTADOS BUSQUEDA ==============

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

//========== FILTROS RESULTADOS BUSQUEDA==============

export function applyFilters(usersList: User[], filters: NetworkingFilters): User[] {
    let result = searchUsers(filters.query, usersList);

    if (filters.level !== "") {
        result = filterBySeniority(result, filters.level);
    }
    if (filters.onlyActive) {
        result = filterByActivity(result, true);
    }
    if (filters.onlyAvailable) {
        result = filterByEmploymentStatus(result, true);
    }
    return result;
}