************* EJEMPLO******************
<!-- //(image.png) -->
ITAlumni

## Links
FIGMA -> https://www.figma.com/design/P7LLJhWnouuf35MCrmYs2p/Dev?node-id=214-2474&t=088SOyHGDchAhNGh-1
TRELLO -> https://trello.com/invite/b/6a7ae03d6ea3a3c0e1050345/ATTIc8a235ff6536e44f0c85d89c25b96160D43B3596/s2-projecte-01-it-alumni
GITHUB -> https://github.com/Rami-Ana/S2-project_itAlumni

Description
Brief description of your web layout project. Explain what it does, what it's for, and what problem it solves:

# annex-1-projecte-1-briefing:  BRIEFING PROJECTE ITALUMNI

*Barcelona Activa* is the local development agency of the Barcelona City Council. Through initiatives such as the*IT Academy*, it offers free and intensive training in digital technologies to people in search of new job opportunities, with the aim of promoting local talent and reducing the digital divide in access to employment.

The*IT Academy* has established itself as a benchmark in practical and labour market-oriented technological training. Every year, dozens of people —many without previous experience in the digital sector— complete their training in web development, data analysis, artificial intelligence, Salesforce, AWS, among others.

The *Exalumni** project was born in response to a need detected within the community of graduates: once the training is over, the link with the IT Academy and between ex-partners is diluted, despite the great value that would have to keep this network active and connected.
----------------------------------------------------------------------------------------------


## Preview
Project preview PDT



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
│   │    ├── networking.ts          ← HU3.1 (buscar/filtrar)
│   │    ├── MemberProfile.ts       ← HU3.2  (ver perfil)    (no VPM) 
│   │    ├── Jobs.ts                ← HU4.1
│   │    └── Events.ts              ← HU5.1
│   │
│   ├── components/ #tarjeta visual
│   │   ├── mobile/
│   │   │     ├── Footer.ts                   (no VPM) 
│   │   │     ├── MobileHeader.ts
│   │   │     ├── mobileHeader.css
│   │   │     ├── MobileSearch.ts
│   │   │     ├── mobileSearch.css
│   │   │     ├── form/                       
│   │   │     │    ├── mobileForm.css
│   │   │     │    └── MobileForm.ts
│   │   │     ├── navbar/                       
│   │   │     │    ├── mobileNavbar.css
│   │   │     │    └── MobileNavbar.ts
│   │   │     └── cards/
│   │   │          ├── MobileHomeCard.ts
│   │   │          ├── MobileHomeCard.css   
│   │   │          ├── MobileProfileCard.ts   
│   │   │          └── MobileProfileCard.css        
│   │   │               
│   │   ├── Desktop/
│   │   │     ├── footer.css             
│   │   │     ├── Footer.ts              
│   │   │     ├── networkingFilter/                       
│   │   │     │    ├── DesktopNetworkingFilter.ts
│   │   │     │    └── desktopNetworkingFilterr.css 
│   │   │     ├── networkingHeader/                       
│   │   │     │    ├── DesktopNetworkingHeader.ts
│   │   │     │    └── desktopNetworkingHeader.css 
│   │   │     ├── search/                       
│   │   │     │    ├── DesktopSearch.ts
│   │   │     │    └── desktopSearch.css   
│   │   │     ├── navbar/                       
│   │   │     │    ├── desktopNavbar.css
│   │   │     │    └── DesktopNavbar.ts                 
│   │   │     └── cards/                       
│   │   │          ├── DesktopHomeCard.ts
│   │   │          ├── desktopHomeCard.css 
│   │   │          ├── DesktopNetworkingCard.ts
│   │   │          ├── desktopNetworkingeCard.css 
│   │   │          ├── TestimonialCard.ts
│   │   │          └── testimonialCard.ts
│   │   │ 
│   │   ├── carrouselNav.css        
│   │   ├── CarrouselNav.ts       
│   │   └── ProfileCard.ts (NO VPM)              
│   │ 
│   ├── models (entidades y lógica: clases de negocio, con métodos)
│   │   ├── User.ts 
│   │   ├── Admin.ts                             (no VPM) 
│   │   ├── Technician.ts                        (no VPM)  
│   │   └── Alum.ts                              (no VPM)  
│   │ 
│   ├── types (interfaces sin lógica) 
│   │   ├── IUser.ts
│   │   ├── INavLink.ts
│   │   ├── INetworkingFilters.ts
│   │   ├── ITestimonial.ts                              
│   │   ├── IJob.ts                                (PDT)                           
│   │   ├── IEvent.ts                              (PDT)                         
│   │   └── INetworkingFilters.ts                  (PDT)                        
│   │   
│   ├── services/ → lógica de negocio (Filtrar, buscar, ordenar, etc.)
│   │    ├── UserService → filtrar, buscar, ordenar usuarios
│   │    ├── JobService → filtrar ofertas      (PDT) 
│   │    ├── EventService → filtrar eventos    (PDT) 
│   │    ├── AuthService → login, logout       (PDT) 
│   │    └── ApiService → llamadas HTTP        (PDT)    
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
│        ├── viewport.ts                               (futura implementación)
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

