import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaPizzaSlice, FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const  toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/PizzaRestaurant" onClick={toggleHome}>Pizza <FaPizzaSlice /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="pizzas" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Pizzas</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="salads" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Salads</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="desserts" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Desserts</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="drinks" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Drinks</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/PizzaRestaurant/fullmenu">Full Menu</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/PizzaRestaurant/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;