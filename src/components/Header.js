import Link from 'next/link'

export default function Header() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/blog/hello-world">Blog Post</Link>
            </li>
    </ul>
    )
}