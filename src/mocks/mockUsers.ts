// *** Formulario simulado en la UI (Simulación manual)

import {User} from "../models/User"

export function generateDummyUsers(): User[] {
    const mockUsers: User[] = [];

    const newUser1 = new User("Ana Cabrera","Barcelona", "available",["Java", "SQL", "Spring Boot"])
    const newUser2 = new User("Judith Gómez","Barcelona", "unavailable",["JavaScript", "React", "CSS"])
    const newUser3 = new User("Ismael Gonzalez","Barcelona", "specific-hours",["Python", "SQL", "Data Analysis"])
    const newUser4 = new User("Ana Sanchez","Barcelona", "specific-hours",["JavaScript", "css", "Angular"])

    mockUsers.push(newUser1, newUser2, newUser3, newUser4);

    return mockUsers;
}


//***** DATOS PLANOS*****/
// export function generateDummyUsers(): User[] {
//     const mockUsers: User[] = [];

//     const newUser1: User = {
//         name: "Ana Cabrera",
//         location: "Barcelona",
//         employmentStatus: "available",
//         skills: ["Java", "SQL", "Spring Boot"]
//     };

//     const newUser2: User = {
//         name: "Judith Gómez",
//         location: "Barcelona",
//         employmentStatus: "unavailable",
//         skills: ["JavaScript", "React", "CSS"]
//     };

//     const newUser3: User = {
//         name: "Ismael Gonzalez",
//         location: "Barcelona",
//         employmentStatus: "specific-hours",
//         skills: ["Python", "SQL", "Data Analysis"]
//     };

//     const newUser4: User = {
//         name: `Ana Sanchez`,
//         location: "Barcelona",
//         employmentStatus: "specific-hours",
//         skills: ["JavaScript", "css", "Angular"]
//     };
//     mockUsers.push(newUser1, newUser2, newUser3, newUser4);

//     return mockUsers;
// }




// export const mockUsers: User[] = [
//     {
//         name: "Ana Cabrera",
//         location: "Barcelona",
//         employmentStatus: "available",
//         skills: ["Java", "SQL", "Spring Boot"]
//     },
//     {
//         name: "Judith Gómez",
//         location: "Barcelona",
//         employmentStatus: "unavailable",
//         skills: ["JavaScript", "React", "CSS"]
//     },
//     {
//         name: "Ismael Gonzalez",
//         location: "Barcelona",
//         employmentStatus: "specific-hours",
//         skills: ["Python", "SQL", "Data Analysis"]
//     },
//     {
//         name: "Ana Sanchez",
//         location: "Barcelona",
//         employmentStatus: "specific-hours",
//         skills: ["JavaScript", "css", "Angular"]
//     }
// ];
