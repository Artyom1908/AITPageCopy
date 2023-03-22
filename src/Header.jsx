import React, { useState, useContext } from 'react'
import './Header.css'
import './index.css'
import LanguageSwitcher from './LanguageSwitcher';
import { LanguageContext } from './LanguageProvider';

function Header() {
    const { language, changeLanguage } = useContext(LanguageContext);


    return (
        <div className="container">
            <div className="logo">
                <img src="https://aitschool.am/images/Ait-Logo.svg" alt="" />
            </div>
            <nav>
                <ul className="navUl">
                    <li>{language === 'en' ? 'Home' : language === 'am' ? 'Գլխավոր' : 'Основной'}</li>
                    <li>{language === 'en' ? 'Course' : language === 'am' ? 'Դասընթացներ' : 'Курсы'}</li>
                    <li>{language === 'en' ? 'Registration' : language === 'am' ? 'Գրանցում' : 'Постановка на учет'}</li>
                    <li>{language === 'en' ? 'about us' : language === 'am' ? 'Մեր մասին' : 'о нас'}</li>
                    <li>{language === 'en' ? 'Blog' : language === 'am' ? 'Բլոգ' : 'Блог'}</li>
                    <li>{language === 'en' ? 'Contact' : language === 'am' ? 'Կապ' : 'Контакт'}</li>
                    <li><LanguageSwitcher /></li>
                </ul>

            </nav>
        </div>
    );
}

export default Header
