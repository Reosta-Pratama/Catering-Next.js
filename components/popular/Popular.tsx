import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import React from 'react'
import DataMenu from '@/public/DataMenu';

const Popular = () => {
    return (
        <section id='popular' className='popular'>
            <div className="container">
                <div className="text">
                    <h3 className="subtitle">
                        Zona Rekomendasi
                    </h3>

                    <h2 className="title">
                        Popular Dishes Of Our Caterers
                    </h2>
                </div>

                <div className="row">
                    {
                        DataMenu.map(function (item) {
                            return (
                                <div key={item.slug} className="col-md-6 col-lg-4 mar-30">
                                    <div className="content-popular">
                                        <Link href={item.slug}>
                                            <div className="image">
                                                <img src={item.img} alt="" className='img-fluid'/>
                                            </div>
                                        </Link>

                                        <div className="desc">
                                            <Link href={item.slug}>
                                                <h3 className="name">
                                                    {item.title}
                                                    <span>Rp.{item.price}</span>
                                                </h3>
                                            </Link>

                                            <div className="rating">
                                                <span>{item.star}</span>
                                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="btop">
                <div className="image">
                    <img src="img/icon/leaf.png" alt="" className="img-fluid"/>
                </div>
            </div>

            <div className="bbottom">
                <div className="image">
                    <img src="img/icon/tomatto.png" alt="" className="img-fluid"/>
                </div>
            </div>
        </section>
    )
}

export default Popular
