import React, { useContext } from 'react'
import './Branches.css'
import './index.css'
import { LanguageContext } from './LanguageProvider';

function Branches() {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <div className='Branches'>
            <div className="partName">
                <h2>{language === 'en' ? 'Branches' : language === 'am' ? 'Մասնաճյուղեր' : 'Филиалы'}</h2>
            </div>
            <div className="imageBlock">
                <div className="imageArarat">
                    <img src="https://www.aitschool.am/images/office_ararat.jpg" alt="" />
                    <p>{language === 'en' ? 'City. Ararat' : language === 'am' ? 'Ք. Արարատ' : 'Город. Арарат'}</p>
                </div>
                <div className="imageErevan">
                    <img src="https://www.aitschool.am/images/office_yerevan.jpeg" alt="" />
                    <p>{language === 'en' ? 'City. Erevan' : language === 'am' ? 'Ք. Երևան' : 'Город. Ереван'}</p>
                </div>
            </div>
        </div>
    )
}

export default Branches