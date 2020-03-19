import React from "react"
import { Link, graphql } from "gatsby"
import Nav from "../components/nav"
import "../styles/styles.css"
import ReCAPTCHA from "react-google-recaptcha";

export default () => (

    <>

    <Nav />

    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

    </>

)