import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
export function Form() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        subject: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        console.log(form)
        if (!form.checkValidity()) {
            form.classList.add('was-validated')
            setLoading(false)
            return
        }
        const action = 'https://formsubmit.co/primetutors.lko@gmail.com'
        const bodyData = new URLSearchParams({
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _captcha: "false" // extra field if needed
        }).toString();
        try {
            const res = await fetch(action, {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: bodyData
            })

            if (res.ok) {
                setFormData({ email: '', subject: '', message: '' })
                setTimeout(() => {
                    alert('Form Submitted!')
                }, 1000)
                setLoading(false)
                // navigate('/')
            } else {
                alert('Form submission failed. Please try again.')
                setLoading(false)
            }
        } catch (e) {
            alert('Something went wrong!')
        }
    }

    return (
        <>
            <form className="container mb-3 mt-4 needs-validation" onSubmit={handleSubmit} noValidate>
                <div style={{ textAlign: 'center' }}>{loading ? <ClipLoader
                    color="white"
                /> : null}</div>
                <div className="row">
                    <div className="mb-3 col-md-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} value={formData.email} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" name="subject" onChange={handleChange} value={formData.subject} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="msg" className="form-label">Message</label>
                    <textarea rows='4' className="form-control" id="msg" name="message" onChange={handleChange} value={formData.message} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}