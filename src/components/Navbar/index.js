import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'
import Logo1 from '../../images/logo1.png'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'><img src={Logo1} alt="logo"/></NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
