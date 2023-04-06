import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
      function Scrolling() {
        window.addEventListener("scroll", function () {
            setScroll(window.scrollY > 300);
        })
      }

      Scrolling()
    })
    

  return (
    <>
        <header id="header" className={!scroll ? "header" : "header header-fixed"}>
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
                                <Link href='/#popular' scroll={false} className='nav-link scrollto'>Rekomendasi</Link>
                            </li>
                            <li>
                                <Link href='/#service' scroll={false} className='nav-link scrollto'>Service</Link>
                            </li>
                            <li>
                                <Link href='/#about' scroll={false} className='nav-link scrollto'>Tentang Kami</Link>
                            </li>
                            <li>
                                <Link href='/#menu' scroll={false} className='nav-link scrollto'>Menu</Link>
                            </li>
                            <li>
                                <Link href='/#chef' scroll={false} className='nav-link scrollto'>Koki</Link>
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