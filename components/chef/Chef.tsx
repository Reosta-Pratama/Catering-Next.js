import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from "keen-slider/react"

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
                        <div className="keen-slider__slide number-slide1">1</div>
                        <div className="keen-slider__slide number-slide2">2</div>
                        <div className="keen-slider__slide number-slide3">3</div>
                        <div className="keen-slider__slide number-slide4">4</div>
                        <div className="keen-slider__slide number-slide5">5</div>
                        <div className="keen-slider__slide number-slide6">6</div>
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
