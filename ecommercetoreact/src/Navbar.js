import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <div>
        <div className="mainmenu float-right">
          <nav>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><a href="#">NEW</a></li>
              <li><a href="#">FEATURED</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">BRAND</a></li>
            <li><Link to="/about">ABOUT</Link></li>
              <li><a href="contact.html">CONTACT</a></li>
              <li className="shop_icon">
                <a href="checkout.html"><img src="images/menu_icon_img.png" alt="" /></a>
                <span>10</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar;
