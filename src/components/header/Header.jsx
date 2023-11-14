import React, { useState, useEffect } from "react"
import "./header.css"
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineBadgeCheck,
    HiOutlineClipboardList,
    HiOutlinePhotograph,
    HiOutlineMail,
    HiX,
    HiOutlineMenu,
} from "react-icons/hi"

export default function Header() {
    const [toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header")
            if (window.scrollY >= 80) {
                header.classList.add("scroll-header")
            }
            header.classList.remove("scroll-header")
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const NavLink = ({ href, icon, text }) => (
        <a
            href={href}
            onClick={() => setActiveNav(href)}
            className={`nav__link ${activeNav === href ? "active-link" : ""}`}>
            {icon}
            {text}
        </a>
    )

    return (
        <header className="header">
            <nav className="nav container">
                <a
                    href="index.html"
                    className="nav__logo">
                    TiHinya
                </a>
                <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <NavLink
                                href="#home"
                                icon={<HiOutlineHome className="nav__icon" />}
                                text="Home"
                            />
                        </li>
                        <li className="nav__item">
                            <NavLink
                                href="#about"
                                icon={<HiOutlineUser className="nav__icon" />}
                                text="About"
                            />
                        </li>
                        <li className="nav__item">
                            <NavLink
                                href="#skills"
                                icon={
                                    <HiOutlineBadgeCheck className="nav__icon" />
                                }
                                text="Skills"
                            />
                        </li>
                        <li className="nav__item">
                            <NavLink
                                href="#services"
                                icon={
                                    <HiOutlineClipboardList className="nav__icon" />
                                }
                                text="Services"
                            />
                        </li>
                        <li className="nav__item">
                            <NavLink
                                href="#portfolio"
                                icon={
                                    <HiOutlinePhotograph className="nav__icon" />
                                }
                                text="Projects"
                            />
                        </li>
                        <li className="nav__item">
                            <NavLink
                                href="#contact"
                                icon={<HiOutlineMail className="nav__icon" />}
                                text="Contact"
                            />
                        </li>
                    </ul>
                    <HiX
                        className="nav__close"
                        onClick={() => setToggle(!toggle)}
                    />
                </div>
                <div
                    className="nav__toggle"
                    onClick={() => setToggle(!toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}
