import "./Footer.css"

function Footer() {
  return (
    <footer className="foot">
        <div className="content-wrap">
            <div className="content">
                <div className="block">
                    <div className="blocktext">
                        <h3 className="footerh3">Retail Hours:</h3>
                        <br></br>
                        <p className="footerp">Tues - Thurs: 11:00am - 9:30pm</p>
                        <br></br>
                        <p className="footerp">Fri - Sat: 11:00am - 10:30pm</p>
                        <br></br>
                        <p className="footerp">Sun: 12:00pm - 9:30pm</p>
                        <br></br>
                        <p className="footerp">Mon: Closed</p>
                        <br />
                        <p className="footerp" id="location-gap">1039 S. Roane St, Harriman, TN 37748</p>
                    </div>
                </div>
                <div className="block">
                    <div className="blocktext">
                        <h3 className="footerh3">Contact</h3>
                        <br></br>
                        <p className="footerp" id="boldening">For all Orders:</p>
                        <br />
                        <p className="footerp">Call 865-882-3900</p>
                        <br></br>
                        <p className="footerp">Walk-Ins are welcome as well!</p>
                    </div>
                </div>
                <div className="block">
                    <div className="blocktext">
                        <h3 className="footerh3">Updates</h3>
                        <br></br>
                        <p className="footerp" style={{lineHeight: "1.8"}}>For information related to closures or holiday hours, check our <a id="gbusiness" href="https://share.google/4l8dAjz9Sf7j6rEb0" target="_blank" rel="noopener noreferrer">Google Business Profile</a>. Any updates will also be posted in the restaurant itself.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer