import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import DataChef from '@/public/DataChef'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet, faShareNodes, faStar } from '@fortawesome/free-solid-svg-icons'

const Chef = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })

    return (
        <section id='chef' className='chef'>
            <div className="container">
                <div className="text">
                    <h3 className="subtitle">
                        Our Chefs
                    </h3>

                    <h2 className="title">
                        We have experienced chef Team
                    </h2>
                </div>

                <div className="navigation-wrapper">
                    <div ref={sliderRef} className="keen-slider">
                        {
                            DataChef.map(function(item){
                                return(
                                    <div className="keen-slider__slide number-slide">
                                        <div className="item">
                                            <div className="content-chef">
                                                <div className="image">
                                                    <img src={item.img} alt="" className='img-fluid'/>

                                                    <ul>
                                                        <li>
                                                            <Link href="/"><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="role">
                                                    <FontAwesomeIcon icon={faKitchenSet}></FontAwesomeIcon>
                                                    <h4>{item.role}</h4>
                                                </div>

                                                <div className="desc">
                                                    <h3 className="name">{item.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>  
                </div>

                {loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                            <button
                                key={idx}
                                onClick={() => {
                                instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Chef
