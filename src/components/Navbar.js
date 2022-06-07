import React, {useState} from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
    const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage src="../assets/images/nouns_glasses.png" alt="Nouns Glasses" placeholder="none"/>
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/merch"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            merch
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
