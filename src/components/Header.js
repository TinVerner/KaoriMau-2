import React from 'react'
import logo from '../images/KaoriMau-logo.svg'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>
            {/* <img src={logo} alt="magazin emae" className="logo-img" /> */}
            Kaori Mau
            </span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
