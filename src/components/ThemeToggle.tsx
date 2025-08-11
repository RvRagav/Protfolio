// src/components/ThemeToggle.tsx
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    // Set initial theme based on localStorage or system preference (per Tailwind docs)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const userTheme = localStorage.theme;
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (userTheme === "dark" || (!userTheme && systemPrefersDark)) {
                document.documentElement.classList.add("dark");
                setDark(true);
            } else {
                document.documentElement.classList.remove("dark");
                setDark(false);
            }
        }
    }, []);

    // Update theme when toggled
    // const toggleTheme = () => {
    //     if (dark) {
    //         document.documentElement.classList.remove("dark");
    //         localStorage.theme = "light";
    //         setDark(false);
    //     } else {
    //         document.documentElement.classList.add("dark");
    //         localStorage.theme = "dark";
    //         setDark(true);
    //     }
    // };

    return (
        <></>
        // <button
        //     onClick={toggleTheme}
        //     className="p-2 text-lg hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors duration-200 focus:outline-none"
        //     aria-label="Toggle theme"
        // >
        //     {dark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-50" />}
        // </button>
    );
}
