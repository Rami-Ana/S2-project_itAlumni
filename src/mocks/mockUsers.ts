import {User} from "../models/User"

export function generateDummyUsers(): User[] {
    const mockUsers: User[] = [];

    const newUser1 = new User("Jhon Doe",2010, "CEO at TechSolutions Inc.", "Barcelona", "available",["Java", "SQL", "Spring Boot"],"junior", false);
    const newUser2 = new User("Sarah Johonson", 2015, "Marketing DIrector at GreenWave", "UUEE", "unavailable",["JavaScript", "React", "CSS"],"junior", false);
    const newUser3 = new User("Michael Broen", 2008, "Founder of EduLearn Academy", "Barcelona", "specific-hours",["Python", "SQL", "Data Analysis"],"senior", true);
    const newUser4 = new User("Emily Davis", 2012, "Research Scientist at BioTech Labs", "Perú", "specific-hours",["JavaScript", "css", "Angular"],"mid", true);
    const newUser5 = new User("James Lee", 2015, "Managing Partner at Lee & Associates", "China", "specific-hours",["JavaScript", "css", "Angular"],"mid", true);

    mockUsers.push(newUser1, newUser2, newUser3, newUser4, newUser5);

    return mockUsers;
}

