import { Quote } from './quote'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Description() {
    useEffect(() => {
        const mm= gsap.matchMedia()
        mm.add("(min-width: 1024px)",() => {
            gsap.from('.cardF1', {
                x: -200,
                opacity:0,
                duration: 1,
                // ease: 'power1.in',
                scrollTrigger: {
                    trigger: '.cardF1',
                    start: 'top 75%',
                    end: 'top 80%',
                    // scrub: true,
                    // markers: true
                }
            })

            gsap.from('.cardF2', {
                y: -100,
                opacity:0,
                duration: 1,
                // ease: 'power1.in',
                scrollTrigger: {
                    trigger: '.cardF2',
                    start: 'top 65%',
                    end: 'top 80%',
                    // scrub: true,
                    // markers: true
                }

            })

            gsap.from('.cardF3', {
                x: 200,
                opacity:0,
                duration: 1,
                // ease: 'power1.in',
                scrollTrigger: {
                    trigger: '.cardF3',
                    start: 'top 75%',
                    end: 'top 80%',
                    // scrub: true,
                    // markers: true
                }

            })
        })

        mm.add("(max-width: 768px)",() => {
            gsap.from('.cardF1', {
                x: -100,
                opacity:0,
                duration: 1,
                // ease: 'power1.in',
                scrollTrigger: {
                    trigger: '.cardF1',
                    start: 'top 70%',
                    end: 'top 80%',
                    // scrub: true,
                    // markers: true
                }
            })

            gsap.from('.cardF2', {
                x: 100,
                opacity:0,
                duration: 1,
                // ease: 'power1.in',
                scrollTrigger: {
                    trigger: '.cardF2',
                    start: 'top 70%',
                    end: 'top 80%',
                    // scrub: true,
                    // markers: true
                }

            })

            gsap.from('.cardF3', {
                x: -100,
                opacity:0,
                duration: 1,
                // ease: 'power1.in',
                scrollTrigger: {
                    trigger: '.cardF3',
                    start: 'top 70%',
                    end: 'top 80%',
                    // scrub: true,
                    // markers: true
                }

            })
        })

        return () => mm.revert()
    }, [])
    return (
        <>
            <Quote />

            <div className='container d-flex justify-content-md-center gap-5 mb-5 flex-column flex-md-row align-items-center align-items-md-start' style={{overflowX: 'hidden'}}>
                <div className="cardF1 card mt-3 desCard" style={{ width: "18rem" }}>
                    <img src="https://res.cloudinary.com/dnkqy2kkr/image/upload/v1737121988/ques_kkl9zf.jpg" className="card-img-top" alt="?"/>
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
                <div className="cardF2 card mt-3 desCard" style={{ width: "18rem" }}>
                    <img src="https://res.cloudinary.com/dnkqy2kkr/image/upload/v1737121987/services_ezy60d.jpg" className="card-img-top" alt="services"/>
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
                <div className="cardF3 card mt-3 mb-5 desCard" style={{ width: "18rem" }}>
                    <img src="https://res.cloudinary.com/dnkqy2kkr/image/upload/v1737121987/form_ou4jr7.jpg" className="card-img-top" alt="form"/>
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