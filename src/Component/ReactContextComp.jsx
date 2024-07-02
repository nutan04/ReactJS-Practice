import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

// Create a context with 'light' as the default value
const ThemeContext = createContext('light');

// ThemeProvider component that uses the ThemeContext to provide the current theme and a function to toggle the theme
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// ThemeTogglerButton component that consumes the ThemeContext to display and toggle the theme
function ThemeTogglerButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button
            onClick={toggleTheme}
            style={{
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '20px'
            }}
        >
            Toggle Theme
        </button>
    );
}

// Main App component
function ReactContextComp() {
    return (
        <ThemeProvider>
            <div
                style={{
                    background: useContext(ThemeContext).theme === 'light' ? '#eee' : '#111',
                    color: useContext(ThemeContext).theme === 'light' ? '#000' : '#fff',

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <h1>Welcome to the Themed App!</h1>
                <ThemeTogglerButton />
            </div>
        </ThemeProvider>
    );
}

export default ReactContextComp;
