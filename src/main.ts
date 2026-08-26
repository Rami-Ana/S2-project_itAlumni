import './css/style.css';
import { generateDummyUsers } from './mocks/mockUsers';
import { renderFullProfilePage } from './pages/Profile';
import {
    searchUsers,
    filterByActivity,
    filterBySeniority,
    filterByStack,
    filterByEmploymentStatus
} from './services/UserService';
import type { EmploymentStatus, Seniority } from './types/IUser';

// MAIN:
// cargar datos
// renderizar la página
// escuchar eventos
// volver a renderizar cuando cambie algo


// ******renderProfilePage()***************
const mockUserList = generateDummyUsers();

// -------Render inicial---------
document.getElementById("app")!.innerHTML = renderFullProfilePage(mockUserList);


// ---------Evento del buscador---------

const searchButton = document.getElementById("searchUser")!;
searchButton.addEventListener("click", function () {

    const value = (document.getElementById("nameSearchUser") as HTMLInputElement).value;

    const filteredUsers = searchUsers(value, mockUserList);
 
    const app = document.getElementById("app")!;
    app.innerHTML = renderFullProfilePage(filteredUsers);
});

// Evento de filtros (actúan sobre la lista completa, no sobre la búsqueda)
const applyFilterButton = document.getElementById("applyFilter")!;
applyFilterButton.addEventListener("click", function () {
    let result = mockUserList;

    const level = (document.getElementById("levelOption") as HTMLSelectElement).value;
    if (level !== "") {
        result = filterBySeniority(result, level as Seniority);
    }

    const stack = (document.getElementById("stack") as HTMLInputElement).value;
    if (stack !== "") {
        result = filterByStack(result, stack);
    }

    const employment = (document.getElementById("employmentOption") as HTMLSelectElement).value;
    if (employment !== "") {
        result = filterByEmploymentStatus(result, employment as EmploymentStatus);
    }

    const onlyActive = (document.getElementById("activityOption") as HTMLInputElement).checked;
    result = filterByActivity(result, onlyActive);

    const app = document.getElementById("app")!;
    app.innerHTML = renderFullProfilePage(result);
});


// *************renderJobPage()***************

// *************renderEventPage()***************
