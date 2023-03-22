import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageProvider';
import './Body.css';

function Body() {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <div className="welcome">
            <div className="text-content">
                <h1 className="h" style={{ fontSize: 87 }}>
                    {language === 'en' ? 'Ararat' : language === 'ru' ? 'Арарат' : 'Արարարատ'}
                </h1>
                <h3 className="h">
                    {language === 'en' ? 'IT School' : language === 'ru' ? 'Информационная школа' : 'IT Դպրոց'}
                </h3>
                <p className="h">
                    {language === 'en' ? 'Discover the endless possibilities of IT' :
                        language === 'ru' ? 'Откройте для себя бесконечные возможности вычислений' :
                            'Բացահայտիր IT անսահման հնարավորությունները'}
                </p>
                <button className="btn">
                    <span>
                        {language === 'en' ? 'Courses' :
                            language === 'ru' ? 'Курс' :
                                'Դասընթացներ'}
                    </span>
                </button>
            </div>
            <div className="man">
                <img style={{ width: 553, height: 553 }} src="https://www.aitschool.am/images/main_image.png" alt="" />
            </div>
        </div>
    );
}

export default Body;

