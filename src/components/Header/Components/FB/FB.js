import React from 'react'
import Link from 'next/link'
import styles from './FB.module.sass'

export function FB() {
    return (
        <header>
            <div className={styles.fb}>FRIENDS BOX</div>
            <div>
                <Link href="https://instagram.com/_friends_box?igshid=YTQwZjQ0NmI0OA==">
                    <button></button>
                </Link>
                <Link href="/LC/LC">
                    <button>Log in</button>
                </Link>
                <Link href="/LC/LC">
                    <button>Cart</button>
                </Link>
            </div>
            <div>
                <Link href="/">
                    <button>Home</button>
                </Link>
                <Link href="/shop/shop">
                    <button>Shop All</button>
                </Link>
                <Link href="/about/about">
                    <button>About Us</button>
                </Link>
                <Link href="/contact/contact">
                    <button>Contact</button>
                </Link>
            </div>
        </header>
    )
}