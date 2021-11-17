import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'

const Main = ({children}) => {
    return (
        <Fragment>
            <Navbar />
            <section className="container">
                <div className="container">
                    {children}
                </div>
            </section>
        </Fragment>
    )
}

export default Main
