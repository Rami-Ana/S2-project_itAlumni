import {User} from "../models/User"

export function generateDummyUsers(): User[] {
    const mockUsers: User[] = [];

    const newUser1 = new User("Ana Cabrera","Barcelona", "available",["Java", "SQL", "Spring Boot"],"junior", false);
    const newUser2 = new User("Judith Gómez","Barcelona", "unavailable",["JavaScript", "React", "CSS"],"junior", false);
    const newUser3 = new User("Ismael Gonzalez","Barcelona", "specific-hours",["Python", "SQL", "Data Analysis"],"senior", true);
    const newUser4 = new User("Ana Sanchez","Barcelona", "specific-hours",["JavaScript", "css", "Angular"],"mid", true);

    mockUsers.push(newUser1, newUser2, newUser3, newUser4);

    return mockUsers;
}