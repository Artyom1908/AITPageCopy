import React, { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';
import './index.css'
function LanguageSwitcher() {
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
    };

    return (
        <div className="language-switcher">
            <label htmlFor="language-select">Language:</label>
            <select id="language-select" value={language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="am">Հայերեն</option>
                <option value="ru">русский</option>
            </select>
        </div>
    );
}

export default LanguageSwitcher;
