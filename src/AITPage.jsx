import React, { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';
import './AITpage.css'
function AITPage() {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <div className='AIT'>
            <div className="partName">
                <h2>{language === 'en' ? 'What will AIT give you?' : language === 'am' ? 'Ինչ կտա ձեզ AIT-ն' : 'Что даст вам AIT?'}</h2>
            </div>
            <div className="container">
                <div className="cont">
                    <div className="textContent">
                        <div className="content">

                            <img id='img' src="https:www.aitschool.am/images/number1.svg" alt="" />


                            <div className="text">
                                <h4>
                                    {language === 'en' ? 'Education' : language === 'am' ? 'Կրթություն' : 'Образование'}
                                </h4>
                                <p>{language === 'en' ? 'Take the 10-month course and gain basic programming knowledge. You can also study Graphic Design, UI/UX Design, SMM and English' : language === 'am' ? 'Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր ծրագրավորման հիմնարար գիտելիքներ: Ինչպես նաև կարող եք ուսանել Graphic Design, UI/UX Design, SMM և Անգլերեն' : 'Пройдите 10-месячный курс и получите базовые знания по программированию. Вы также можете изучать графический дизайн, дизайн интерфейсов, SMM и английский язык.'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="content">

                        <img id='img' src="https:www.aitschool.am/images/number2.svg" alt="" />
                        <div className="text">
                            <h4>
                                {language === 'en' ? 'Practice' : language === 'am' ? 'Պրակտիկա' : 'Практика'}
                            </h4>
                            <p>{language === 'en' ? 'After completing the course, take a trial period at a programming company operating under the school. Apply your knowledge by working on real projects.' : language === 'am' ? 'Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա։' : 'После прохождения курса пройдите испытательный срок в компании-разработчике, работающей при школе. Применяйте свои знания, работая над реальными проектами.'}</p>
                        </div>
                    </div>

                    <div className="content">

                        <img id='img' src="https:www.aitschool.am/images/number3.svg" alt="" />

                        <div className="text">
                            <h4>
                                {language === 'en' ? 'Work' : language === 'am' ? 'Աշխատանք' : 'Работа'}
                            </h4>
                            <p>{language === 'en' ? 'Get a chance to join our team. Our students make up 80% of our team.' : language === 'am' ? 'Получите шанс присоединиться к нашей команде. Наши студенты составляют 80% нашей команды.' : 'Получите шанс присоединиться к нашей команде. Наши студенты составляют 80% нашей команды.'}</p>
                        </div>
                    </div></div>

                <div className="image">
                    <div className="padding"></div>
                    <div className="img">
                        <img src="https:www.aitschool.am/images/globus.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AITPage;