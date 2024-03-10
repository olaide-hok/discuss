import {
    Input,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'
import HeaderAuth from './header-auth'

const Header = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <Link href="/" className="font-bold">
                    Discuss
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <HeaderAuth />
            </NavbarContent>
        </Navbar>
    )
}

export default Header
