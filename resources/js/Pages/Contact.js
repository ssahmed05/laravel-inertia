import React, { useState } from 'react'
import Main from '../Layouts/Main'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Inertia } from '@inertiajs/inertia';

const Contact = () => {

    const mapStyles = {
        height: "100vh",
        width: "100%"};

      const defaultCenter = {
        lat: 24.8607, lng: 67.0011 // Karachi
      }
      const [name, setName] = useState({
          name : '',
          email : '',
          subject : '',
          phone_no : '',
          message : ''
      })
      const changeHandler = (e) => {
        setName(name =>({...name , [e.target.id] : e.target.value}));
      }
      const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name.name);
        formData.append('email', name.email);
        formData.append('subject', name.subject);
        formData.append('phone_no', name.phone_no);
        formData.append('message', name.message);
        Inertia.post(base_url + '/contact-us', formData);
      }
    return (
        <Main title="Contact Us">
            <div className="page-section">
                <div className="container">
                    <div className="text-center">
                        <h2 className="title-section mb-3">Stay in touch</h2>
                        <p>Just say hello or drop us a line. You can manualy send us email on <a href="mailto:example@mail.com">example@mail.com</a></p>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-8">
                            <form action="#" method="post" onSubmit={submitHandler} className="form-contact" id="myform">
                                <div className="row">
                                    <div className="col-sm-6 py-2">
                                        <label htmlFor="name" className="fg-grey">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter name.." value={name.name}  onChange={changeHandler}/>
                                    </div>
                                    <div className="col-sm-6 py-2">
                                        <label htmlFor="email" className="fg-grey">Email</label>
                                        <input type="text" className="form-control" id="email" placeholder="Email address.." value={name.email} onChange={changeHandler} />
                                    </div>
                                    <div className="col-12 py-2">
                                        <label htmlFor="subject" className="fg-grey">Subject</label>
                                        <input type="text" className="form-control" id="subject" placeholder="Subject.." value={name.subject} onChange={changeHandler} />
                                    </div>
                                    <div className="col-12 py-2">
                                        <label htmlFor="subject" className="fg-grey">Phone #</label>
                                        <input type="text" className="form-control" id="phone_no" placeholder="Contact.." value={name.phone_no} onChange={changeHandler}/>
                                    </div>
                                    <div className="col-12 py-2">
                                        <label htmlFor="message" className="fg-grey">Message</label>
                                        <textarea id="message" rows="8" defaultValue={name.message} className="form-control" placeholder="Enter message.." onChange={changeHandler}>

                                        </textarea>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="submit" className="btn btn-primary px-5">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="maps-container">
                <LoadScript
                    googleMapsApiKey='AIzaSyANJgNkVqQhy4JPmEfiL6uhFISVG7-_Lbw'>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                    />
                </LoadScript>
            </div>

        </Main>
    )
}

export default Contact
