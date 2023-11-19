import React from 'react'
import Link from 'next/link'
import './FB.sass'
import instagramblack from './../../../../image/instagramblack.png'

export function FB() {
    return (
        <header>
        <div>
            <div className="headerFB">FRIENDS BOX</div>
            <div>
                <Link href="https://instagram.com/_friends_box?igshid=YTQwZjQ0NmI0OA==">
                    <button className="instagramblack" alt="Vector" src={instagramblack} ></button>
                </Link>
                <Link href="/LC/LC">
                    <button className="Login">Log in</button>
                </Link>
                <Link href="/LC/LC">
                    <button className="Cart">Cart</button>
                </Link>
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
        </div>
        </header>
    )
}