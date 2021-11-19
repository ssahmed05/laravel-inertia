import React, { Fragment,useEffect } from 'react'
import Navbar from '../components/Navbar'

import "datatables.net-bs4/js/dataTables.bootstrap4.min";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
const Main = ({title ,children}) => {
    useEffect(() => {
        document.title = title;
        $('.datatable').DataTable();
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
