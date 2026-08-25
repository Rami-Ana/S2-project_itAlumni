import './css/style.css';
import { generateDummyUsers } from './mocks/mockUsers';
import { renderFullProfilePage } from './pages/Profile';
import { searchUsers } from './services/UserService';

// MAIN:
// cargar datos
// renderizar la página
// escuchar eventos
// volver a renderizar cuando cambie algo


// ******renderProfilePage()***************
const mockUserList = generateDummyUsers();


// Render inicial
document.getElementById("app")!.innerHTML = renderFullProfilePage(mockUserList);

// Evento del buscador
const searchButton = document.getElementById("searchUser")!;
searchButton.addEventListener("click", function () {

    const value = (document.getElementById("nameSearchUser") as HTMLInputElement).value;

    const filteredUsers = searchUsers(value, mockUserList);

    const app = document.getElementById("app")!;
    app.innerHTML = renderFullProfilePage(filteredUsers);


    // Cuando pulses Buscar, quieres:

    // 1. Leer "maria"
    //         ↓
    // 2. Buscar "maria" en la lista
    //         ↓
    // 3. Obtener [María, Maria José]
    //         ↓
    // 4. Convertir esos usuarios en HTML
    //         ↓
    // 5. Mostrar esas cards en pantalla
});

// *************renderJobPage()***************

// *************renderEventPage()***************
