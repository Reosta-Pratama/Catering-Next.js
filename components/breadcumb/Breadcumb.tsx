import React from 'react'

const Breadcumb = () => {
    return (
        <section className='breadcumb'>
            <div className="container">
                <div className="text">
                    <h1 className="title">test</h1>
                </div>

                <div className="desc">
                    <a href="">Ufaira Kitchen</a>
                    <span className="dots">/</span>
                    <a href="">Menu</a>
                    <span className="dots">/</span>
                    <span className="name">test</span>
                </div>
            </div>

            <div className="rtop">
                <div className="image">
                    <img
                        src="img/icon/rectangle.png"
                        alt="img/icon/rectangle.png"
                        className="img-fluid"/>
                </div>
            </div>

            <div className="rbottom">
                <div className="image">
                    <img
                        src="img/icon/rectangle.png"
                        alt="img/icon/rectangle.png"
                        className="img-fluid"/>
                </div>
            </div>
        </section>
    )
}

export default Breadcumb
