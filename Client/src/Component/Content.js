import React from 'react'

export default function Content() {
    return (
        <div>
            <section id="content">
                <h2 style={{font:"bold 26px arial"}}>Simple and fast URL shortener!</h2>
                <p>Url Shortner allows to reduce long links from {""}
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>,
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>,
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>,
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Linked In</a>
                    {""} and top sited on the Internet, just paste the long URL and click the Generate Button.
                </p>
                <h2 style={{font:"bold 26px arial"}}>Shorten,share and track</h2>
                <p>Your shortened URLs can be used in publications, advertisements, blogs, forums, e-mails, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with the click counter, you do not have to register.</p>
            </section>
        </div>
    )
}
