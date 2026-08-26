// src/main.ts RESPONSABILIDADES:
// main.ts ahora solo:
// importa estilos
// crea el manager
// pinta el navbar
// carga la página inicial


import "./css/style.css";
import { PageManager } from "./manager/PageManager";
import { renderNavbar } from "./components/navbar/navbar-mobile";

const manager = new PageManager("app");

// navbar aún sin navegación, solo se pinta
renderNavbar();

// cargamos la página inicial (member-search)
manager.load("member-search");


// import { renderNavbar } from "./components/navbar/navbar-mobile";

// renderNavbar();



// //**********PENDIENTE ORDENAR ESTO A MANAGER**********/
// import './css/style.css';
// import { generateDummyUsers } from './mocks/mockUsers';
// import { renderFullProfilePage } from './pages/Profile';
// import {
//     searchUsers,
//     filterByActivity,
//     filterBySeniority,
//     filterByStack,
//     filterByEmploymentStatus
// } from './services/UserService';
// import type { EmploymentStatus, Seniority } from './types/IUser';

// // MAIN:
// // cargar datos
// // renderizar la página
// // escuchar eventos
// // volver a renderizar cuando cambie algo


// // ******renderProfilePage()***************
// const mockUserList = generateDummyUsers();
// const app = document.getElementById("app")!;


// // -------Render inicial---------
// app.innerHTML = renderFullProfilePage(mockUserList);


// // Un único listener, enganchado a #app (nunca se destruye)
// app.addEventListener("click", function (event) {
// const target = event.target as HTMLElement;

//     if (target.id === "searchUser") {handleSearch();}

//     if (target.id === "applyFilter") {handleFilter();}
// });

// function handleSearch(): void {
//     const value = (document.getElementById("nameSearchUser") as HTMLInputElement).value;
//     const filteredUsers = searchUsers(value, mockUserList);
//     app.innerHTML = renderFullProfilePage(filteredUsers);
// }

// function handleFilter(): void {
//     let result = mockUserList;

//     const level = (document.getElementById("levelOption") as HTMLSelectElement).value;
//     if (level !== "") {
//         result = filterBySeniority(result, level as Seniority);
//     }

//     const stack = (document.getElementById("stack") as HTMLInputElement).value;
//     if (stack !== "") {
//         result = filterByStack(result, stack);
//     }

//     const employment = (document.getElementById("employmentOption") as HTMLSelectElement).value;
//     if (employment !== "") {
//         result = filterByEmploymentStatus(result, employment as EmploymentStatus);
//     }

//     const onlyActive = (document.getElementById("activityOption") as HTMLInputElement).checked;
//     result = filterByActivity(result, onlyActive);

//     app.innerHTML = renderFullProfilePage(result);
// }


// // *************renderJobPage()***************

// // *************renderEventPage()***************
