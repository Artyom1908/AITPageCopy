import React, { useContext } from 'react';
import './Courses.css';
import { LanguageContext } from './LanguageProvider';

function Courses() {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <div className="Courses">
            <div className="partName">
                <h2>
                    {language === 'en' ? 'Courses' : language === 'am' ? 'Դասընթացներ' : 'Курсы'}
                </h2>
            </div>
            <div className="coursConteiner">
                <div className="cours">
                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/web_course.png" alt="404 error" />
                        <h3>{language === 'en' ? 'Web Development' : language === 'am' ? 'Web ծրագրավորում' : 'Веб-разработка'}</h3>
                        <p>{language === 'en' ? '6 months' : language === 'am' ? '6 ամիս' : '6 месяцев'}</p>
                    </div>
                </div>
                <div className="cours">
                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/ui-ux.png" alt="404 error" />
                        <h3>{language === 'en' ? 'UI/UX' : language === 'am' ? 'UI/UX' : 'UI/UX'}</h3>
                        <p>{language === 'en' ? '2 months' : language === 'am' ? '2 ամիս' : '2 месяца'}</p>
                    </div>
                </div>
                <div className="cours">
                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/smm.png" alt="404 error" />
                        <h3>{language === 'en' ? 'SMM' : language === 'am' ? 'SMM' : 'SMM'}</h3>
                        <p>{language === 'en' ? '1.5 months' : language === 'am' ? '1.5 ամիս' : '1.5 месяца'}</p>
                    </div>
                </div>
                <div className="cours">
                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/graphic-design.png" alt="404 error" />
                        <h3>{language === 'en' ? 'Graphic Design' : language === 'am' ? 'Գրաֆիկական դիզայն' : 'Графический дизайн'}</h3>
                        <p>{language === 'en' ? '2 months' : language === 'am' ? '2 ամիս' : '2 месяца'}</p>
                    </div>
                </div>
                <div className="cours">

                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/english.png  " alt="404 error" />
                        <h3>English</h3>
                        <p>{language === 'en' ? '2 months' : language === 'am' ? '2 ամիս' : '2 месяца'}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Courses