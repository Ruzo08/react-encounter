import React, { Component } from 'react';
import {CourseConsumer} from '../Context';
import {Link} from 'react-router-dom';


class Details extends Component {
    render() {
        return (
            <CourseConsumer>
                { value => {
                    const {id, company, img, info, price, title, inCart } = value.detailCourse;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                    <img src={img} alt="Course" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto text-slanted text-blue my-5">
                                    <h1 className="text-center">Jenis Kursus : {title}</h1>
                                    <h4 className="text-title text-center text-uppercase text-muted mt-3 mb-2">
                                        From : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue text-center">
                                        <strong>
                                            Price : <span>Rp.</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">About Course : </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <button className="btn btn-secondary me-2">
                                                Back to Course
                                            </button>
                                        </Link>
                                        <button className="btn btn-primary"
                                            cart
                                            disabled = {inCart?true:false}
                                            onClick={()=> {
                                                value.addToCart(id);
                                                value.openModal(id);
                                                }
                                            }
                                        >
                                            {inCart?"In Cart":"Add to Cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                }
            </CourseConsumer>
        );
    }
}

export default Details;