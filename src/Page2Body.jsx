import React from 'react'
import './Page2Body.css'
function Page2Body() {
    return (
        <div className='content'>
            <div className="partName">
                <h2>Դասընթացներ</h2>
            </div>
            <div className="coursConteiner">
                <div className="cours">
                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/web.png" alt="" />
                        <h3>Web Development</h3>
                        <p>6 ամիս</p>
                    </div>
                </div>
                <div className="cours">
                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/ui-ux.png" alt="" />
                        <h3>UI/UX</h3>
                        <p>2 ամիս</p>
                    </div>
                </div>
                <div className="cours">

                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/smm.png" alt="" />
                        <h3>SMM</h3>
                        <p>1.5 ամիս</p>
                    </div>
                </div>
                <div className="cours">

                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/graphic-design.png" alt="" />
                        <h3>Graphic Design</h3>
                        <p>2 ամիս</p>
                    </div>
                </div>
                <div className="cours">

                    <div className="coursBlock">
                        <img src="https://api.aitschool.am/english.png  " alt="" />
                        <h3>English</h3>
                        <p>2 ամիս</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2Body