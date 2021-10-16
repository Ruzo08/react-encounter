import React, { Component } from 'react';
import logo from "../image/logo5.png";
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                <div class="row justify-content-end bg-dark">
                    <div class="col-3 py-2">
                        <span className="text-light me-5">
                            <Link to="/cart">
                                <a className="link-light" data-toggle="tooltip" data-placement="top" title="My Cart">
                                    <i className="fa fa-cart-plus mx-2"/>
                                </a>
                            </Link>
                        </span>
                        <span className="text-light me-5">
                            <a className="link-light" data-toggle="tooltip" data-placement="top" title="Sign In" href="#">
                                <i class="fas fa-user-circle" data-bs-toggle="modal" data-bs-target="#login"/>
                            </a>
                        </span>
                        <span className="text-light">
                            <a className="link-light" data-toggle="tooltip" data-placement="top" title="Sign Up" href="#">
                                <i class="fas fa-user-plus" data-bs-toggle="modal" data-bs-target="#signup"/>
                            </a>
                        </span>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-sm-5">
                        <div class="container-fluid">
                            <Link to="/">
                                <a class="navbar-brand me-5">
                                    <img src={logo} className="img-fluid" alt="store"/>
                                </a>
                            </Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"/>
                            </button>
                        
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link to="/galeri" className="text-decoration-none">
                                            <a class="nav-link active">Galeri</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/contact" className="text-decoration-none">
                                            <a class="nav-link active">Contact</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/our-partner" className="text-decoration-none">
                                            <a class="nav-link active">Our Partner</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* <!-- Modal LOGIN --> */}
                <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body text-center">
                                <i class="fas fa-spinner fa-pulse text-danger fs-1"/>
                                <h4 className="pt-2">Mohon Maaf !</h4>
                                <p>Fitur LOGIN belum tersedia</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal SIGN UP --> */}
                <div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body text-center">
                                <i class="fas fa-spinner fa-pulse text-danger fs-1"/>
                                <h4 className="pt-2">Mohon Maaf !</h4>
                                <p>Fitur SIGNUP belum tersedia</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
            
            
        );
    }
}

export default Navbar;