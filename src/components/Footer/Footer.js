import React from 'react';
import { Link } from 'next/link';

export default function Footer() {
    return (
        <div>
            <footer>
                <div>
                    <div>
                        <h2>Logo</h2>
                        <p>© 2023  All rights reserved</p>
                    </div>
                    <div>
                        <h4>tt</h4>
            	        <div>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <button>Home</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop/shop">
                                        <button>Shop all</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/about">
                                        <button>About Us</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact/contact">
                                        <button>Contact</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link href="/FAQ/FAQ">
                                        <button>FAQ</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/S_R/S_R">
                                        <button>Shipping & Returns</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/StrPol/StrPol">
                                        <button>Store Policy & Payment</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <ul>
                            <li>
                                <Link href="https://instagram.com/_friends_box?igshid=YTQwZjQ0NmI0OA==" target="_blank">
                                    <button>Instagram</button>
                                </Link>
                            </li> 
                        </ul>
                    </div>
                    <form>
                        <h4>Join Us!</h4>
                        <input type='email' placeholder="Email.."></input>
                        <button>Send Message</button>
                    </form>
                </div>
            </footer>
            <section>
                <p>Designed by <a href="">The Boys</a></p>
            </section>
        </div>
    );
}