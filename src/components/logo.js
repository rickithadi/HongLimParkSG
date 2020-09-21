import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/">
      <p> {props.title}<span style={{color:'#c03221'}}>SG</span></p>
      </Link>
  </div>
)

export default Logo
