import React from 'react'
import Main from '../Layouts/Main'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactOwlCarousel from 'react-owl-carousel';

const AboutUs = () => {

    return (
        <Main title="About">
            <div className="page-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-3">
                            <div className="subhead">About Us</div>
                            <h2 className="title-section">We are <span className="fg-primary">Professional Teams</span> to Growth your Business</h2>

                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of</p>
                        </div>
                        <div className="col-lg-6 py-3">
                            <div className="about-img">
                                <img src="img/about.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="text-center">
                        <div className="subhead">Our Teams</div>
                        <h2 className="title-section">The Expert Team on ReveTive</h2>
                    </div>
                    <ReactOwlCarousel autoplay ={true}>
                        <div className="team-wrap">
                            <div className="team-profile">
                                <img src="img/teams/team_1.jpg" alt="" />
                            </div>
                            <div className="team-content">
                                <h5>Walter White</h5>
                                <div className="text-sm fg-grey">Chief Executive Officer</div>

                                <div className="social-button">
                                    <a href="#"><span className="mai-logo-facebook-messenger"></span></a>
                                    <a href="#"><span className="mai-call"></span></a>
                                    <a href="#"><span className="mai-mail"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-wrap">
                            <div className="team-profile">
                                <img src="img/teams/team_2.jpg" alt="" />
                            </div>
                            <div className="team-content">
                                <h5>Sarah Johanson</h5>
                                <div className="text-sm fg-grey">Chief Technology Officer</div>

                                <div className="social-button">
                                    <a href="#"><span className="mai-logo-facebook-messenger"></span></a>
                                    <a href="#"><span className="mai-call"></span></a>
                                    <a href="#"><span className="mai-mail"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-wrap">
                            <div className="team-profile">
                                <img src="img/teams/team_3.jpg" alt="" />
                            </div>
                            <div className="team-content">
                                <h5>Anna Anderson</h5>
                                <div className="text-sm fg-grey">Product Manager</div>

                                <div className="social-button">
                                    <a href="#"><span className="mai-logo-facebook-messenger"></span></a>
                                    <a href="#"><span className="mai-call"></span></a>
                                    <a href="#"><span className="mai-mail"></span></a>
                                </div>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </div>

            <div className="page-section">
                <div className="container-fluid">
                    <div className="row row-cols-md-3 row-cols-lg-5 justify-content-center text-center">
                        <div className="py-3 px-5">
                            <img src="img/clients/airbnb.png" alt="" />
                        </div>
                        <div className="py-3 px-5">
                            <img src="img/clients/google.png" alt="" />
                        </div>
                        <div className="py-3 px-5">
                            <img src="img/clients/mailchimp.png" alt="" />
                        </div>
                        <div className="py-3 px-5">
                            <img src="img/clients/paypal.png" alt="" />
                        </div>
                        <div className="py-3 px-5">
                            <img src="img/clients/stripe.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </Main>
    )
}

export default AboutUs
