import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>

            <footer className="page-footer">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 py-3">
                    <h3>Reve<span className="fg-primary">Tive.</span></h3>
                    </div>
                    <div className="col-lg-3 py-3">
                    <h5>Contact Information</h5>
                    <p>301 The Greenhouse, Custard Factory, London, E2 8DY.</p>
                    <p>Email: example@mail.com</p>
                    <p>Phone: +00 112323980</p>
                    </div>
                    <div className="col-lg-3 py-3">
                    <h5>Company</h5>
                    <ul className="footer-menu">
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">News & Feed</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-3 py-3">
                    <h5>Newsletter</h5>
                    <form action="#">
                        <input type="text" className="form-control" placeholder="Enter your email"/>
                        <button type="submit" className="btn btn-primary btn-lg mt-2">Submit</button>
                    </form>
                    </div>
                </div>

                <hr/>

                <div className="row mt-4">
                    <div className="col-md-6">
                    <p>Copyright 2020. This template designed by <a href="https://macodeid.com">MACode ID</a></p>
                    </div>
                    <div className="col-md-6 text-right">
                    <div className="sosmed-button">
                        <a href="#"><span className="mai-logo-facebook-f"></span></a>
                        <a href="#"><span className="mai-logo-twitter"></span></a>
                        <a href="#"><span className="mai-logo-youtube"></span></a>
                        <a href="#"><span className="mai-logo-linkedin"></span></a>
                    </div>
                    </div>
                </div>
                </div>
            </footer>


        </Fragment>
    )
}

export default Footer
