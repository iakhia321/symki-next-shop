import React from 'react'
import Link from 'next/link'
import './Fot.sass'

export function Fot() {
    return (
        <div>
        <footer className='footer'>
            <div className='footer__row'>
                    <div className='footer__logo'>
                        <h2>Logo</h2>
                        <p>© 2023  All rights reserved</p>
                    </div>
                    <div className='footer__nav'>
            	        <div className="footer__nav__menu">
                            <ul className='footer__nav__pages'>
                                <li>
                                    <Link href="/">
                                        <button className='btn'>Home</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop-all/shop-all">
                                        <button className='btn'>Shop all</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/about">
                                        <button className='btn'>About Us</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact/contact">
                                        <button className='btn'>Contact</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footer__nav__inf'>
                            <ul className="footer__nav__list">
                                <li>
                                    <Link href="/faq/faq">
                                        <button className='btn'>FAQ</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/s_r/s_r">
                                        <button className='btn'>Shipping & Returns</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/strpol/strpol">
                                        <button className='btn'>Store Policy & Payment</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__social'>
                        <h4>Follow Us</h4>
                        <ul>
                            <li>
                                <Link href="https://instagram.com/_friends_box?igshid=YTQwZjQ0NmI0OA==" target="_blank">
                                    <button className='btn'>Instagram</button>
                                </Link>
                            </li> 
                        </ul>
                    </div>
                    <form className='footer__form'>
                        <h4 className='footer__form__title'>Join Us!</h4>
                        <input type='email' className='footer__form__inp' placeholder="Email.."></input>
                        <button className='footer__form__btn'>Send Message</button>
                    </form>
                </div>
        </footer>
        <section className='designed'>
        <p>Designed by <a href="">The Boys</a></p>
        </section>
        </div>
    )
}