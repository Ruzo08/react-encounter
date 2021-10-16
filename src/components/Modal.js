import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {CourseConsumer} from '../Context';

class Modal extends Component {
    render() {
        return (
            <CourseConsumer>
                {(value) => {
                        const {modalOpen, closeModal} = value;
                        const {img, title, price} = value.modalCourse;

                        if(!modalOpen){
                            return null;
                        } else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal" className="col-8 mx-auto py-2 col-md-6 col-lg-4 text-center text-capitalize">
                                                <h5>Item Added to Cart</h5>
                                                <img src={img} alt="course" className="img-fluid" />
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">price : Rp. {price}</h5>
                                                <Link to="/">
                                                    <button className="btn btn-secondary me-2" onClick={()=> closeModal()}>
                                                        Continue Shopping
                                                    </button>
                                                </Link>
                                                <Link to="/cart">
                                                    <button className="btn btn-primary" cart onClick={()=> closeModal()}>
                                                        Go To Cart
                                                    </button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>

                                </ModalContainer>
                            )
                        }
                    }
                }
            </CourseConsumer>
        );
    }
}

export default Modal;

const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;

    #modal{
        background: var(--mainWhite);
    }
`;