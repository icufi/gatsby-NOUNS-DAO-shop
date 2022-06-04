import React from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"

import glasses from "../assets/images/nouns_glasses.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={glasses} alt="Nouns Glasses" />
          </Link>
          <button className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link to="/merch" className="nav-link" activeClassName="active-link">
            merch
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
