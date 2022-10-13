import React, { useState, useLayoutEffect } from "react";


export const ThemeContext = React.createContext({
    dark: false,
    toggle: () => {}
});

export default function ThemeProvider({ children }) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [dark, setDark] = useState(prefersDark);

    useLayoutEffect(() => {
        let theme = dark ? "dark" : "";
        const root = document.getElementsByTagName("body")[0];
        root.className = theme;
    }, [dark]);

    const toggle = () => {
        setDark(!dark);
    };

    return (
        <ThemeContext.Provider
            value={{
                dark,
                toggle
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}