import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import Main from '../Layouts/Main'

const ContactUs = ({errors}) => {

    const[value, setValue] = useState({
        name     : '',
        email    : '',
        phone_no : '',
        message  : '',

    });
    function handleChange(e){
        setValue(value=> ({...value,[e.target.id] : e.target.value}));
        console.log(value);
    }

    function submitHandler(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name',value.name);
        formData.append('email',value.email);
        formData.append('phone_no',value.phone_no);
        formData.append('message',value.message);
        Inertia.post(base_url + '/contact', formData)

    }

    return (
        <Main title="Contact Us">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Contact Us</div>
                        <div className="card-body">
                            <form onSubmit={submitHandler} method="post">
                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" value={value.name} onChange={handleChange} />
                                    {errors.name && <span className="text-danger">{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Name">Email</label>
                                    <input type="text" name="email" id="email" className="form-control" value={value.email} onChange={handleChange}/>
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Name">Phone #</label>
                                    <input type="text" name="phone_no" id="phone_no" className="form-control" value={value.phone_no} onChange={handleChange}/>
                                    {errors.phone_no && <span className="text-danger">{errors.phone_no}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Name">Message</label>
                                    <textarea name="message" id="message" cols="30" defaultValue={value.message} className="form-control" onChange={handleChange}>

                                    </textarea>
                                    {errors.message && <span className="text-danger">{errors.message}</span>}
                                </div>
                                <div className="form-group d-flex justify-content-center">
                                    <button type='submit' className="btn btn-success">Save</button>
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
