import { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext({});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children, initialSettings }) => {
    const [settings, setSettings] = useState(initialSettings || {});

    useEffect(() => {
        if (Object.keys(settings).length === 0) {
            fetch('/api/settings')
                .then(res => res.json())
                .then(data => {
                    if (data && !data.error) {
                        setSettings(data);
                    }
                })
                .catch(err => console.error('Failed to fetch settings:', err));
        }
    }, []);

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsContext;
