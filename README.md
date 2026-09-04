************* EJEMPLO******************
<!-- //(image.png) -->
ITAlumni

Description
Brief description of your web layout project. Explain what it does, what it's for, and what problem it solves:

# annex-1-projecte-1-briefing:  BRIEFING PROJECTE ITALUMNI

**Barcelona Activa** és l’agència de desenvolupament local de l’Ajuntament de Barcelona. A través d’iniciatives com l’**IT Academy**, ofereix formació intensiva i gratuïta en tecnologies digitals a persones en recerca de noves oportunitats laborals, amb l’objectiu d’impulsar el talent local i reduir la bretxa digital en l’accés a l’ocupació.

L’**IT Academy** s’ha consolidat com un referent en formació tecnològica pràctica i orientada al mercat laboral. Cada any, desenes de persones —moltes sense experiència prèvia en el sector digital— completen la seva formació en desenvolupament web, anàlisi de dades, intel·ligència artificial, Salesforce, AWS, entre d’altres.

El projecte **Exalumni** neix com a resposta a una necessitat detectada dins la pròpia comunitat de graduats: un cop finalitzada la formació, el vincle amb l’IT Academy i entre excompanys/es es dilueix, tot i el gran valor que tindria mantenir activa i connectada aquesta xarxa.

----------------------------------------------------------------------------------------------




<!-- Example: This project is a landing page for a fictional coffee shop. It includes menu sections, gallery, and contact form. -->

## Preview
Project preview




## Project Structure (based on components, pages and models)
/
italumni/
├── index.html    ← raíz del proyecto (Vite aquí)
├── src/
│   ├── main.ts   ← inicializa PageManager y Navbar.
│   │
│   ├── manager/ (PageManager decide qué HU se muestra.)
│   │     └── PageManager.ts (decide pág,limpia DOM, render pág)
│   │
│   ├── css/
│   │    ├── styles.css
│   │    ├── typography.css
│   │    ├── button.css
│   │    ├── home.css 
│   │    ├── header.css
│   │    ├── search.css
│   │    └── nav.css 
│   │
│   ├── pages/ (pág recibe datos + renderiza, separado por funciones HU)  
│   │    ├── Home.ts                ← HU3.1
│   │    ├── MemberSearch.ts        ← HU3.1 (buscar/filtrar) (renombrar networking y acabarla)
│   │    ├── MemberProfile.ts       ← HU3.2  (ver perfil)    (Eliminar, NO LA PIDEN) 
│   │    ├── Jobs.ts                ← HU4.1
│   │    └── Events.ts              ← HU4.2
│   │
│   ├── components/ #tarjeta visual
│   │   ├── mobile/
│   │   │     ├── Footer.ts                   (PENDIENDITE HACER) 
│   │   │     ├── MobileHeader.ts
│   │   │     ├── MobileSearch.ts
│   │   │     ├── MobileNav.ts
│   │   │     └── cards/
│   │   │          ├── MobileHomeCard.ts
│   │   │          ├── MobileProfileCard.ts  (PENDIENDITE HACER) 
│   │   │          └── MobileJobCard.ts      (PENDIENDITE HACER) 
│   │   │               
│   │   ├── Desktop/
│   │   │     ├── DesktopHeader.ts            (PENDIENDITE HACER) 
│   │   │     ├── DesktopSearch.ts            (PENDIENDITE HACER) 
│   │   │     ├── DesktopNav.ts               (PENDIENDITE HACER) 
│   │   │     └── cards/                      (PENDIENDITE HACER) 
│   │   │          ├── DesktopFeatureCard.ts
│   │   │          ├── DesktopProfileCard.ts 
│   │   │          └── DesktopJobCard.ts
│   │   │ 
│   │   ├── Footer.ts                           (PENDIENDITE HACER)         
│   │   ├── ProfileCard #HU3.2. → perfiles      (Eliminar, NO LA PIDEN)
│   │   ├── JobCard  #HU4.1 → ofertas           (PENDIENDITE HACER) 
│   │   └── EventCard #HU5.1 → Eventos          (PENDIENDITE HACER) 
│   │ 
│   ├── models (entidades y lógica: clases de negocio, con métodos)
│   │   ├── User.ts 
│   │   ├── Admin.ts                             (PENDIENDITE HACER) 
│   │   ├── Technician.ts                        (PENDIENDITE HACER) 
│   │   └── Alum.ts                              (PENDIENDITE HACER) 
│   │ 
│   ├── types (interfaces sin lógica) 
│   │   ├── IUser.ts
│   │   ├── IJob.ts                             (PENDIENDITE HACER) 
│   │   └── IEvent.ts                           (PENDIENDITE HACER) 
│   │
│   ├── services/ → lógica de negocio (Filtrar, buscar, ordenar, etc.)
│   │    ├── UserService → filtrar, buscar, ordenar usuarios
│   │    ├── JobService → filtrar ofertas       (PENDIENDITE HACER) 
│   │    ├── EventService → filtrar eventos     (PENDIENDITE HACER) 
│   │    ├── AuthService → login, logout        (PENDIENDITE HACER) 
│   │    └── ApiService → llamadas HTTP         (PENDIENDITE HACER) 
│   │ 
│   ├── mocks
│   │    └── mockUsers.ts/ #(Gestión de datos de prueba)│   
│   │ 
│   ├── assets/
│   │    ├── img/
│   │    ├── font/ 
│   │    └── icons/ 
│   │ 
│   └── utils/ #cualquier función auxiliar reutilizable GENERICA
│        ├── randomId.ts                               (futura implementación)
│        └── validators.ts (validar email,validar pw)  (futura implementación)
│   
├── public/ (favicon o otros?)
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore  (aquí va node_modules/ y dist/)


## Git branch structure in this project is:

/
└── main
    └── develop
            ├── feature/member-search   
            ├── 
            ├── 
            ├── 
            ├── 
            └── 



## Technologies Used
HTML5 - Semantic structure
CSS3 - Styles and responsive design (2 brackepoints)
Mobile-first
GitHub Pages (optional) - Deployment
Installation and Execution: VITE pnpm
typografy?
Prerequisites
A modern web browser (Chrome, Firefox, Edge, Safari)
A code editor (recommended: VS Code)
Git installed (optional but recommended)


## Steps to run the project
Clone the repository (or download the ZIP):
git clone https://github.com/Rami-Ana/S2-project_itAlumni.git


## Navigate to the project folder:
cd your-repository
Open the HTML file in your browser:
Option 1: Double-click on index.html
Option 2: Use Live Server in VS Code (recommended)
Using Live Server in VS Code (recommended)
Install the Live Server extension
Right-click on index.html
Select "Open with Live Server"
Usage


## Customize the project by editing:

index.html - Modify content and structure
src/css/style.css - Change styles and colors
src/assets/ - Add your own images and icons
Contributors
Your Name - Your GitHub
Add other contributors here if any
License
This project is under the MIT License - see the LICENSE file for more details.

