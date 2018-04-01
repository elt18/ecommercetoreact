import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return (
      <div>
      <header>
        <div className="container">
          <div className="header_top">
            <div className="row">
              <div className="col-md-6">
                <div className="header_top_left float-left">
                  <ul className="social_icon">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                  <ul className="social_others">
                    <li><a><i className="fa fa-phone"></i>+8801711223344</a></li>
                    <li><a href="#"><i className="fa fa-envelope-o"></i>support@domain.com</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="header_top_right text-right">
                  <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Register / Login</a></li>
                    <li className="searchbox">
                      <input type="search" placeholder="Search......" name="search" className="searchbox-input" required />
                    <input type="submit" className="searchbox-submit" value="" />
                      <span className="searchbox-icon"><i className="fa fa-search"></i></span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
          <div className="container">
            <div className="row mega_relative">
              <div className="col-xs-12 col-sm-2">
                <div className="logo head_lo">
                  <a href="index.html"><img src="images/logo.png" alt="Logo" /></a>
                </div>
              </div>
              <div className="col-sm-10">

              </div>
            </div>
          </div>
      </header>
      <div className="mobile-menu-area">
        <div className="container">
          <div className="mobile-menu">
            <nav id="dropdown">
              <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="#">NEW</a></li>
                <li><a href="#">FEATURED</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">BRAND</a></li>
              <li><a href="#">OFFERS</a></li>
                <li><a href="#">CONTACT</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="slider_area">
        <div className="fullwidthbanner">
          <ul>
            <li data-transition="random" data-slotamount="7" data-masterspeed="300"  data-saveperformance="off" >
              <img src="images/slider/slider_bg-2.jpg"  alt="mainbanner-31"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
              <div className="tp-caption banner1 tp-fade tp-resizeme"
                data-x="910"
                data-y="20"
                data-speed="300"
                data-start="500"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                data-end="8700"
                data-endspeed="300">
                <img src="images/slider/slide-2.png" alt="" />
              </div>

              <div className="tp-caption banner12 tp-fade tp-resizeme"
                 data-x="385"
                 data-y="145"
                data-speed="300"
                data-start="800"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">ELIXIR T-08
              </div>

              <div className="tp-caption banner13 tp-fade tp-resizeme"
                data-x="385"
                data-y="190"
                data-speed="300"
                data-start="1100"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">FEELING YOUR IMAGINTION
              </div>

              <div className="tp-caption banner21 tp-fade tp-resizeme"
                data-x="385"
                data-y="273"
                data-speed="300"
                data-start="800"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">
                100% COMBED COTTON
              </div>

              <div className="tp-caption banner21 tp-fade tp-resizeme"
                data-x="385"
                data-y="309"
                data-speed="300"
                data-start="1000"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">
                COLOR: BLUE
              </div>

              <div className="tp-caption banner21 tp-fade tp-resizeme"
                data-x="385"
                data-y="345"
                data-speed="300"
                data-start="1100"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">
                ROUND NECK & HALF SLEEVES
              </div>

              <div className="tp-caption banner21 tp-fade tp-resizeme"
                data-x="385"
                data-y="381"
                data-speed="300"
                data-start="1100"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">
                classNameIC FIT, SLIGHTLY LONG
              </div>

              <div className="tp-caption banner22 tp-fade tp-resizeme"
                data-x="385"
                data-y="418"
                data-speed="300"
                data-start="1400"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">
                GSM: 160
              </div>

              <div className="tp-caption banner23 tp-fade tp-resizeme"
                data-x="385"
                data-y="450"
                data-speed="300"
                data-start="1700"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                data-end="8700"
                data-endspeed="300">
                PRICE: $ 29.99
              </div>

              <div className="tp-caption banner2 tp-fade tp-resizeme"
                data-x="385"
                data-y="530"
                data-speed="300"
                data-start="1800"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >
                <a className="slide_btn" href="#">SHOP NOW</a>
              </div>
            </li>
            <li data-transition="random" data-slotamount="7" data-masterspeed="300" data-title="Slide2" data-saveperformance="off" >
              <img src="images/slider/slider_bg-1.jpg"  alt="mainbanner-21"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
            <div className="tp-caption tp-fade zindex248"
                data-x="910"
                data-y="20"
                data-speed="300"
                data-start="800"
                data-easing="Power3.easeInOut"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">
                <img src="images/slider/slide-1.png" alt="" />
              </div>

              <div className="tp-caption banner12 tp-fade tp-resizeme"
                 data-x="385"
                 data-y="145"
                data-speed="300"
                data-start="800"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300">ELIXIR T-08
              </div>

              <div className="tp-caption banner13 tp-fade tp-resizeme"
                data-x="385"
                data-y="190"
                data-speed="300"
                data-start="1100"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >FEELING YOUR IMAGINTION
              </div>

              <div className="tp-caption banner21 tp-fade tp-resizeme"
                data-x="385"
                data-y="273"
                data-speed="300"
                data-start="800"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >
                100% COMBED COTTON
              </div>

              <div className="tp-caption banner21 tp-fade tp-resizeme"
                data-x="385"
                data-y="309"
                data-speed="300"
                data-start="1000"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >
                COLOR: GRAY BLACK
              </div>

              <div className="tp-caption banner21 tp-fade tp-resizeme"
                data-x="385"
                data-y="345"
                data-speed="300"
                data-start="1100"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >
                ROUND NECK & HALF SLEEVES
              </div>

              <div className="tp-caption banner21 tp-fade tp-resizeme"
                data-x="385"
                data-y="381"
                data-speed="300"
                data-start="1100"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >
                classNameIC FIT, SLIGHTLY LONG
              </div>

              <div className="tp-caption banner22 tp-fade tp-resizeme"
                data-x="385"
                data-y="418"
                data-speed="300"
                data-start="1400"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >
                GSM: 180
              </div>

              <div className="tp-caption banner23 tp-fade tp-resizeme"
                data-x="385"
                data-y="450"
                data-speed="300"
                data-start="1700"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >PRICE: $ 35.99
              </div>

              <div className="tp-caption banner2 tp-fade tp-resizeme"
                data-x="385"
                data-y="530"
                data-speed="1800"
                data-start="500"
                data-easing="Power3.easeInOut"
                data-splitin="none"
                data-splitout="none"
                data-elementdelay="0"
                data-endelementdelay="0"
                 data-end="8700"
                data-endspeed="300"
                >
                <a className="slide_btn" href="#">SHOP NOW</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <section className="product_area section-padding">
        <div className="padding_right main_single_product">
          <div className="single_product">
            <div className="product_img">
              <img src="images/product/tre-shirt-1.png" alt="DARK BLUE IMAGE" />
            </div>
            <div className="product_text dark_product">
              <h1>DARK BLUE</h1>
            </div>
          </div>
        </div>
        <div className="padding_left main_single_product">
          <div className="single_product single_product_two">
            <div className="product_img">
              <img src="images/product/tre-shirt-1.png" alt="DARK BLUE IMAGE" />
            </div>
            <div className="product_text_two product_text">
              <h1>MEN'S TEE</h1>
              <p>100% COMBED COTTON</p>
              <p>COLOR: DARK BLUE</p>
              <p>ROUND NECK & HALF SLEEVES</p>
              <p>classNameic fit, slightly long</p>
              <p>GSM: 180</p>
              <p>PRICE: $ 21.99</p>
              <a className="shop_now_btn" href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="padding_right main_single_product section-padding-top">
          <div className="single_product single_product_two">
            <div className="product_img tre_shirt_2">
              <img src="images/product/tre-shirt-2.png" alt="DARK BLUE IMAGE" />
            </div>
            <div className="product_text_two tre_shirt_2_text product_text">
              <h1>MEN'S TEE</h1>
              <p>100% COMBED COTTON</p>
              <p>COLOR: WHITE & BLACK</p>
              <p>ROUND NECK & HALF SLEEVES</p>
              <p>classNameic fit, slightly long</p>
              <p>GSM: 180</p>
              <p>PRICE: $ 21.99</p>
              <a className="shop_now_btn" href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="padding_left main_single_product section-padding-top">
          <div className="single_product">
            <div className="product_img tre_shirt_2">
              <img src="images/product/tre-shirt-2.png" alt="DARK BLUE IMAGE" />
            </div>
            <div className="product_text dark_product">
              <h1>WHITE & BLACK</h1>
            </div>
          </div>
        </div>
        <div className="padding_right main_single_product section-padding-top">
          <div className="single_product">
            <div className="product_img tre_shirt_3">
              <img src="images/product/tre-shirt-3.png" alt="DARK BLUE IMAGE" />
            </div>
            <div className="product_text dark_product">
              <h1>GRAY WITH BLACK</h1>
            </div>
          </div>
        </div>
        <div className="padding_left main_single_product section-padding-top">
          <div className="single_product single_product_two">
            <div className="product_img tre_shirt_3">
              <img src="images/product/tre-shirt-3.png" alt="DARK BLUE IMAGE" />
            </div>
            <div className="product_text_two product_text">
              <h1>LADIES TEE</h1>
              <p>100% COMBED COTTON</p>
              <p>COLOR: GRAY WITH BLACK</p>
              <p>ROUND NECK & HALF SLEEVES</p>
              <p>classNameic fit, slightly long</p>
              <p>GSM: 180</p>
              <p>PRICE: $ 31.99</p>
              <a className="shop_now_btn" href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
      </section>
      <section className="choose_area section-padding">
        <div className="container">
          <div className="choose_area_text text-center">
            <div className="choose_title">
            <h2>WHY CHOOSE OUR TEES ?</h2>
            </div>
            <div className="choose_text">
              <i className="flaticon-lightbulbs"></i>
              <h5><a href="#">UNIQUE DESIGN</a></h5>
              <div className="text_p">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima</p>
              </div>
            </div>
            <div className="choose_text choose_active">
              <i className="flaticon-sticker3"></i>
              <h5><a href="#">best quality</a></h5>
              <div className="text_p">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima</p>
              </div>
            </div>
            <div className="choose_text">
              <i className="flaticon-tshirt17"></i>
              <h5><a href="#">COMFORTABLE TEES</a></h5>
              <div className="text_p">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima</p>
              </div>
            </div>
          </div>
          <div className="choose_btn text-center">
            <a className="shop_now_btn" href="#">SHOP NOW</a>
          </div>
        </div>
      </section>
      <section className="review_area section-padding">
        <div className="container">
          <div className="review_text text-center">
            <div className="review_title">
              <h2>CUSTOMER REVIEW</h2>
            </div>
            <div id="review_carousel_1" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators slider_indicators">
                <li data-target="#review_carousel_1" data-slide-to="0" className="active"></li>
                <li data-target="#review_carousel_1" data-slide-to="1"></li>
                <li data-target="#review_carousel_1" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <div className="single_review">
                    <img src="images/review/person1.jpg" alt="" />
                    <h5><a href="#">Michelle Wilson</a></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's</p>
                    <div className="review_line"></div>
                    <div className="review_icon">
                      <i>“</i>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="single_review">
                    <img src="images/review/person2.jpg" alt="" />
                    <h5><a href="#">Michelle Wilson</a></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's</p>
                    <div className="review_line"></div>
                    <div className="review_icon">
                      <i>“</i>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="single_review">
                    <img src="images/review/person3.jpg" alt="" />
                    <h5><a href="#">Michelle Wilson</a></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's</p>
                    <div className="review_line"></div>
                    <div className="review_icon">
                      <i>“</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="compare_area section-padding">
        <div className="container">
          <div className="review_text text-center">
            <div className="compare_title">
              <h2>COMPARE OUR PRODUCTS</h2>
              <p>CPMPARE OUR PRODUCTS AND CHOOSE THE BEST ONE FOR YOURS</p>
            </div>
            <div className="compare_menu col-text-center">
              <ul className="nav nav-tabs items_ul" role="tablist" id="myTab">
                <li role="presentation"><a href="#features" aria-controls="features" role="tab" data-toggle="tab">Features</a></li>
                <li role="presentation" className="active"><a href="#tech" aria-controls="tech" role="tab" data-toggle="tab">Tech Spech</a></li>
                <li role="presentation"><a href="#guarantee" id="com_3" aria-controls="guarantee" role="tab" data-toggle="tab">guarantee</a></li>
              </ul>
            </div>
            <div className="tab-content items_tab">
              <div role="tabpanel" className="tab-pane fade in items_pane" id="features">
                <div className="features_box">
                  <div className="single_features border_bot">
                    <i className="flaticon-lightbulbs"></i>
                    <div className="features_text">
                      <h5><a href="#">Features 1</a></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima</p>
                    </div>
                  </div>
                  <div className="single_features border_bot border_left">
                    <i className="fa fa-diamond"></i>
                    <div className="features_text">
                      <h5><a href="#">Features 2</a></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima</p>
                    </div>
                  </div>
                  <div className="single_features">
                    <i className="fa fa-cogs"></i>
                    <div className="features_text">
                      <h5><a href="#">Features 3</a></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima</p>
                    </div>
                  </div>
                  <div className="single_features border_left">
                    <i className="flaticon-tshirt17"></i>
                    <div className="features_text">
                      <h5><a href="#">Features 4</a></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ab odio quas ipsam sed quo minima</p>
                    </div>
                  </div>
                </div>
                <div className="disclaimer text-left section-padding-top">
                  <h5>disclaimer</h5>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>1.00 $ trial offer applies to the first month of service only.</p>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>Standard 14-day refund policy does not apply to any configurable options provided with Reseller packages or to</p>
                  <p className="promo_p">promotional purchases of Reseller packages. Sales of $1.00 trial offer and add-ons are final and non-refundable.</p>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>$1.00 trial offer is limited to one per household, business or client.</p>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane fade in active items_pane" id="tech">
                <div className="table-responsive">
                  <table id="home_table">
                    <tbody>
                      <tr>
                        <th>package features</th>
                        <th>COMPARE 1</th>
                        <th>COMPARE 2</th>
                        <th>COMPARE 3</th>
                      </tr>
                      <tr>
                        <td>material</td>
                        <td>100% Combed Cotton</td>
                        <td>86% Organic Cotton</td>
                        <td>100% Polyster</td>
                      </tr>
                      <tr>
                        <td>GSM</td>
                        <td>GSM 180</td>
                        <td>GSM 160</td>
                        <td>GSM 180</td>
                      </tr>
                      <tr>
                        <td>COLOR</td>
                        <td>Any Color</td>
                        <td>Any Color</td>
                        <td>Any Color</td>
                      </tr>
                      <tr>
                        <td>FABRIC</td>
                        <td>1000 m. Per Color</td>
                        <td>800 m. Per Color</td>
                        <td>900 m. Per Color</td>
                      </tr>
                      <tr>
                        <td>SIZE</td>
                        <td>Small</td>
                        <td>Medium</td>
                        <td>Large</td>
                      </tr>
                      <tr>
                        <td>NECK</td>
                        <td>Round Neck</td>
                        <td>Kuff Neck</td>
                        <td>Round Fit</td>
                      </tr>
                      <tr>
                        <td>SLEEves</td>
                        <td>Long Sleeves</td>
                        <td>Half Sleeves</td>
                        <td>Semi Half Sleeves</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="disclaimer text-left section-padding-top">
                  <h5>disclaimer</h5>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>1.00 $ trial offer applies to the first month of service only.</p>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>Standard 14-day refund policy does not apply to any configurable options provided with Reseller packages or to</p>
                  <p className="promo_p">promotional purchases of Reseller packages. Sales of $1.00 trial offer and add-ons are final and non-refundable.</p>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>$1.00 trial offer is limited to one per household, business or client.</p>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane fade in items_pane" id="guarantee">
                <div className="guarantee_box">
                  <div className="guarantee_features">
                    <img src="images/guarantee-icon.png" alt="" />
                    <div className="features_text guarantee_text">
                      <h5><a href="#">GUARANTEE OF QUALITY</a></h5>
                      <p>All of our web hosting services are backed up by our pioneering Hosting Guarantee. This guarantee is a mark of the high quality that you expect of Namecheap and underlines our commitment to providing excellence in our hosting division. Our Hosting Guarantee also explains that we treat each individual service you have with Namecheap as an individual service. You can subscribe, modify and cancel each and any service that you have with us at any time and without penalty.</p>
                    </div>
                  </div>
                </div>
                <div className="disclaimer text-left section-padding-top">
                  <h5>disclaimer</h5>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>1.00 $ trial offer applies to the first month of service only.</p>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>Standard 14-day refund policy does not apply to any configurable options provided with Reseller packages or to</p>
                  <p className="promo_p">promotional purchases of Reseller packages. Sales of $1.00 trial offer and add-ons are final and non-refundable.</p>
                  <i className="fa fa-dot-circle-o"></i>
                  <p>$1.00 trial offer is limited to one per household, business or client.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    )
  }
}

export default Home;
