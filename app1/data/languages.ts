import { PythonIcon } from "@/components/icons/PythonIcon";
import { BookOpen, Code, Coffee, Database, FileCode, Terminal } from "lucide-react";

export interface Language {
    id: string;
    name: string;
    icon: any;
    description: string;
    sections: {
        title: string;
        content: string;
    }[];
    youtubeLinks: {
        title: string;
        url: string;
    }[];
    example?: {
        code: string;
    };
    learningModules?: {
        title: string;
        description: string;
        useCase: string;
        examples: {
            title: string;
            description?: string;
            code: string;
            output: string;
            action: 'run' | 'game';
        }[];
    }[];
}

export const languages: Language[] = [
    {
        id: "c",
        name: "C",
        icon: Terminal,
        description: "The mother of all modern programming languages. Powerful, efficient, and close to the metal.",
        sections: [
            { title: "Variables", content: "In C, variables must be declared with a specific type." },
            { title: "Pointers", content: "C allows direct memory manipulation using pointers." },
        ],
        youtubeLinks: [
            { title: "C Programming for Beginners", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
        ],
    },
    {
        id: "cpp",
        name: "C++",
        icon: Code,
        description: "An extension of C with object-oriented features. Used in game development and high-performance systems.",
        sections: [
            { title: "Classes", content: "C++ introduces classes and objects." },
            { title: "STL", content: "The Standard Template Library provides common data structures." },
        ],
        youtubeLinks: [
            { title: "C++ Tutorial for Beginners", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
        ],
    },
    {
        id: "python",
        name: "Learn Python",
        icon: PythonIcon,
        description: "Python is a popular programming language. Python can be used on a server to create web applications.",
        sections: [
            { title: "Lists", content: "Python lists are dynamic arrays." },
            { title: "Loops", content: "For loops in Python iterate over sequences." },
        ],
        example: {
            code: 'print("Hello, World!")'
        },
        learningModules: [
            {
                title: "1. Variables & Types de Données",
                description: "Les variables sont comme des boîtes étiquetées où l'on range des informations. Python devine automatiquement le type de ce que vous y mettez (nombre, texte, etc.).",
                useCase: "Stocker le nom d'un utilisateur, son âge ou le score d'un jeu.",
                examples: [
                    {
                        title: "Créer des variables",
                        code: 'nom = "Alice"\nage = 25\nprint(f"Je m\'appelle {nom} et j\'ai {age} ans.")',
                        output: "Je m'appelle Alice et j'ai 25 ans.",
                        action: 'run'
                    },
                    {
                        title: "Types de données",
                        code: 'prix = 19.99  # Float\nquantite = 3  # Int\nest_disponible = True  # Bool\nprint(type(prix))',
                        output: "<class 'float'>",
                        action: 'run'
                    },
                    {
                        title: "Formatage de texte",
                        description: "Utiliser des f-strings pour formater des messages.",
                        code: 'prenom = "Thomas"\nville = "Paris"\nprint(f"{prenom} habite à {ville}")',
                        output: "Thomas habite à Paris",
                        action: 'run'
                    }
                ]
            },
            {
                title: "2. Les Opérateurs",
                description: "Les outils pour manipuler vos données : additionner, comparer, ou vérifier des conditions.",
                useCase: "Calculer le total d'un panier ou vérifier si un mot de passe est correct.",
                examples: [
                    {
                        title: "Arithmétique",
                        code: 'x = 10\ny = 5\nprint(f"Somme: {x + y}, Produit: {x * y}")',
                        output: "Somme: 15, Produit: 50",
                        action: 'run'
                    },
                    {
                        title: "Comparaison",
                        code: 'score = 100\nprint(score > 50)  # Vrai ou Faux ?',
                        output: "True",
                        action: 'run'
                    },
                    {
                        title: "Vérification simple",
                        description: "Vérifier si une condition est remplie.",
                        code: 'age = 18\nmajeur = age >= 18\nprint(f"Est majeur ? {majeur}")',
                        output: "Est majeur ? True",
                        action: 'run'
                    }
                ]
            },
            {
                title: "3. Structures de Contrôle",
                description: "Dirigez le flux de votre programme. 'Si' ceci arrive, fais cela. 'Tant que' c'est vrai, continue.",
                useCase: "Afficher un message différent selon l'heure de la journée ou répéter une action.",
                examples: [
                    {
                        title: "Conditions (If/Else)",
                        code: 'heure = 14\nif heure < 12:\n    print("Bonjour")\nelse:\n    print("Bon après-midi")',
                        output: "Bon après-midi",
                        action: 'run'
                    },
                    {
                        title: "Boucles (For)",
                        code: 'for i in range(3):\n    print(f"Compteur: {i}")',
                        output: "Compteur: 0\nCompteur: 1\nCompteur: 2",
                        action: 'game'
                    },
                    {
                        title: "Boucle While",
                        description: "Répéter une action tant qu'une condition est vraie.",
                        code: 'compteur = 5\nwhile compteur > 0:\n    print(compteur)\n    compteur -= 1',
                        output: "5\n4\n3\n2\n1",
                        action: 'run'
                    }
                ]
            },
            {
                title: "4. Structures de Données",
                description: "Organisez vos données efficacement avec des listes (ordonnées) ou des dictionnaires (clé-valeur).",
                useCase: "Une liste de courses ou un carnet d'adresses.",
                examples: [
                    {
                        title: "Listes",
                        code: 'fruits = ["Pomme", "Banane", "Cerise"]\nprint(fruits[0])',
                        output: "Pomme",
                        action: 'run'
                    },
                    {
                        title: "Dictionnaires",
                        code: 'user = {"nom": "Bob", "role": "Admin"}\nprint(user["role"])',
                        output: "Admin",
                        action: 'run'
                    },
                    {
                        title: "Manipulation de Liste",
                        description: "Ajouter des éléments à une liste.",
                        code: 'couleurs = ["Rouge", "Vert"]\ncouleurs.append("Bleu")\nprint(couleurs)',
                        output: "['Rouge', 'Vert', 'Bleu']",
                        action: 'run'
                    }
                ]
            },
            {
                title: "5. Fonctions",
                description: "Des blocs de code réutilisables. Au lieu de réécrire le même code, donnez-lui un nom et appelez-le.",
                useCase: "Une fonction pour calculer la TVA ou envoyer un email.",
                examples: [
                    {
                        title: "Définir une fonction",
                        code: 'def saluer(nom):\n    return f"Salut {nom}!"\n\nprint(saluer("Maria"))',
                        output: "Salut Maria!",
                        action: 'run'
                    },
                    {
                        title: "Paramètres",
                        code: 'def carre(x):\n    return x * x\n\nprint(carre(5))',
                        output: "25",
                        action: 'run'
                    },
                    {
                        title: "Fonction de calcul",
                        description: "Une fonction simple pour additionner deux nombres.",
                        code: 'def addition(a, b):\n    return a + b\n\nprint(addition(5, 3))',
                        output: "8",
                        action: 'run'
                    }
                ]
            }
        ],
        youtubeLinks: [
            { title: "Python for Beginners", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        ],
    },
    {
        id: "java",
        name: "Java",
        icon: Coffee,
        description: "Write once, run anywhere. A robust, object-oriented language used in enterprise applications.",
        sections: [
            { title: "JVM", content: "Java runs on the Java Virtual Machine." },
            { title: "OOP", content: "Everything in Java is an object." },
        ],
        youtubeLinks: [
            { title: "Java Tutorial for Beginners", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
        ],
    },
    {
        id: "javascript",
        name: "JavaScript",
        icon: BookOpen,
        description: "The language of the web. Runs in the browser and on the server (Node.js).",
        sections: [
            { title: "DOM", content: "JavaScript can manipulate the Document Object Model." },
            { title: "Async", content: "Promises and async/await handle asynchronous operations." },
        ],
        youtubeLinks: [
            { title: "JavaScript Tutorial for Beginners", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
        ],
    },
    {
        id: "go",
        name: "Go",
        icon: Database,
        description: "A statically typed, compiled language designed at Google. Known for simplicity and concurrency.",
        sections: [
            { title: "Goroutines", content: "Lightweight threads managed by the Go runtime." },
            { title: "Channels", content: "Channels allow goroutines to communicate." },
        ],
        youtubeLinks: [
            { title: "Go Programming - Golang Course", url: "https://www.youtube.com/watch?v=YS4e4q9oBaU" },
        ],
    },
];
