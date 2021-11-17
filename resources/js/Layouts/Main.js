import React, { Fragment,useEffect } from 'react'
import Navbar from '../components/Navbar'

const Main = ({title ,children}) => {
    useEffect(() => {
        document.title = title;
    })
    return (
        <Fragment>
            <Navbar />
            <section className="container">

                    {children}

            </section>
        </Fragment>
    )
}

export default Main
