import React, { Fragment,useEffect } from 'react'
import Navbar from '../components/Navbar'

import "datatables.net-bs4/js/dataTables.bootstrap4.min";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import Footer from '../components/Footer';


const Main = ({title ,children}) => {
    useEffect(() => {
        document.title = title;
        $('.datatable').DataTable();


    })

    return (
        <Fragment>
            <Navbar title={title} />
            <section className="container-fluid">

                    {children}

            </section>
            <Footer/>
        </Fragment>
    )
}

export default Main
