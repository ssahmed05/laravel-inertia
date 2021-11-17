import React from 'react'
import Main from '../Layouts/Main'

const ContactUs = () => {
    return (
        <Main>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Contact Us</div>
                    <div className="card-body">

                        <form action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="name" id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Name">Email</label>
                                <input type="text" name="name" id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Name">Phone #</label>
                                <input type="text" name="name" id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Name">Message</label>
                                <textarea name="message" id="" cols="30" className="form-control">

                                </textarea>
                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <button type='button' className="btn btn-success">Save</button>
                            </div>
                        </form>

                    </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default ContactUs
