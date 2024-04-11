import React from 'react'
import './App.css';


function Nav() {
    return (
        <section>
            <div>
                <nav className="navbar navbar-expand-md bg-success sticky-top border-bottom" data-bs-theme="dark">
                    <div className="container">
                        <a className="navbar-brand d-md-none" href="#">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                            Plantify
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasLabel">Plantify</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body text-light fw-bold">
                                <ul className="navbar-nav flex-grow-1 justify-content-between ">
                                    <li className="nav-item"><a className="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                    </a></li>
                                    <li className="nav-item text-dark"><a className="nav-link text-light fw-bold" href="#">Tour</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Enterprise</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </nav>
                <div className='navheader bg-success'>
                    <div className='container'>
                        <div className='row'>

                            <div className="col-lg-6 p-lg-5 mx-start my-5">
                                <h1 className="display-3 fw-bold  ">Happiness blom for within</h1>
                                <h3 className="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>


                                <div className="d-flex gap-3 justify-content-center lead fw-normal">

                                    <button type="button" class="btn btn-info">
                                        <a className="icon-link text-decoration-none text-light fw-bold" href="#">
                                            Learn more

                                        </a>
                                    </button>
                                    <button type="button" class="btn btn-outline-info">
                                        <a className="icon-link text-decoration-none text-light fw-bold" href="#">
                                            buy

                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6 p-lg-5 gap-3  ">
                                <img src='https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg' className='img-fluid' height={""}></img>



                            </div>


                        </div>

                    </div>
                </div>
            </div>


            <div className='container-fluid'>
                <div className='row my-5'>
                    <div className='col-lg-10'>
                        <h2>Features</h2>
                    </div>
                    <div className='col-lg-2'>
                        <button className='btn btn-primary p-2 mx-5'>view more</button>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Nav
