import React from 'react'

const About = () => {
    return (
        <section id='about' className='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-about">
                            <div className="image">
                                <img src="img/icon/story.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="content-about">
                            <div className="desc">
                                <div className="text">
                                    <h3 className="subtitle">
                                        Our Story
                                    </h3>

                                    <h2 className="title">
                                        Trusted By 200 + satisfied clients
                                    </h2>

                                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit
                                        esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.
                                    </p>
                                </div>

                                <ul>
                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <span>
                                            Fresh and Fast food Delivery
                                        </span>
                                    </li>

                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <span>
                                            Fresh and Fast food Delivery
                                        </span>
                                    </li>

                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <span>
                                            Fresh and Fast food Delivery
                                        </span>
                                    </li>

                                    <li>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <span>
                                            Fresh and Fast food Delivery
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
