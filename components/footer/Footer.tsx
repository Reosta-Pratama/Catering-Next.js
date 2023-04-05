import DataMenu from '@/public/DataMenu'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <div className="container">
                <div className="foot-top">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="content-footer">
                                <h3 className="title">
                                    Tentang Kami
                                </h3>

                                <p>There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum
                                    leo massamollis its estiegittis miristum.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="content-footer">
                                <h3 className="title">
                                    Rekomendasi Menu
                                </h3>

                                <ul className="list">
                                    {
                                        DataMenu.map(function (item) {
                                            return (
                                                <li key={item.slug}>
                                                    <Link href={item.slug}>
                                                        <i className="fa-solid fa-caret-right"></i>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="content-footer">
                                <h3 className="title">
                                    kontak kami
                                </h3>

                                <ul className="list">
                                    <li>
                                        <Link target="_blank" href="/">
                                            <i className="fa-solid fa-map-location-dot"></i>
                                            <span>Jln. Ujung No. 997, Pasuruan 25229, Gorontalo</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_blank" href="tel:082169076600">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <span>082169076600</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_blank" href="https://wa.me/082169076600">
                                            <i className="fa-regular fa-comment-dots"></i>
                                            <span>082169076600</span>
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">
                                            <i className="fa-regular fa-clock"></i>
                                            <span>
                                                24/7 Hours Service
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="content-footer">
                                <h3 className="title">
                                    media sosial
                                </h3>

                                <ul className="medsos">
                                    <li>
                                        <Link href="/" target="_blank">
                                            <i className="fa-brands fa-facebook-f"></i>
                                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        </Link>
                                    </li>

                                    <li>
                                        <a href="/" target="_blank">
                                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" target="_blank">
                                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="foot-bot">
                <p>
                    Copyright © {new Date().getFullYear()}
                    <strong> Ufaira Kitchen</strong>. All Rights Reserved.</p>
            </div>

            <div className="topright">
                <div className="image">
                    <img src="img/icon/tomatto-2.png" alt="" className="img-fluid"/></div>
            </div>

            <div className="bottomleft">
                <div className="image">
                    <img src="img/icon/02.png" alt="" className="img-fluid"/></div>
            </div>
        </footer>
    )
}

export default Footer