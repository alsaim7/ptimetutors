import { useState, useEffect } from "react"

export function Quote() {
    const colorList = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']
    const random = Math.floor(Math.random() * colorList.length)
    // console.log(`Random is ${random}`)
    const url = import.meta.env.VITE_API_URL
    // console.log(import.meta.env)
    const [quote, setQuote] = useState('')
    const fetchQuote = async () => {
        const res = await fetch(url)
        const jsonRes = await res.json()
        // console.log(jsonRes)
        return jsonRes.quote
    }

    useEffect(() => {
        fetchQuote().then((fetchedQuote) => {
            setQuote(fetchedQuote)
        })
    }, [])

    return (
        <div className='container mt-5 mb-5'>
            <div className={`card border-${colorList[random]} text-center`}>
                <div className="card-header">
                    Quote
                </div>
                <div className={`card-body text-${colorList[random]}`}>
                    <blockquote className="blockquote mb-0">
                        <p>{quote? quote.text: 'Loading Quote'}</p>
                        <footer className={`blockquote-footer text-${colorList[random]}`}><cite title="Source Title">{quote? quote.author: 'Loading author'}</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}