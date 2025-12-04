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
        name: "Python",
        icon: FileCode,
        description: "A high-level, interpreted language known for its readability and versatility.",
        sections: [
            { title: "Lists", content: "Python lists are dynamic arrays." },
            { title: "Loops", content: "For loops in Python iterate over sequences." },
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
