import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import "../styles/cmmchub.css"



export default () => (


    <div className="nav">
        <div><Link to="/"><img src="../images/cmmc-logo-white.png" className="image" /></Link></div>
        <div>
            <Link to="/" className="link" activeClassName="w--current">Articles</Link>
            <Link to="/events" className="link" activeClassName="w--current">Events</Link>
            <a href="https://community.cmmchub.com/" className="link" target="_blank" activeClassName="w--current">Forum</a>
            {/*<Link to="/contact" className="link" activeClassName="w--current">Contact</Link>*/}
        </div>
    </div>
)