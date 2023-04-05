import React from 'react'

const Service = () => {
    return (
        <section id='service' className='service'>
            <div className="container">
                <div className="text">
                    <h3 className="subtitle">
                        Our Services
                    </h3>

                    <h2 className="title">
                        What We Offer
                    </h2>
                </div>

                <div className="row container-service">
                    <div className="col-6 col-lg-3 mar-30">
                        <div className="content-service">
                            <div className="image">
                                <img src="img/service/wedding.svg" alt="" className="img-fluid"/>
                            </div>

                            <div className="desc">
                                <h3 className="name">
                                    Wedding Services
                                </h3>
                                <p>Contrary to popular belief, ipsum is not simply random.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mar-30">
                        <div className="content-service">
                            <div className="image">
                                <img src="img/service/corporate.svg" alt="" className="img-fluid"/>
                            </div>

                            <div className="desc">
                                <h3 className="name">
                                    Corporate Catering
                                </h3>
                                <p>Contrary to popular belief, ipsum is not simply random.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mar-30">
                        <div className="content-service">
                            <div className="image">
                                <img src="img/service/cocktail.svg" alt="" className="img-fluid"/>
                            </div>

                            <div className="desc">
                                <h3 className="name">
                                    Cocktail Reception
                                </h3>
                                <p>Contrary to popular belief, ipsum is not simply random.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mar-30">
                        <div className="content-service">
                            <div className="temp-service">
                                <div className="image">
                                    <img src="img/service/bento.svg" alt="" className="img-fluid"/>
                                </div>

                                <div className="desc">
                                    <h3 className="name">
                                        Bento Catering
                                    </h3>
                                    <p>Contrary to popular belief, ipsum is not simply random.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row container-info mt-3">
                    <div className="col-6 col-lg-3 mar-30">
                        <div className="content-info">
                            <div className="image">
                                <img src="img/info/c1.svg" alt="" className="img-fluid"/>
                            </div>

                            <div className="desc">
                                <h4>100</h4>
                                <h3 className="name">
                                    Happy Customers
                                </h3>

                                <a href="/">
                                    <span>Lihat Detail</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mar-30">
                        <div className="content-info">
                            <div className="image">
                                <img src="img/info/c2.svg" alt="" className="img-fluid"/>
                            </div>

                            <div className="desc">
                                <h4>100</h4>
                                <h3 className="name">
                                    Expert Chefs
                                </h3>

                                <a className="scrollto" href="#chef">
                                    <span>Lihat Detail</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mar-30">
                        <div className="content-info">
                            <div className="image">
                                <img src="img/info/c3.svg" alt="" className="img-fluid"/>
                            </div>

                            <div className="desc">
                                <h4>786</h4>
                                <h3 className="name">
                                    Years Of Experience
                                </h3>

                                <a className="scrollto" href="#about">
                                    <span>Lihat Detail</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 mar-30">
                        <div className="content-info">
                            <div className="image">
                                <img src="img/info/c4.svg" alt="" className="img-fluid"/>
                            </div>

                            <div className="desc">
                                <h4>100</h4>
                                <h3 className="name">
                                    Total Menu
                                </h3>

                                <a className="scrollto" href="#menu">
                                    <span>Lihat Detail</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service