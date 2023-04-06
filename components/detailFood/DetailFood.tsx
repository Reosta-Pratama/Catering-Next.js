import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import Link from 'next/link';

const DetailFood = () => {
    return (
        <section className='food'>
            <div className="container">
                <div className="food-carousel">
                    <div className="item">
                        <div className="image">
                            <img src="https://source.unsplash.com/random" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 left">
                        <div className="content-food">
                            <div className="price">
                                <span>Rp.100.000</span>
                            </div>

                            <div className="title">
                                <h2 className="name">
                                    Testing

                                    <span className="rate">5
                                        <i className="fa-solid fa-star"></i>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    </span>
                                </h2>
                            </div>

                            <div className="buy">
                                <p className="text-buy">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    Beli:
                                </p>

                                <div className="icon">
                                    <Link href="{{ $product->products_tokopedia }}" target="_blank">
                                        <div className="image">
                                            <img
                                                src="img/marketplace/tokopedia.png"
                                                alt="img/marketplace/tokopedia.png"
                                                className="img-fluid"/></div>
                                    </Link>

                                    <Link href="{{ $product->products_shopee }}" target="_blank">
                                        <div className="image">
                                            <img
                                                src="img/marketplace/shopee.png"
                                                alt="img/marketplace/shopee.png"
                                                className="img-fluid"/></div>
                                    </Link>

                                    <Link href="{{ $product->products_grab }}" target="_blank">
                                        <div className="image">
                                            <img
                                                src="img/marketplace/grab.jpg"
                                                alt="img/marketplace/grab.jpg"
                                                className="img-fluid"/></div>
                                    </Link>

                                    <Link href="{{ $product->products_gojek }}" target="_blank">
                                        <div className="image">
                                            <img
                                                src="img/marketplace/gojek.png"
                                                alt="img/marketplace/gojek.png"
                                                className="img-fluid"/></div>
                                    </Link>
                                </div>
                            </div>

                            <div className="desc">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                    recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 right">
                        <div className="content-food">
                            <div className="info">
                                <span className="category">
                                    Kategori:
                                    <a href="" rel="tag">Food</a>
                                </span>

                                <span className="date">
                                    Tanggal:
                                    <Link href="/">
                                        06 March 2023
                                    </Link>
                                </span>
                            </div>

                            <div className="medsos">
                                <p className="share">
                                    <i className="fa-solid fa-share"></i>
                                    Ayo bagikan:
                                </p>
                                <div className="icon">
                                    <Link
                                        href="https://www.facebook.com/share.php?u={{ url('food/'.$product->friendly_url)}}"
                                        target="_blank">
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    </Link>
                                    <Link
                                        href="https://twitter.com/intent/tweet?url={{ url('food/'.$product->friendly_url)}}"
                                        target="_blank">
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    </Link>
                                    <Link
                                        href="whatsapp://send?text={{ url('food/'.$product->friendly_url)}}"
                                        target="_blank">
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="review">
                    <div className="text">
                        <h3 className="subtitle">
                            Ulasan Testing
                        </h3>

                        <h2 className="title">
                            Ulasan
                        </h2>
                    </div>

                    <div className="row" id="commentReview">
                        <div id="reviewer" className="col-lg-6">
                            <div className="content-review">
                                <div className="image">
                                    <img src="img/icon/user.jpeg" alt="img/icon/user.jpeg" className="img-fluid"/>
                                </div>

                                <div className="desc">
                                    <h3 className="name">Testing</h3>
                                    <span className="date">10 Maret 2023
                                    </span>
                                    <p>Testing</p>

                                    <span className="rate">
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id="reviewer" className="col-lg-6">
                            <div className="content-review">
                                <div className="image">
                                    <img src="img/icon/user.jpeg" alt="img/icon/user.jpeg" className="img-fluid"/>
                                </div>

                                <div className="desc">
                                    <h3 className="name">Testing</h3>
                                    <span className="date">10 Maret 2023
                                    </span>
                                    <p>Testing</p>

                                    <span className="rate">
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="comment">
                        <form
                            id="add-review"
                            className="form-comment"
                            method="POST"
                            encType="multipart/form-data">
                            <div className="title">
                                <h3 className="name"></h3>
                            </div>

                            <input type="hidden" value="" name="product_name"/>

                            <div className="your-rating">
                                <span>Your Rating</span>
                                <div className="rating">
                                    <input type="radio" name="rating" value="5" id="5"/>
                                    <label htmlFor="5">☆</label>
                                    <input type="radio" name="rating" value="4" id="4"/>
                                    <label htmlFor="4">☆</label>
                                    <input type="radio" name="rating" value="3" id="3"/>
                                    <label htmlFor="3">☆</label>
                                    <input type="radio" name="rating" value="2" id="2"/>
                                    <label htmlFor="2">☆</label>
                                    <input type="radio" name="rating" value="1" id="1"/>
                                    <label htmlFor="1">☆</label>
                                </div>
                            </div>

                            <div className="mt-3 mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username.." autoComplete="off"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="commentuser" className="form-label">Comment</label>
                                <textarea
                                    className="form-control"
                                    id="commentuser"
                                    name="comment"
                                    rows={4} 
                                    placeholder="Write your comment.."></textarea>
                            </div>

                            <button type="submit" className="btn">Post Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailFood