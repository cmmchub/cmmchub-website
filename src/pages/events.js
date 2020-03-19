import React from "react"
import { Link, graphql } from "gatsby"
import Nav from "../components/nav"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "../styles/styles.css"
import "../styles/cmmchub.css"



export default () => (

    <>

    <SEO title="CMMC Events" />

      

      <div className="hero" id="vantajs">
      <Nav />
        <div className="intro-text">
          <div className="div-block">
            <h1 className="headline">CMMC Evenst & Meetups</h1>
            <div className="text-block">Find the latest events around the world here! If you would like to learn more information on how we can help promote please email events@cmmchub.com.</div>
          </div>
        </div>
      </div>

      <div class="event-list">
    <div class="event-card">
      <div id="w-node-ec80bbd818ff-d0f97440" class="event-info">
        <a href="http://www.cvent.com/events/isac-md-professional-development-cmmc-katie-arrington-chief-information-security-officer-office-of-t/event-summary-7127edc84bca4de0a8b403b9ba93f254.aspx?i=d5d0f449-22db-495e-853d-978e497a63bc" target="_blank"><h1 class="event-headline">ISAC-MD Professional Development: CMMC - Katie Arrington, Chief Information Security Officer, Office of the Under Secretary of Defense for Acquisition ↗</h1></a>
        <div class="event-date">May 01, 2015 · Annapolis, MD</div>
      </div>
    </div>

    <h1>More coming soon!</h1>
    <br />
    <br />
    <br />
  </div>




      </>

)