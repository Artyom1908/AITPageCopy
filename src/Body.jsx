import React from 'react'
import './Body.css'
function Body() {
    return (
        <div className='welcome'>
            <div className="text-conten">
                <h1 className='h'>Ararat</h1>
                <h3 className='h'>IT School</h3>
                <p className='h'>Բացահայտիր IT անսահման հնարավորությունները</p>
                <button className='btn'>
                    <span>Դասընթացներ</span>
                </button>
            </div>
            <div className="man">
                <img style={{ width: 553, height: 553 }} src="	https://www.aitschool.am/images/main_image.png" alt="" />
            </div>
        </div>
    )
}

export default Body