import { useEffect } from "react"
import gsap from "gsap"
export function Jobs() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".card1", {
                x: -100,
                opacity: 0,
                duration: 1
            })
            gsap.from(".card2", {
                x: 100,
                opacity: 0,
                duration: 1
            })
        })
        return () => ctx.revert()
    })
    return (
        <div className="container mt-5 mb-5" style={{ height: '100%', overflowX: 'hidden' }}>
            <div className="row">
                <div className="col-sm-6 mb-5 mb-sm-0">
                    <div className="card card1">
                        <div className="card-body">
                            <h4 className="card-title">Part-time Home Tutor</h4>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item"><b>Class: </b>7th</li>
                                <li className="list-group-item"><b>School: </b>St Tresa, Lucknow</li>
                                <li className="list-group-item"><b>Board: </b>ICSE</li>
                                <li className="list-group-item"><b>Address: </b>Meena bakery near phoolbagh, Lucknow</li>
                                <li className="list-group-item"><b>Subjects: </b>Maths & Science</li>
                                <li className="list-group-item"><b>Days: </b>6 days a week</li>
                                <li className="list-group-item"><b>Fees: </b>₹ 2000</li>
                            </ul>
                            <a href="https://forms.gle/9REKWbDp9qf46r38A" className="btn btn-primary">Apply</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-5">
                    <div className="card card2">
                        <div className="card-body">
                            <h4 className="card-title">Part-time Home Tutor</h4>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item"><b>Class: </b>4th</li>
                                <li className="list-group-item"><b>Board: </b>ICSE</li>
                                <li className="list-group-item"><b>Address: </b>Sector 7 basant bihar colony (near CIMAP colony), Lucknow 226022</li>
                                <li className="list-group-item"><b>Subjects: </b>All Subjects</li>
                                <li className="list-group-item"><b>Days: </b>5 days a week</li>
                                <li className="list-group-item"><b>Fees: </b>To be disclosed upon application</li>

                            </ul>
                            <a href="https://forms.gle/9REKWbDp9qf46r38A" className="btn btn-primary">Apply</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}