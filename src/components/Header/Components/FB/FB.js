import React, { useState } from 'react'
import Link from 'next/link'
import './FB.sass'
import './../../../../image/instagramblack.png'
import Cart from './../Cart/Cart'

export function FB() {

    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <header className="headerFB">
        <div className="headerFB__friends-box">FRIENDS BOX</div>
            <div className="LoginCart">
                <Link href="https://instagram.com/_friends_box?igshid=YTQwZjQ0NmI0OA==">
                    <button className="LoginCart__instagramblack" alt="Vector" target="_blank"></button>
                </Link>
                <Link href="/LC/LC">
                    <button className="LoginCart__LC">Log in</button>
                </Link>
                <button className="LoginCart__LC" onClick={toggleCart}>Cart</button>
                {isCartOpen && <Cart items={cartItems} onClose={toggleCart} />}
        </div>
            <div className="headerFB__navbar">
                <Link href="/">
                    <button className="headerFB__navbar__Btn" >Home</button>
                </Link>
                <Link href="/shop/shop">
                    <button className="headerFB__navbar__Btn">Shop All</button>
                </Link>
                <Link href="/about/about">
                    <button className="headerFB__navbar__Btn">About Us</button>
                </Link>
                <Link href="/contact/contact">
                    <button className="headerFB__navbar__Btn">Contact</button>
                </Link>
                
            </div>
        
        </header>
    )
}