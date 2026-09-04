import './css/styles.css';
import './css/typography.css';
import './css/buttons.css';
import './css/home.css';
import './css/header.css';
import './css/search.css';
// import './css/nav.css';


import { PageManager } from './manager/PageManager';

const manager = new PageManager("#app"); //#: sintaxis CSS, si buscara sin id bucaria una etiqueta <app>.

if(window.innerWidth < 768 ){
manager.loadPage("welcome"); //invocamos metodo de PageManager y pasamos parametro
}else{manager.loadPage("home");}






//luego usarenos manager porque esto solo recarga cada vez que cargamos navegador
// if (window.innerWidth < 768) {
//   app!.innerHTML = renderMobileHome();
// } 
// else {
//   app!.innerHTML = renderHomeDesktop();
// }



// manager.load("home");


// if (window.innerWidth < 768) {
//   renderWelcomeMobile();
// } else {
//   renderHomeDesktop();
// }




// const manager = new PageManager("app");

// renderNavbar(); // navbar aún sin navegación, solo se pinta

// manager.load("member-search");// cargamos la página inicial (member-search)


// import { renderNavbar } from "./components/navbar/navbar-mobile";

// renderNavbar();


// // *************renderJobPage()***************

// // *************renderEventPage()***************



