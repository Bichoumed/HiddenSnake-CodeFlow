import { PythonIcon } from "@/components/icons/PythonIcon";
import { CIcon } from "@/components/icons/CIcon";
import { CppIcon } from "@/components/icons/CppIcon";
import { JavaIcon } from "@/components/icons/JavaIcon";
import { JsIcon } from "@/components/icons/JsIcon";
import { GoIcon } from "@/components/icons/GoIcon";

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
        name: "Learn C",
        icon: CIcon,
        description: "The mother of all modern programming languages. Powerful, efficient, and close to the metal.",
        sections: [
            { title: "Variables", content: "In C, variables must be declared with a specific type." },
            { title: "Pointers", content: "C allows direct memory manipulation using pointers." },
        ],
        youtubeLinks: [
            { title: "C Programming for Beginners", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
        ],
        learningModules: [
            {
                title: "1. Variables & Types de Données",
                description: "Les variables sont des espaces mémoire nommés pour stocker des données. En C, vous devez déclarer le type explicitement.",
                examples: [
                    {
                        title: "Créer des variables",
                        code: '#include <stdio.h>\n\nint main() {\n    char nom[] = "Alice";\n    int age = 25;\n    printf("Je m\'appelle %s et j\'ai %d ans.\\n", nom, age);\n    return 0;\n}',
                        output: "Je m'appelle Alice et j'ai 25 ans.",
                        action: 'run'
                    },
                    {
                        title: "Types de données",
                        code: 'float prix = 19.99;    // Décimal\nint quantite = 3;      // Entier\nchar lettre = \'A\';     // Caractère\nprintf("Type float: %f\\n", prix);',
                        output: "Type float: 19.990000",
                        action: 'run'
                    },
                    {
                        title: "Défi Interactif",
                        description: "Créez un compteur de score !",
                        code: 'int score = 0;\nchar player_name[] = "Snake";\nprintf("Player: %s, Score: %d\\n", player_name, score);',
                        output: "Player: Snake, Score: 0",
                        action: 'run'
                    }
                ]
            },
            {
                title: "2. Les Opérateurs",
                description: "Outils pour effectuer des calculs, comparer des valeurs ou combiner des conditions.",
                examples: [
                    {
                        title: "Arithmétique",
                        code: 'int x = 10;\nint y = 5;\nprintf("Somme: %d, Produit: %d\\n", x + y, x * y);',
                        output: "Somme: 15, Produit: 50",
                        action: 'run'
                    },
                    {
                        title: "Comparaison",
                        code: 'int score = 100;\nif(score > 50) {\n    printf("Bravo!\\n");\n}',
                        output: "Bravo!",
                        action: 'run'
                    },
                    {
                        title: "Logique en Jeu",
                        code: 'if(food_eaten && game_active) {\n    score += 10;\n    length++;\n}',
                        output: "Code logic example (requires context)",
                        action: 'run'
                    }
                ]
            },
            {
                title: "3. Structures de Contrôle",
                description: "Contrôlez le flux d'exécution avec des conditions et des boucles.",
                examples: [
                    {
                        title: "Conditions (If/Else)",
                        code: 'int heure = 14;\nif(heure < 12) {\n    printf("Bonjour\\n");\n} else {\n    printf("Bon après-midi\\n");\n}',
                        output: "Bon après-midi",
                        action: 'run'
                    },
                    {
                        title: "Boucles (For)",
                        code: 'for(int i = 0; i < 3; i++) {\n    printf("Compteur: %d\\n", i);\n}',
                        output: "Compteur: 0\nCompteur: 1\nCompteur: 2",
                        action: 'run'
                    },
                    {
                        title: "Boucle de Jeu",
                        code: 'while(game_active) {\n    move_snake();\n    check_collisions();\n}',
                        output: "Game loop example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "4. Structures de Données",
                description: "Organisez vos données avec des tableaux et des structures.",
                examples: [
                    {
                        title: "Tableaux",
                        code: 'int nombres[3] = {10, 20, 30};\nprintf("%d\\n", nombres[0]);',
                        output: "10",
                        action: 'run'
                    },
                    {
                        title: "Structures",
                        code: 'struct User {\n    char nom[50];\n    char role[20];\n};\n\nstruct User user = {"Bob", "Admin"};\nprintf("%s\\n", user.role);',
                        output: "Admin",
                        action: 'run'
                    },
                    {
                        title: "Corps du Serpent",
                        code: 'typedef struct {\n    int x, y;\n} Point;\n\nPoint snake_body[100];\nsnake_body[0] = (Point){10, 10};',
                        output: "Structure definition example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "5. Fonctions",
                description: "Blocs de code réutilisables pour éviter la répétition.",
                examples: [
                    {
                        title: "Définir une fonction",
                        code: 'void saluer(char* nom) {\n    printf("Salut %s!\\n", nom);\n}\n\nint main() {\n    saluer("Maria");\n    return 0;\n}',
                        output: "Salut Maria!",
                        action: 'run'
                    },
                    {
                        title: "Fonction avec retour",
                        code: 'int carre(int x) {\n    return x * x;\n}\n\nprintf("%d\\n", carre(5));',
                        output: "25",
                        action: 'run'
                    },
                    {
                        title: "Fonction Game Over",
                        code: 'void game_over() {\n    printf("Game Over!\\n");\n    reset_game();\n}',
                        output: "Game Over!",
                        action: 'run'
                    }
                ]
            }
        ]
    },
    {
        id: "cpp",
        name: "Learn C++",
        icon: CppIcon,
        description: "An extension of C with object-oriented features. Used in game development and high-performance systems.",
        sections: [
            { title: "Classes", content: "C++ introduces classes and objects." },
            { title: "STL", content: "The Standard Template Library provides common data structures." },
        ],
        youtubeLinks: [
            { title: "C++ Tutorial for Beginners", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
        ],
        learningModules: [
            {
                title: "1. Variables & Types de Données",
                description: "Comme en C, mais avec des types plus puissants comme string.",
                examples: [
                    {
                        title: "Créer des variables",
                        code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nom = "Alice";\n    int age = 25;\n    cout << "Je m\'appelle " << nom << " et j\'ai " << age << " ans." << endl;\n    return 0;\n}',
                        output: "Je m'appelle Alice et j'ai 25 ans.",
                        action: 'run'
                    },
                    {
                        title: "Types de données",
                        code: 'float prix = 19.99;\nint quantite = 3;\nbool disponible = true;\ncout << "Prix: " << prix << endl;',
                        output: "Prix: 19.99",
                        action: 'run'
                    },
                    {
                        title: "Défi Interactif",
                        code: 'int score = 0;\nstring player_name = "Snake";\ncout << "Player: " << player_name << ", Score: " << score << endl;',
                        output: "Player: Snake, Score: 0",
                        action: 'run'
                    }
                ]
            },
            {
                title: "2. Les Opérateurs",
                description: "Identiques au C avec plus de fonctionnalités (surcharge d'opérateurs).",
                examples: [
                    {
                        title: "Arithmétique",
                        code: 'int x = 10, y = 5;\ncout << "Somme: " << (x + y) << ", Produit: " << (x * y) << endl;',
                        output: "Somme: 15, Produit: 50",
                        action: 'run'
                    },
                    {
                        title: "Comparaison",
                        code: 'int score = 100;\ncout << (score > 50 ? "Bravo!" : "Essaie encore") << endl;',
                        output: "Bravo!",
                        action: 'run'
                    },
                    {
                        title: "Logique",
                        code: 'if(food_eaten && game_active) {\n    score += 10;\n}',
                        output: "Logic example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "3. Structures de Contrôle",
                description: "Conditions et boucles pour contrôler le programme.",
                examples: [
                    {
                        title: "Conditions",
                        code: 'int heure = 14;\nif(heure < 12) {\n    cout << "Bonjour" << endl;\n} else {\n    cout << "Bon après-midi" << endl;\n}',
                        output: "Bon après-midi",
                        action: 'run'
                    },
                    {
                        title: "Boucles",
                        code: 'for(int i = 0; i < 3; i++) {\n    cout << "Compteur: " << i << endl;\n}',
                        output: "Compteur: 0\nCompteur: 1\nCompteur: 2",
                        action: 'run'
                    },
                    {
                        title: "Boucle While",
                        code: 'while(game_active) {\n    move_snake();\n    check_collisions();\n}',
                        output: "While loop example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "4. Structures de Données",
                description: "Utilisez vector, map et classes personnalisées.",
                examples: [
                    {
                        title: "Vector (tableau dynamique)",
                        code: '#include <vector>\n\nvector<int> nombres = {10, 20, 30};\ncout << nombres[0] << endl;',
                        output: "10",
                        action: 'run'
                    },
                    {
                        title: "Map (dictionnaire)",
                        code: '#include <map>\n\nmap<string, string> user;\nuser["nom"] = "Bob";\nuser["role"] = "Admin";\ncout << user["role"] << endl;',
                        output: "Admin",
                        action: 'run'
                    },
                    {
                        title: "Classes",
                        code: 'class Point {\npublic:\n    int x, y;\n};\n\nvector<Point> snake_body;\nsnake_body.push_back({10, 10});',
                        output: "Class example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "5. Fonctions",
                description: "Fonctions classiques + méthodes dans les classes.",
                examples: [
                    {
                        title: "Fonction simple",
                        code: 'void saluer(string nom) {\n    cout << "Salut " << nom << "!" << endl;\n}\n\nint main() {\n    saluer("Maria");\n}',
                        output: "Salut Maria!",
                        action: 'run'
                    },
                    {
                        title: "Fonction avec retour",
                        code: 'int carre(int x) {\n    return x * x;\n}\n\ncout << carre(5) << endl;',
                        output: "25",
                        action: 'run'
                    },
                    {
                        title: "Méthode de classe",
                        code: 'class Game {\npublic:\n    void game_over() {\n        cout << "Game Over!" << endl;\n    }\n};',
                        output: "Method example",
                        action: 'run'
                    }
                ]
            }
        ]
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
        name: "Learn Java",
        icon: JavaIcon,
        description: "Write once, run anywhere. A robust, object-oriented language used in enterprise applications.",
        sections: [
            { title: "JVM", content: "Java runs on the Java Virtual Machine." },
            { title: "OOP", content: "Everything in Java is an object." },
        ],
        youtubeLinks: [
            { title: "Java Tutorial for Beginners", url: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
        ],
        learningModules: [
            {
                title: "1. Variables & Types de Données",
                description: "Java est fortement typé. Chaque variable doit avoir un type déclaré.",
                examples: [
                    {
                        title: "Créer des variables",
                        code: 'public class Main {\n    public static void main(String[] args) {\n        String nom = "Alice";\n        int age = 25;\n        System.out.println("Je m\'appelle " + nom + " et j\'ai " + age + " ans.");\n    }\n}',
                        output: "Je m'appelle Alice et j'ai 25 ans.",
                        action: 'run'
                    },
                    {
                        title: "Types de données",
                        code: 'float prix = 19.99f;\nint quantite = 3;\nboolean disponible = true;\nSystem.out.println("Prix: " + prix);',
                        output: "Prix: 19.99",
                        action: 'run'
                    },
                    {
                        title: "Défi Interactif",
                        code: 'int score = 0;\nString playerName = "Snake";\nSystem.out.println("Player: " + playerName + ", Score: " + score);',
                        output: "Player: Snake, Score: 0",
                        action: 'run'
                    }
                ]
            },
            {
                title: "2. Les Opérateurs",
                description: "Opérateurs arithmétiques, logiques et de comparaison.",
                examples: [
                    {
                        title: "Arithmétique",
                        code: 'int x = 10, y = 5;\nSystem.out.println("Somme: " + (x + y) + ", Produit: " + (x * y));',
                        output: "Somme: 15, Produit: 50",
                        action: 'run'
                    },
                    {
                        title: "Comparaison",
                        code: 'int score = 100;\nSystem.out.println(score > 50);',
                        output: "true",
                        action: 'run'
                    },
                    {
                        title: "Logique",
                        code: 'if(foodEaten && gameActive) {\n    score += 10;\n}',
                        output: "Logic example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "3. Structures de Contrôle",
                description: "Contrôle du flux avec if, switch, for, while.",
                examples: [
                    {
                        title: "Conditions",
                        code: 'int heure = 14;\nif(heure < 12) {\n    System.out.println("Bonjour");\n} else {\n    System.out.println("Bon après-midi");\n}',
                        output: "Bon après-midi",
                        action: 'run'
                    },
                    {
                        title: "Boucles",
                        code: 'for(int i = 0; i < 3; i++) {\n    System.out.println("Compteur: " + i);\n}',
                        output: "Compteur: 0\nCompteur: 1\nCompteur: 2",
                        action: 'run'
                    },
                    {
                        title: "Boucle While",
                        code: 'while(gameActive) {\n    moveSnake();\n    checkCollisions();\n}',
                        output: "While loop example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "4. Structures de Données",
                description: "ArrayList, HashMap et classes personnalisées.",
                examples: [
                    {
                        title: "ArrayList",
                        code: 'import java.util.ArrayList;\n\nArrayList<Integer> nombres = new ArrayList<>();\nnombres.add(10);\nnombres.add(20);\nSystem.out.println(nombres.get(0));',
                        output: "10",
                        action: 'run'
                    },
                    {
                        title: "HashMap",
                        code: 'import java.util.HashMap;\n\nHashMap<String, String> user = new HashMap<>();\nuser.put("nom", "Bob");\nuser.put("role", "Admin");\nSystem.out.println(user.get("role"));',
                        output: "Admin",
                        action: 'run'
                    },
                    {
                        title: "Classes",
                        code: 'class Point {\n    int x, y;\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\nArrayList<Point> snakeBody = new ArrayList<>();\nsnakeBody.add(new Point(10, 10));',
                        output: "Class example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "5. Fonctions (Méthodes)",
                description: "Méthodes statiques ou d'instance dans des classes.",
                examples: [
                    {
                        title: "Méthode simple",
                        code: 'public static void saluer(String nom) {\n    System.out.println("Salut " + nom + "!");\n}\n\npublic static void main(String[] args) {\n    saluer("Maria");\n}',
                        output: "Salut Maria!",
                        action: 'run'
                    },
                    {
                        title: "Méthode avec retour",
                        code: 'public static int carre(int x) {\n    return x * x;\n}\n\nSystem.out.println(carre(5));',
                        output: "25",
                        action: 'run'
                    },
                    {
                        title: "Méthode de classe",
                        code: 'class Game {\n    public void gameOver() {\n        System.out.println("Game Over!");\n    }\n}',
                        output: "Method example",
                        action: 'run'
                    }
                ]
            }
        ]
    },
    {
        id: "javascript",
        name: "Learn JavaScript",
        icon: JsIcon,
        description: "The language of the web. Runs in the browser and on the server (Node.js).",
        sections: [
            { title: "DOM", content: "JavaScript can manipulate the Document Object Model." },
            { title: "Async", content: "Promises and async/await handle asynchronous operations." },
        ],
        youtubeLinks: [
            { title: "JavaScript Tutorial for Beginners", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
        ],
        learningModules: [
            {
                title: "1. Variables & Types de Données",
                description: "JavaScript est dynamiquement typé. Utilisez let, const ou var.",
                examples: [
                    {
                        title: "Créer des variables",
                        code: 'let nom = "Alice";\nlet age = 25;\nconsole.log(`Je m\'appelle ${nom} et j\'ai ${age} ans.`);',
                        output: "Je m'appelle Alice et j'ai 25 ans.",
                        action: 'run'
                    },
                    {
                        title: "Types de données",
                        code: 'let prix = 19.99;\nlet quantite = 3;\nlet disponible = true;\nconsole.log(typeof prix);',
                        output: "number",
                        action: 'run'
                    },
                    {
                        title: "Défi Interactif",
                        code: 'let score = 0;\nlet playerName = "Snake";\nconsole.log(`Player: ${playerName}, Score: ${score}`);',
                        output: "Player: Snake, Score: 0",
                        action: 'run'
                    }
                ]
            },
            {
                title: "2. Les Opérateurs",
                description: "Opérateurs classiques + quelques spécificités JS.",
                examples: [
                    {
                        title: "Arithmétique",
                        code: 'let x = 10, y = 5;\nconsole.log(`Somme: ${x + y}, Produit: ${x * y}`);',
                        output: "Somme: 15, Produit: 50",
                        action: 'run'
                    },
                    {
                        title: "Comparaison",
                        code: 'let score = 100;\nconsole.log(score > 50);',
                        output: "true",
                        action: 'run'
                    },
                    {
                        title: "Logique",
                        code: 'if(foodEaten && gameActive) {\n    score += 10;\n}',
                        output: "Logic example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "3. Structures de Contrôle",
                description: "Conditions, boucles et switch.",
                examples: [
                    {
                        title: "Conditions",
                        code: 'let heure = 14;\nif(heure < 12) {\n    console.log("Bonjour");\n} else {\n    console.log("Bon après-midi");\n}',
                        output: "Bon après-midi",
                        action: 'run'
                    },
                    {
                        title: "Boucles",
                        code: 'for(let i = 0; i < 3; i++) {\n    console.log(`Compteur: ${i}`);\n}',
                        output: "Compteur: 0\nCompteur: 1\nCompteur: 2",
                        action: 'run'
                    },
                    {
                        title: "While",
                        code: 'while(gameActive) {\n    moveSnake();\n    checkCollisions();\n}',
                        output: "While loop example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "4. Structures de Données",
                description: "Arrays et Objects (équivalent des dictionnaires).",
                examples: [
                    {
                        title: "Arrays",
                        code: 'let nombres = [10, 20, 30];\nconsole.log(nombres[0]);',
                        output: "10",
                        action: 'run'
                    },
                    {
                        title: "Objects",
                        code: 'let user = {\n    nom: "Bob",\n    role: "Admin"\n};\nconsole.log(user.role);',
                        output: "Admin",
                        action: 'run'
                    },
                    {
                        title: "Corps du Serpent",
                        code: 'let snakeBody = [{x: 10, y: 10}, {x: 10, y: 11}];\nconsole.log(`Length: ${snakeBody.length}`);',
                        output: "Length: 2",
                        action: 'run'
                    }
                ]
            },
            {
                title: "5. Fonctions",
                description: "Fonctions classiques, fléchées (arrow functions) et anonymes.",
                examples: [
                    {
                        title: "Fonction classique",
                        code: 'function saluer(nom) {\n    console.log(`Salut ${nom}!`);\n}\n\nsaluer("Maria");',
                        output: "Salut Maria!",
                        action: 'run'
                    },
                    {
                        title: "Arrow Function",
                        code: 'const carre = (x) => x * x;\nconsole.log(carre(5));',
                        output: "25",
                        action: 'run'
                    },
                    {
                        title: "Fonction Game Over",
                        code: 'function gameOver() {\n    console.log("Game Over!");\n    resetGame();\n}',
                        output: "Game Over!",
                        action: 'run'
                    }
                ]
            }
        ]
    },
    {
        id: "go",
        name: "Learn Go",
        icon: GoIcon,
        description: "A statically typed, compiled language designed at Google. Known for simplicity and concurrency.",
        sections: [
            { title: "Goroutines", content: "Lightweight threads managed by the Go runtime." },
            { title: "Channels", content: "Channels allow goroutines to communicate." },
        ],
        youtubeLinks: [
            { title: "Go Programming - Golang Course", url: "https://www.youtube.com/watch?v=YS4e4q9oBaU" },
        ],
        learningModules: [
            {
                title: "1. Variables & Types de Données",
                description: "Go est fortement typé avec une syntaxe concise.",
                examples: [
                    {
                        title: "Créer des variables",
                        code: 'package main\nimport "fmt"\n\nfunc main() {\n    nom := "Alice"\n    age := 25\n    fmt.Printf("Je m\'appelle %s et j\'ai %d ans.\\n", nom, age)\n}',
                        output: "Je m'appelle Alice et j'ai 25 ans.",
                        action: 'run'
                    },
                    {
                        title: "Types de données",
                        code: 'var prix float64 = 19.99\nvar quantite int = 3\nvar disponible bool = true\nfmt.Printf("Type: %T\\n", prix)',
                        output: "Type: float64",
                        action: 'run'
                    },
                    {
                        title: "Défi Interactif",
                        code: 'score := 0\nplayerName := "Snake"\nfmt.Printf("Player: %s, Score: %d\\n", playerName, score)',
                        output: "Player: Snake, Score: 0",
                        action: 'run'
                    }
                ]
            },
            {
                title: "2. Les Opérateurs",
                description: "Opérateurs arithmétiques, logiques et de comparaison.",
                examples: [
                    {
                        title: "Arithmétique",
                        code: 'x, y := 10, 5\nfmt.Printf("Somme: %d, Produit: %d\\n", x+y, x*y)',
                        output: "Somme: 15, Produit: 50",
                        action: 'run'
                    },
                    {
                        title: "Comparaison",
                        code: 'score := 100\nfmt.Println(score > 50)',
                        output: "true",
                        action: 'run'
                    },
                    {
                        title: "Logique",
                        code: 'if foodEaten && gameActive {\n    score += 10\n}',
                        output: "Logic example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "3. Structures de Contrôle",
                description: "If, for (Go n'a pas de while !), switch.",
                examples: [
                    {
                        title: "Conditions",
                        code: 'heure := 14\nif heure < 12 {\n    fmt.Println("Bonjour")\n} else {\n    fmt.Println("Bon après-midi")\n}',
                        output: "Bon après-midi",
                        action: 'run'
                    },
                    {
                        title: "Boucles (for = while)",
                        code: 'for i := 0; i < 3; i++ {\n    fmt.Printf("Compteur: %d\\n", i)\n}',
                        output: "Compteur: 0\nCompteur: 1\nCompteur: 2",
                        action: 'run'
                    },
                    {
                        title: "Boucle infinie",
                        code: 'for gameActive {\n    moveSnake()\n    checkCollisions()\n}',
                        output: "Infinite loop example",
                        action: 'run'
                    }
                ]
            },
            {
                title: "4. Structures de Données",
                description: "Slices (tableaux dynamiques), maps et structs.",
                examples: [
                    {
                        title: "Slices",
                        code: 'nombres := []int{10, 20, 30}\nfmt.Println(nombres[0])',
                        output: "10",
                        action: 'run'
                    },
                    {
                        title: "Maps",
                        code: 'user := map[string]string{\n    "nom":  "Bob",\n    "role": "Admin",\n}\nfmt.Println(user["role"])',
                        output: "Admin",
                        action: 'run'
                    },
                    {
                        title: "Structs",
                        code: 'type Point struct {\n    X, Y int\n}\n\nsnakeBody := []Point{{10, 10}, {10, 11}}\nfmt.Printf("Length: %d\\n", len(snakeBody))',
                        output: "Length: 2",
                        action: 'run'
                    }
                ]
            },
            {
                title: "5. Fonctions",
                description: "Fonctions avec ou sans retour, multiples retours possibles.",
                examples: [
                    {
                        title: "Fonction simple",
                        code: 'func saluer(nom string) {\n    fmt.Printf("Salut %s!\\n", nom)\n}\n\nfunc main() {\n    saluer("Maria")\n}',
                        output: "Salut Maria!",
                        action: 'run'
                    },
                    {
                        title: "Fonction avec retour",
                        code: 'func carre(x int) int {\n    return x * x\n}\n\nfmt.Println(carre(5))',
                        output: "25",
                        action: 'run'
                    },
                    {
                        title: "Fonction Game Over",
                        code: 'func gameOver() {\n    fmt.Println("Game Over!")\n    resetGame()\n}',
                        output: "Game Over!",
                        action: 'run'
                    }
                ]
            }
        ]
    },
];
