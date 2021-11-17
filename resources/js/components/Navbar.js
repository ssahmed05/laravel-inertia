import { InertiaLink } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'

const Navbar = () => {
    const {url} = history.state == null ? '/' : history.state;
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <InertiaLink className="navbar-brand" href={base_url + '/home'}>Navbar w/ text</InertiaLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className={ url == '/home' ? 'nav-item active' : 'nav-item'}>
                            <InertiaLink className="nav-link" href={base_url + '/home'}>Home <span className="sr-only">(current)</span></InertiaLink>
                        </li>
                        <li className={ url == '/about' ? 'nav-item active' : 'nav-item'}>
                            <InertiaLink className="nav-link" href={base_url + '/about'}>About Us</InertiaLink>
                        </li>
                        <li className={ url == '/contact' ? 'nav-item active' : 'nav-item'}>
                            <InertiaLink className="nav-link" href={base_url + '/contact'}>Contact Us</InertiaLink>
                        </li>

                    </ul>
                    <span className="navbar-text">
                    Navbar text with an inline element
                    </span>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
