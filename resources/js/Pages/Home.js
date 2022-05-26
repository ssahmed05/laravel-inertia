import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react'
import Main from '../Layouts/Main';


const Home = ({contact}) => {
    return (
            <Main title="Home page">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Contact List
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered datatable">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone #</th>
                                            <th>Message</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contact.map(userValue =>
                                            <tr key={userValue.id}>
                                                <td>{userValue.id}</td>
                                                <td>{userValue.name}</td>
                                                <td>{userValue.email}</td>
                                                <td>{userValue.phone_no}</td>
                                                <td>{userValue.message}</td>
                                                <td>
                                                    <InertiaLink href={base_url + '/edit-contact/' + userValue.id} className="btn btn-sm btn-primary">Edit</InertiaLink> <InertiaLink href={base_url + '/delete-contact/' + userValue.id} className="btn btn-sm btn-danger">Delete</InertiaLink>

                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </Main>

    // <div  className="alert alert-success" role="alert">
    //     <h1>Welcome To Interia Js</h1>

    // </div>
    )
}

export default Home
