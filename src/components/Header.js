import React, { useState } from 'react'
import logo from '../images/KaoriMau-logo.svg'
import { FiShoppingCart } from 'react-icons/fi'

export default function Header() {
	let [cartOpen, setCartOpen] = useState(false)
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
				<FiShoppingCart
					onClick={() => setCartOpen((cartOpen = !cartOpen))}
					className={`shop-cart-button ${cartOpen && 'active'}`}
				/>

				{cartOpen && <div className='shop-cart'></div>}
			</div>
			<div className='presentation'></div>
		</header>
	)
}
