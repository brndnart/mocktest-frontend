import Link from 'next/link'

export default function NavLink(props) {
    const { href, children } = props

    return (
        <Link href={href} passHref>
            {children}
        </Link>
    )
}
