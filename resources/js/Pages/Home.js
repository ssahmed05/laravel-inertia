import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import Main from '../Layouts/Main';


const Home = ({users}) => {

    return (
            <Main>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(userValue =>
                                    <tr key={userValue.id}>
                                        <td>{userValue.id}</td>
                                        <td>{userValue.name}</td>
                                        <td>{userValue.email}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Main>

    // <div  className="alert alert-success" role="alert">
    //     <h1>Welcome To Interia Js</h1>

    // </div>
    )
}

export default Home
