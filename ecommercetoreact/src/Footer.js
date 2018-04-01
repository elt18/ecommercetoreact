import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <div>
        <footer>
          <div className="footer_top footer-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-sm-6">
                  <div className="newsletter">
                    <h4>Sign up for newSletter</h4>
                  </div>
                </div>
                <div className="col-sm-12 col-sm-6">
                  <div className="newsletter text-right">
                    <input className="news_input" type="text" value="" placeholder="Email Address"/>
                    <input className="subscribe_btn" type="button" value="subscribe"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_middel footer-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="footer_link address">
                    <p>Elixir fashion</p>
                    <ul>
                      <li><span>Addresss: </span>ipsum 125 Pall Mall, London, England</li>
                      <li><span>Phone: </span>(0123) 345 6789</li>
                      <li><span>Email: </span>info@domain.com</li>
                    </ul>
                  </div>
                  <div className="footer_icon">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="footer_link">
                    <p>My account</p>
                    <ul>
                      <li><a href="#">My Account</a></li>
                      <li><a href="cart.html">Shopping Cart</a></li>
                      <li><a href="https://www.wishlist.com/">My Wishlist</a></li>
                      <li><a href="#">My Credit Slip</a></li>
                      <li><a href="#">Account Information</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="footer_link res_mar">
                    <p>customer support</p>
                    <ul>
                      <li><a href="#">7/24 Hour Support</a></li>
                      <li><a href="#">Refound Policy</a></li>
                      <li><a href="#">Shipping Guide</a></li>
                      <li><a href="#">International Shipping</a></li>
                      <li><a href="#">Career</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="footer_link res_mar">
                    <p>information</p>
                    <ul>
                      <li><a href="#">About Our Shop</a></li>
                      <li><a href="#">Secure Shopping</a></li>
                      <li><a href="#">Delivery Information</a></li>
                      <li><a href="#">Company Site Map</a></li>
                      <li><a href="#">Privecy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom footer-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="copyright">
                    <p>Copyright 2015 <a href="http://designscrazed.org/">Allie</a> All rights reserved</p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="copyright_icon text-right">
                    <a href="#"><img src="images/footer/paypal-1.png" alt="" /></a>
                    <a href="#"><img src="images/footer/paypal-2.png" alt="" /></a>
                    <a href="#"><img src="images/footer/paypal-3.png" alt="" /></a>
                    <a href="#"><img src="images/footer/paypal-4.png" alt="" /></a>
                    <a href="#"><img src="images/footer/paypal-5.png" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
