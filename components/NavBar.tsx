import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar = () => {
    return (
        <nav className={styles['menu-container']} >
            {
                menuItems.map(({text, href}) => (
                    <ActiveLink
                    key={text}
                    href={href}
                    text={text}
                    />

                ))
            }

            {/* <ActiveLink key={menuItems.text} href={menuItems.href}>{menuItems.text}</ActiveLink>
            <ActiveLink text="About" href="/about">About</ActiveLink>
            <ActiveLink text="Contact" href="/contact">Contact</ActiveLink>
            <ActiveLink text="Pricin" href="/pricing/pricing">Pricing</ActiveLink> */}
        </nav>
    )
}
