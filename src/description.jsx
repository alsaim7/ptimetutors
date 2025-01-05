import './description.css'
import { Quote } from './quote'
import { Link } from 'react-router-dom'
import Ques from '../images/ques.jpg'
import Services from '../images/services.jpg'
import Form from '../images/form.jpg'

export function Description() {
    return (
        <>
            <Quote />

            <div className='container d-flex justify-content-md-center gap-5 mb-5 flex-column flex-md-row align-items-center align-items-md-start'>
                <div className="card mt-3 desCard" style={{ width: "18rem" }}>
                    <img src={Ques} className="card-img-top" alt="?" />
                    <div className="card-body">
                        <h5 className="card-title">Why choose us?</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Affordable tutor services</li>
                            <li className="list-group-item">Teaching in the student's preferred language</li>
                            <li className="list-group-item">Beyond tutoring, we ensure quality learning</li>
                            <li className="list-group-item">Reliable and responsible support</li>
                        </ul>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div className="card mt-3 desCard" style={{ width: "18rem" }}>
                    <img src={Services} className="card-img-top" alt="services" />
                    <div className="card-body">
                        <h5 className="card-title">Our Services</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Personal Tutors</li>
                            <li className="list-group-item">Online & Offline Tutoring</li>
                            <li className="list-group-item">Affordable Pricing</li>
                            <li className="list-group-item">All Classes & Boards Covered</li>
                            <li className="list-group-item">Customer Support</li>
                        </ul>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div className="card mt-3 mb-5 desCard" style={{ width: "18rem" }}>
                    <img src={Form} className="card-img-top" alt="form" />
                    <div className="card-body">
                        <h5 className="card-title">Steps to Register</h5>
                        <ul className="list-group list-group-flush mb-2">
                            <li className="list-group-item">Registration is free</li>
                            <li className="list-group-item">Click on the Register button</li>
                            <li className="list-group-item">Fill out the form and submit it</li>
                            <li className="list-group-item">Our team will contact you soon.</li>
                            <li className="list-group-item">Or visit the Contact Us page for direct assistance.</li>
                        </ul>
                        <a href="https://forms.gle/xW8rZiwMRCftZF3WA" className="card-link">Register</a>
                        <Link className="card-link" to="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}