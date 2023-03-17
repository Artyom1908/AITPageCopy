import React from 'react'
import './Header.css'
import './index.css'
function Header() {
    return (
        <div className="container">
            <div className="logo">
                <img src="https://aitschool.am/images/Ait-Logo.svg" alt="" />
            </div>
            <nav>
                <ul className='navUl'>
                    <li>Գլխավոր</li>
                    <li>Դասընթացներ</li>
                    <li>Գրանցում</li>
                    <li>Մեր մասին</li>
                    <li>Բլոգ</li>
                    <li>Կապ</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header