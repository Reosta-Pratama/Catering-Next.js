import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <header id="header" className='header'>
            <div className="container">
                <div className="logo">
                    <div className="image">
                        <Link href='/'>
                            <img
                                className='img-fluid'
                                src="../img/logo/logo2.png"
                                alt="Ufaira Kitchen Logo"/>
                        </Link>
                    </div>
                </div>

                <nav id="navbar" className="navbar">
                    <div className="content-navbar">
                        <div className="logo-sidebar">
                            <div className="image">
                                <Link href='/'>
                                    <img
                                        className='img-fluid'
                                        src="../img/logo/logo2.png"
                                        alt="Ufaira Kitchen Logo"/>
                                </Link>
                            </div>
                        </div>

                        <Link href='' className='removeToggle'>
                            <FontAwesomeIcon icon={faXmark}/>
                        </Link>

                        <ul>
                            <li className='red'>
                                <Link href='/#rekomendasi' className='nav-link scrollto'>Rekomendasi</Link>
                            </li>
                            <li>
                                <Link href='/#service' className='nav-link scrollto'>Service</Link>
                            </li>
                            <li>
                                <Link href='/#about' className='nav-link scrollto'>Tentang Kami</Link>
                            </li>
                            <li>
                                <Link href='/#menu' className='nav-link scrollto'>Menu</Link>
                            </li>
                            <li>
                                <Link href='/#chef' className='nav-link scrollto'>Koki</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="call">
                    <Link
                        href=""
                        className="contact-phone"
                        target="_blank">Hubungi Kami</Link>
                </div>

                <div className="toggle">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header