import './css/styles.css';
import './css/typography.css';
import './css/buttons.css';
import './css/home.css';
import './css/networking.css';
import './components/mobile/cards/mobileHomeCard.css';
import './components/mobile/cards/mobileNetworkingCard.css';
import './components/mobile/mobileSearch.css';
import './components/mobile/mobileHeader.css';
import './components/desktop/cards/desktopHomeCard.css';
import './components/desktop/cards/testimonialCard.css';
import './components/carouselNav.css';
import './components/desktop/footer.css';
import './components/desktop/navbar/desktopNavbar.css';
import './components/mobile/navbar/mobileNavbar.css';
import './components/desktop/cards/desktopNetworkingCard.css';
import './components/desktop/networkingFilter/desktopNetworkingFilter.css';
import './components/desktop/search/desktopSearch.css';
import './components/desktop/networkingHeader/desktopNetworkingHeader.css'; 
import './components/mobile/form/mobileForm.css';


import { PageManager } from './manager/PageManager';

new PageManager("#app"); //#: sintaxis CSS, si buscara sin id bucaria una etiqueta <app>.


// if(window.innerWidth < 768 ){
// manager.loadPage("welcome"); //invocamos metodo de PageManager y pasamos parametro
// }else{manager.loadPage("home");}
