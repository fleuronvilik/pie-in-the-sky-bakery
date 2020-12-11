import React from "react"
import { Link } from "gatsby"

const Aside = () => (
  <div className="aside">
    <aside className="sidebar-primary">
      <h3>Testimonials</h3>
      <blockquote>
        <p>Merilee sure knows how to bake! Not a week goes by that I don't stop in for a slice of her cherry pie. They truly are just like Mother used to make.</p>
        <cite>Elton Higbee (age 94)</cite>
      </blockquote>
    </aside>
    <aside className="sidebar-secondary">
      <h3>Pie of the Month</h3>
      <img src="/images/pi-day.jpg" alt="Pi Day Pie with Strawberry filling."/>
    </aside>
  </div>
)

export default function Layout({ children, withSidebar, childrenClassName }) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/"><img src="/images/logo.png" alt="Pie in the Sky Bakery, Springdale, VT. Click for home."/></Link>
      </header>
      <div className="bkgdimg"></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">Menu</Link></li>
          <li><Link to="#">Catering</Link></li>
          <li><Link to="/gallery/">Pie Gallery</Link></li>
          <li><Link to="/history/">About</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </nav>
        <div className={childrenClassName}>
          {children}
          {withSidebar && <Aside />}
        </div>
      <footer>
        <p>Copyright 2017, Pie in the Sky Bakery &#183; 34 Main Street &#183; Springdale, VT &#183; <a href="tel:802-555-7437">(802) 555-PIES</a></p>
        <p>
          <a href="http://www.twitter.com" target="_blank" rel="noreferrer"><img src="/images/twitter1.png" alt="Twitter."/></a>
          <a href="http://www.pinterest.com" target="_blank" rel="noreferrer"><img src="/images/pin2.png" alt="Pinterest."/></a>
          <a href="http://www.tumblr.com" target="_blank" rel="noreferrer"><img src="/images/tumblr3.png" alt="Tumblr."/></a>
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer"><img src="/images/insta4.png" alt="Instagram."/></a>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer"><img src="/images/fb5.png" alt="Facebook."/></a>
        </p>
      </footer>
    </div>
  )
}