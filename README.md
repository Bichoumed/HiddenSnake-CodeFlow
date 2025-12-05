# DevLearn - Plateforme d'Apprentissage Interactive

Description du Projet

DevLearn est une idée de plateforme web statique destinée à présenter les langages de programmation de manière simple et ludique.
Le site sert principalement de vitrine avec des contenus et modules fictifs, mais il intègre une fonctionnalité cachée : un jeu Snake interactif, activable via une méthode secrète.
Cette approche permet d’allier exploration pédagogique et surprise ludique pour l’utilisateur, tout en gardant le site simple et statique.

Le lien :https://hidden-snake-code-flow-ne26.vercel.app

---


## Structure du Projet



```text
app1/
├── app/                        # Dossier principal Next.js (App Router)
│   ├── [lang]/                 # Routes dynamiques pour chaque langage
│   │   └── page.tsx            # Page de détail d'un langage
│   ├── layout.tsx              # Layout principal de l'application
│   ├── page.tsx                # Page d'accueil (redirection)
│   └── globals.css             # Styles CSS globaux
│
├── components/                 # Composants React réutilisables
│   ├── Layout/                 # Composants de mise en page
│   │   ├── Sidebar.tsx         # Barre latérale de navigation (responsive)
│   │   ├── Navbar.tsx          # Barre de navigation supérieure
│   │   └── GameWrapper.tsx     # Wrapper pour le jeu Snake
│   ├── SnakeGame/              # Composant du jeu Snake
│   │   └── SnakeGame.tsx       # Logique et rendu du jeu
│   └── icons/                  # Icônes personnalisées pour chaque langage
│       ├── CIcon.tsx           # Icône C
│       ├── CppIcon.tsx         # Icône C++
│       ├── PythonIcon.tsx      # Icône Python
│       ├── JavaIcon.tsx        # Icône Java
│       ├── JsIcon.tsx          # Icône JavaScript
│       └── GoIcon.tsx          # Icône Go
│
├── context/                    # Contextes React (gestion d'état global)
│   ├── GameContext.tsx         # État du jeu Snake
│   └── SidebarContext.tsx      # État de la sidebar (mobile/desktop)
│
├── data/                       # Données de l'application
│   └── languages.ts            # Contenu des cours pour chaque langage
│
├── lib/                        # Utilitaires
│   └── utils.ts                # Fonctions helper (cn pour classes CSS)
│
├── public/                     # Fichiers statiques publics
│   ├── file.svg                # Icônes SVG
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── package.json                # Dépendances du projet
├── tsconfig.json               # Configuration TypeScript
├── tailwind.config.js          # Configuration Tailwind CSS
├── next.config.ts              # Configuration Next.js
└── README.md                   # Documentation du projet


---


##  Fonctionnalités Principales

###  Modules d'Apprentissage Structurés
Chaque langage inclut 5 modules couvrant :
1.  Variables & Types de Données 
2.  Opérateurs 
3.  Structures de Contrôle  (if, while, for)
4.  Structures de Données  (tableaux, dictionnaires, classes)
5.  Fonctions 

<!-- Comment trouver le jeu snake -->
###  Jeu Snake Intégré Dans La langage python 
- Déclenchement du jeu via un exemple de code dans le module "Structures de Contrôle" exactement dans deuxieme exemple 
- Expérience de gamification pour rendre l'apprentissage ludique



 Repository GitHub :  Bichoumed/HiddenSnake-CodeFlow





