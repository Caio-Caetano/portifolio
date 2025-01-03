import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        borderWidth: {
            '3': '3px',
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                dark: "var(--dark)",
                light: "var(--light)",
                blue: "var(--blue)",
                white: "var(--white)",
                black: "var(--black)",
                gray: "var(--gray)"
            },
            boxShadow: {
                '3xl': '6px 6px 10px rgba(11, 18, 21, 0.3)',
            },
            margin: {
                '30': '30px'
            },
            padding: {
                '30': '30px'
            },
            width: {
                '100': '100%'
            },
            animation: {
                'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
            },
            keyframes: {
                'shake': {
                    '10%, 90%': {
                        transform: 'translate3d(-1px, 0, 0)'
                    },
                    '20%, 80%': {
                        transform: 'translate3d(2px, 0, 0)'
                    },
                    '30%, 50%, 70%': {
                        transform: 'translate3d(-4px, 0, 0)'
                    },
                    '40%, 60%': {
                        transform: 'translate3d(4px, 0, 0)'
                    }
                }
            }
        },
    },
    darkMode: "class",
 plugins: [
        nextui({})
    ],
} satisfies Config;
