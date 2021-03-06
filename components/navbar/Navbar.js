//next router
import Link from "next/dist/client/link";
import { useRouter } from 'next/router';
import { useEffect } from "react";

//bootstrap
import { Navbar } from "react-bootstrap";

//react icons
import { BiChevronRight } from 'react-icons/bi'

//data
import Data from './Data';

//styled components
import { StyledNavbar, Logo, NavItem, NavBarCollapse, NavContent } from "./Navbar.stlyed";
import { StyledContainer, Button } from "../layout/Layout.styled";


const MainNavbar = () => {

    useEffect(() => {
        const header = document.getElementById('navbar');
        const handleScroll = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                header.classList.add("colorChange");
            } else {
                header.classList.remove("colorChange")
            }
        });
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);


    const router = useRouter();

    return (
        <StyledNavbar id="navbar" expand="lg" variant="dark">
            <StyledContainer p="15px 0">
                <Link href="/">
                    <Logo href="/"> <span>M</span> IM</Logo>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavBarCollapse id="basic-navbar-nav">
                    <NavContent className="me-auto">
                        {Data.map(d => (
                                <Link  key={d.id} href={d.link}>
                                <NavItem href={d.link}>
                                    <span className={router.pathname === d.link ? "active" : ""}>{d.title}</span>
                                </NavItem>
                            </Link>
                        ))}
                    </NavContent>
                </NavBarCollapse>
                    <Link href="/contact">
                            <Button className="none">
                                say hello<BiChevronRight />
                            </Button>
                    </Link>
            </StyledContainer>
        </StyledNavbar>
    )
}

export default MainNavbar