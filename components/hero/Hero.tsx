import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section id='hero' className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="content-hero">
                            <div className="text">
                                <h1 className="title">Ufaira Kitchen</h1>
                                <p>Find out professional caterers in your city for your Dream Events, long
                                    established fact a reader will be distracted the readable.
                                </p>

                                <Link className="btn scrollto" href="#popular">
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="content-hero">
                            <div className="image">
                                <img src="img/icon/story.png" alt="Ufaira Kitchen Hero" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link href="tel:082169076600" className="contact-phone" target="_blank">
                <i className="fa-solid fa-phone"></i>
                <span>
                    +6282169076600
                </span>
            </Link>

            <div className="medsos">
                <ul>
                    <li>
                        <Link href="/" target="_blank">Facebook</Link>
                    </li>

                    <li>
                        <Link href="/" target="_blank">Tiktok</Link>
                    </li>

                    <li>
                        <Link href="/" target="_blank">Instagram</Link>
                    </li>
                </ul>
            </div>

            <div className="rtop">
                <div className="image">
                    <img src="img/icon/rectangle.png" alt="" className="img-fluid"/>
                </div>
            </div>

            <div className="rbottom">
                <div className="image">
                    <img src="img/icon/rectangle.png" alt="" className="img-fluid"/>
                </div>
            </div>
        </section>
    )
}

export default Hero