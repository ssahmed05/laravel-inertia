import { InertiaLink } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'

const Navbar = ({title}) => {
    const { url } = history.state == null ? '/' : history.state;
    return (
        <Fragment>
            <div className="back-to-top"></div>

            <header>
                <div className="top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="d-inline-block">
                                    <span className="mai-mail fg-primary"></span> <InertiaLink href="mailto:contact@mail.com">contact@mail.com</InertiaLink>
                                </div>
                                <div className="d-inline-block ml-2">
                                    <span className="mai-call fg-primary"></span> <InertiaLink href="tel:+0011223495">+0011223495</InertiaLink>
                                </div>
                            </div>
                            <div className="col-md-4 text-right d-none d-md-block">
                                <div className="social-mini-button">
                                    <InertiaLink href="#"><span className="mai-logo-facebook-f"></span></InertiaLink>
                                    <InertiaLink href="#"><span className="mai-logo-twitter"></span></InertiaLink>
                                    <InertiaLink href="#"><span className="mai-logo-youtube"></span></InertiaLink>
                                    <InertiaLink href="#"><span className="mai-logo-linkedin"></span></InertiaLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <InertiaLink href={base_url + '/home'} className="navbar-brand">Reve<span className="text-primary">Tive.</span></InertiaLink>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse collapse" id="navbarContent">
                            <ul className="navbar-nav ml-auto pt-3 pt-lg-0">
                                <li className="nav-item">
                                    <InertiaLink href={base_url + '/home'} className="nav-link">Home</InertiaLink>
                                </li>
                                <li className="nav-item active">
                                    <InertiaLink href={base_url + '/about'}  className="nav-link">About</InertiaLink>
                                </li>
                                <li className="nav-item active">
                                    <InertiaLink href={base_url + '/services'}  className="nav-link">Services</InertiaLink>
                                </li>
                                <li className="nav-item">
                                    <InertiaLink href={base_url + '/contact-us'} className="nav-link">Contact</InertiaLink>
                                </li>

                                <li className="nav-item">
                                    <InertiaLink href="portfolio.html" className="nav-link">Projects</InertiaLink>
                                </li>
                                <li className="nav-item">
                                    <InertiaLink href="blog.html" className="nav-link">News</InertiaLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="page-banner bg-img bg-img-parallax overlay-dark" style={{ backgroundImage: `url("img/bg_image_3.jpg")` }}>
                    <div className="container h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-lg-8">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0">
                                        <li className="breadcrumb-item"><InertiaLink href={base_url + '/home'}>Home</InertiaLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                    </ol>
                                </nav>
                                <h1 className="fg-white text-center">{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Navbar
