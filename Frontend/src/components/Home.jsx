import React from 'react'
import "../assets/style.css"
import "../assets/index.css"
import "../assets/animate.css"
import "../assets/cssanimation.min.css"
import "../assets/elegant.css"
import "../assets/font-awesome.min.css"
import "../assets/helper.css"
import "../assets/responsive.css"
import "../assets/slick.css"
import "../assets/slick-theme.css"
import "../assets/themify-icons.css"


const Home = () => {
  return (
    <>
      {/*[if lte IE 9]>
	<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
	<![endif]*/}
      {/*header-area start*/}
      <header className="header-area">
        <div className="desktop-header">
          {/*header-top*/}
          <div
            className="header-top"
            style={{ backgroundColor: "#1467c1", color: "white", fontWeight: 500 }}
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="topbar-left">
                    <ul className="list-none">
                      <li>
                        SHOP EVENTS &amp; SAVE UP TO{" "}
                        <span style={{ color: "white" }}>65% OFF!</span>
                      </li>
                      <li>
                        Call Us:{" "}
                        <span style={{ color: "white" }}>001-1234-88888</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="topbar-right">
                    <div className="social-icons pull-right">
                      <a href="#">
                        <i className="fa fa-facebook" style={{ color: "white" }} />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" style={{ color: "white" }} />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" style={{ color: "white" }} />
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube" style={{ color: "white" }} />
                      </a>
                    </div>
                    <div className="currency-bar lang-bar pull-right">
                      <ul style={{ color: "white" }}>
                        <li>
                          <a href="#" style={{ color: "white" }}>
                            <img src="assets/images/icons/gb.png" alt="" />
                            English <i className="fa fa-angle-down" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">French</a>
                            </li>
                            <li>
                              <a href="#">Chinese</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="br">|</span>
                        </li>
                      </ul>
                    </div>
                    {/* <div class="currency-bar pull-right">
									<ul>
										<li><a href="#">USD <i class="fa fa-angle-down"></i></a>
											<ul>
												<li><a href="#">EUR</a></li>
												<li><a href="#">AUD</a></li>
											</ul>
										</li>
										<li><span>|</span></li>
									</ul>
								</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*header-bottom*/}
          <div className="nav-container">
            <a href="#" className="active">
              Product
            </a>
            <a href="#">Manufacture</a>
            <a href="#">Classified</a>
            <a href="#">Source PRO</a>
          </div>
          {/* <hr style="border: 1px solid rgb(136, 136, 136);"> */}
          <div
            className="row d-flex  align-items-center"
            style={{ marginTop: "-15px" }}
          >
            <div
              className="col-xl-3 col-lg-3"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <img
                src="assets/company_logo.png"
                style={{ width: 120, height: 100 }}
              />
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="d-flex w-45 p-1"
                style={{
                  borderRadius: 25,
                  border: "1px solid #ced4da",
                  backgroundColor: "#1467c1"
                }}
              >
                <input
                  className="form-control form-control-sm  w-70"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    border: "none",
                    borderRadius: "25px 0 0 25px",
                    outline: "none" /* remove the default blue outline */,
                    boxShadow: "none" /* remove the shadow */,
                    border: "none"
                  }}
                />
                <button
                  className="btn"
                  type="submit"
                  style={{
                    borderRadius: "0 25px 25px 0",
                    backgroundColor: "#1467c1",
                    color: "white"
                  }}
                >
                  {" "}
                  <i className="fa fa-search fa-1x mx-2" aria-hidden="true" />
                  Search
                </button>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3"
              style={{ display: "flex", columnGap: 20 }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="" className="icon-link" style={{ padding: 0, margin: 0 }}>
                  <i className="fa fa-user-o fa-2x" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  style={{ padding: 0, marginTop: "-7px", marginLeft: "-4px" }}
                >
                  Login
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a
                  href=""
                  className="icon-link me-3"
                  style={{ padding: 0, marginLeft: 6 }}
                >
                  <i className="fa fa-envelope-o fa-2x" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  style={{ padding: 0, marginTop: "-7px", marginLeft: "-4px" }}
                >
                  Message
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a
                  href=""
                  className="icon-link"
                  style={{ paddingLeft: 5, marginLeft: 5 }}
                >
                  <i className="fa fa-heart-o fa-2x" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  style={{ padding: 0, marginTop: "-7px", marginLeft: "-3px" }}
                >
                  Favourite
                </a>
              </div>
            </div>
          </div>
          <div
            className="row bg-light d-flex justify-content-between align-items-center"
            style={{ marginTop: 5 }}
          >
            <div
              className="col-xl-2 col-lg-2"
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginLeft: 15
              }}
            >
              <select style={{ height: 30 }}>
                <option>All Categories</option>
                <option>Computer</option>
                <option>TV &amp; Smart box</option>
                <option>Camera &amp; Photography</option>
                <option>Headphones</option>
              </select>
            </div>
            <div className="col-xl-8 col-lg-8">
              <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center">
                <div className="container-fluid justify-content-between align-items-center">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <ul
                        className="navbar-nav"
                        style={{ fontSize: "large", fontWeight: 500 }}
                      >
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#">
                            Buyer Central
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Seller Central
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Trade Show
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            News
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            Partner Channel
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Help Center
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                How to Sell
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-xl-1 col-lg-1">
              <select style={{ width: 50 }}>
                <option>INR</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
          {/* <input type="text" placeholder="What do you need?" />
								<button>Search</button> */}
          {/*products-search*/}
          <div className="products-search">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-xl-2 col-lg-3">
                  <div className="collapse-menu mt-0">
                    <ul style={{ marginTop: 20 }}>
                      <li>
                        <a href="javascript:void(0);" className="vm-menu">
                          <i className="fa fa-navicon" />
                          <span>All Departments</span>
                        </a>
                        <ul className="vm-dropdown">
                          <li>
                            <a href="#">
                              <i className="fa fa-laptop" />
                              Computer <b className="caret" />
                            </a>
                            <ul className="mega-menu">
                              <li className="megamenu-single">
                                <span className="mega-menu-title">Shop Page</span>
                                <ul>
                                  <li>
                                    <a href="#">Products Block Top</a>
                                  </li>
                                  <li>
                                    <a href="#">Products Block Bottom</a>
                                  </li>
                                  <li>
                                    <a href="#">Shop Grid 5 Column</a>
                                  </li>
                                  <li>
                                    <a href="#">Shop List</a>
                                  </li>
                                  <li>
                                    <a href="#">Shop width Normal</a>
                                  </li>
                                  <li>
                                    <a href="#">Shop List Normal</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="megamenu-single">
                                <span className="mega-menu-title">Featured</span>
                                <ul>
                                  <li>
                                    <a href="#">Thumbnails Left</a>
                                  </li>
                                  <li>
                                    <a href="#">Thumbnails Right</a>
                                  </li>
                                  <li>
                                    <a href="#">Thumbnails Bottom</a>
                                  </li>
                                  <li>
                                    <a href="#">Thumbnails Full</a>
                                  </li>
                                  <li>
                                    <a href="#">Single 2 Colums</a>
                                  </li>
                                  <li>
                                    <a href="#">Tabs Content</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="megamenu-single">
                                <span className="mega-menu-title">Shop Page</span>
                                <ul>
                                  <li>
                                    <a href="#">Simple Product</a>
                                  </li>
                                  <li>
                                    <a href="#">Grouped Product</a>
                                  </li>
                                  <li>
                                    <a href="#">Variable Product</a>
                                  </li>
                                  <li>
                                    <a href="#">External Product</a>
                                  </li>
                                  <li>
                                    <a href="#">My account</a>
                                  </li>
                                  <li>
                                    <a href="#">Checkout</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="megamenu-single">
                                <span className="mega-menu-title">Features</span>
                                <ul>
                                  <li>
                                    <a href="#">Detail with Video</a>
                                  </li>
                                  <li>
                                    <a href="#">Variations Swatches</a>
                                  </li>
                                  <li>
                                    <a href="#">With Countdown Timer</a>
                                  </li>
                                  <li>
                                    <a href="#">Catalog Mode</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-desktop" />
                              TV &amp; Smart box <b className="caret" />
                            </a>
                            <ul className="mega-menu">
                              <li className="megamenu-single">
                                <span className="mega-menu-title">Shop Page</span>
                                <ul>
                                  <li>
                                    <a href="#">Products Block Top</a>
                                  </li>
                                  <li>
                                    <a href="#">Products Block Bottom</a>
                                  </li>
                                  <li>
                                    <a href="#">Shop Grid 5 Column</a>
                                  </li>
                                  <li>
                                    <a href="#">Shop List</a>
                                  </li>
                                  <li>
                                    <a href="#">Shop width Normal</a>
                                  </li>
                                  <li>
                                    <a href="#">Shop List Normal</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="megamenu-single">
                                <span className="mega-menu-title">Featured</span>
                                <ul>
                                  <li>
                                    <a href="#">Thumbnails Left</a>
                                  </li>
                                  <li>
                                    <a href="#">Thumbnails Right</a>
                                  </li>
                                  <li>
                                    <a href="#">Thumbnails Bottom</a>
                                  </li>
                                  <li>
                                    <a href="#">Thumbnails Full</a>
                                  </li>
                                  <li>
                                    <a href="#">Single 2 Colums</a>
                                  </li>
                                  <li>
                                    <a href="#">Detail with Accessories</a>
                                  </li>
                                  <li>
                                    <a href="#">Tabs Content</a>
                                  </li>
                                  <li>
                                    <a href="#">Accordion Tabs</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-camera" />
                              Camera &amp; Photography
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-headphones" />
                              Headphones
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-music" />
                              Musical Instruments
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-mobile" />
                              Smart phone &amp; Tablets
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-flash" />
                              Accessories
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-microphone" />
                              Home Audio &amp; Theater
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-print" />
                              Printer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-fax" />
                              Fax machine
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-spoon" />
                              Household goods
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-clock-o" />
                              Watch
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  {/* <div class="search-box">
								<select>
									<option>All Categories</option>
									<option>Computer</option>
									<option>TV & Smart box</option>
									<option>Camera & Photography</option>
									<option>Headphones</option>
								</select>
								<input type="text" placeholder="What do you need?" />
								<button>Search</button>
							</div> */}
                </div>
                {/* <div class="col-xl-4 col-lg-3"> */}
                {/* <div class="mini-cart pull-right">
								<ul>
									<li><a href="#" title="Track Your Order"><i class="ti-truck"></i></a></li>
									<li><a href="#"><i class="icon_heart_alt"></i><span>1</span></a></li>
									<li><a href="javascript:void(0);" class="minicart-icon"><i class="icon_bag_alt"></i>$180.00<span>2</span></a>
										<div class="cart-dropdown">
											<ul>
												<li>
													<div class="mini-cart-thumb">
														<a href="#"><img src="assets/images/products/cart/thumb-1.jpg" alt="" /></a>
													</div>
													<div class="mini-cart-heading">
														<span>$460.00 x 1</span>
														<h5><a href="#">Kabino Bedside Table</a></h5>
													</div>
													<div class="mini-cart-remove">
														<button><i class="ti-close"></i></button>
													</div>
												</li>
												<li>
													<div class="mini-cart-thumb">
														<a href="#"><img src="assets/images/products/cart/thumb-2.jpg" alt="" /></a>
													</div>
													<div class="mini-cart-heading">
														<span>$460.00 x 1</span>
														<h5><a href="#">Kabino Bedside Table</a></h5>
													</div>
													<div class="mini-cart-remove">
														<button><i class="ti-close"></i></button>
													</div>
												</li>
											</ul>
											<div class="minicart-total fix">
												<span class="pull-left">total:</span>
												<span class="pull-right">$460.00</span>
											</div>
											<div class="mini-cart-checkout">
												<a href="shopping-cart.html" class="btn-common view-cart">VIEW CARD</a>
												<a href="checkout.html" class="btn-common checkout mt-10">CHECK OUT</a>
											</div>
										</div>
									</li>
								</ul>
							</div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/*mobile-header*/}
        <div className="sticker mobile-header">
          <div className="container-fluid">
            {/*logo and cart*/}
            <div className="row align-items-center">
              <div className="col-sm-4 col-6">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logos/logo-blue.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-sm-8 col-6">
                <div className="mini-cart text-right">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon_heart_alt" />
                        <span>1</span>
                      </a>
                    </li>
                    <li className="minicart-icon">
                      <a href="#">
                        <i className="icon_bag_alt" />
                        <span>2</span>
                      </a>
                      <div className="cart-dropdown">
                        <ul>
                          <li>
                            <div className="mini-cart-thumb">
                              <a href="#">
                                <img
                                  src="assets/images/products/cart/thumb-1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="mini-cart-heading">
                              <span>$460.00 x 1</span>
                              <h5>
                                <a href="#">Kabino Bedside Table</a>
                              </h5>
                            </div>
                            <div className="mini-cart-remove">
                              <button>
                                <i className="ti-close" />
                              </button>
                            </div>
                          </li>
                          <li>
                            <div className="mini-cart-thumb">
                              <a href="#">
                                <img
                                  src="assets/images/products/cart/thumb-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="mini-cart-heading">
                              <span>$460.00 x 1</span>
                              <h5>
                                <a href="#">Kabino Bedside Table</a>
                              </h5>
                            </div>
                            <div className="mini-cart-remove">
                              <button>
                                <i className="ti-close" />
                              </button>
                            </div>
                          </li>
                        </ul>
                        <div className="minicart-total fix">
                          <span className="pull-left">total:</span>
                          <span className="pull-right">$460.00</span>
                        </div>
                        <div className="mini-cart-checkout">
                          <a
                            href="shopping-cart.html"
                            className="btn-common view-cart"
                          >
                            VIEW CARD
                          </a>
                          <a
                            href="checkout.html"
                            className="btn-common checkout mt-10"
                          >
                            CHECK OUT
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*search-box*/}
            <div className="row align-items-center">
              <div className="col-sm-12">
                <div className="search-box mt-sm-15">
                  <select>
                    <option>All Categories</option>
                    <option>Computer</option>
                    <option>TV &amp; Smart box</option>
                    <option>Camera &amp; Photography</option>
                    <option>Headphones</option>
                  </select>
                  <input type="text" placeholder="What do you need?" />
                  <button>Search</button>
                </div>
              </div>
            </div>
            {/*site-menu*/}
            <div className="row mt-sm-10">
              <div className="col-lg-12">
                <a href="#my-menu" className="mmenu-icon pull-left">
                  <i className="fa fa-bars" />
                </a>
                <div className="mainmenu">
                  <nav id="my-menu">
                    <ul>
                      <li>
                        <a href="index.html">
                          Home <b className="caret" />
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="index.html">Home Version 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Version 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Version 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home Version 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home Version 5</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home Version 6</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span className="text-label label-featured">
                            Featured
                          </span>
                          Shop
                          <b className="caret" />
                        </a>
                        <ul>
                          <li>
                            <span className="mega-menu-title">Shop Page</span>
                            <ul>
                              <li>
                                <a href="shop.html">Shop Grid</a>
                              </li>
                              <li>
                                <a href="shop-list.html">Shop List</a>
                              </li>
                              <li>
                                <a href="shop-list-col-3.html">Shop Column 3</a>
                              </li>
                              <li>
                                <a href="product-details.html">Product Details</a>
                              </li>
                              <li>
                                <a href="poduct-details-sidebar.html">
                                  Product Details Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="mega-menu-title">Features</span>
                            <ul>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                <a href="shopping-cart.html">Shopping Cart</a>
                              </li>
                              <li>
                                <a href="shop-compare.html">Shop Compare</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="mega-menu-title">Pages</span>
                            <ul>
                              <li>
                                <a href="about.html">About </a>
                              </li>
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                              <li>
                                <a href="coming-soon.html">Coming Soon</a>
                              </li>
                              <li>
                                <a href="404.html">404 Error</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="mega-menu-title">Blog</span>
                            <ul>
                              <li>
                                <a href="blog.html">Blog List</a>
                              </li>
                              <li>
                                <a href="blog-grid.html">Blog Grid</a>
                              </li>
                              <li>
                                <a href="blog-fullwidth.html">Blog Fullwidth</a>
                              </li>
                              <li>
                                <a href="blog-details.html">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span className="text-label label-hot">Hot</span>
                          Pages
                          <b className="caret" />
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="404.html">404 Eror</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Blog <b className="caret" />
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-fullwidth.html">Blog Full Width</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="#">Purchase Theme</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/*category*/}
                <div className="collapse-menu mt-0 pull-right">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" className="vm-menu">
                        <i className="fa fa-navicon" />
                        <span>All Departments</span>
                      </a>
                      <ul className="vm-dropdown">
                        <li>
                          <a href="#">
                            <i className="fa fa-laptop" />
                            Computer <b className="caret" />
                          </a>
                          <ul className="mega-menu">
                            <li className="megamenu-single">
                              <span className="mega-menu-title">Shop Page</span>
                              <ul>
                                <li>
                                  <a href="#">Products Block Top</a>
                                </li>
                                <li>
                                  <a href="#">Products Block Bottom</a>
                                </li>
                                <li>
                                  <a href="#">Shop Grid 5 Column</a>
                                </li>
                                <li>
                                  <a href="#">Shop List</a>
                                </li>
                                <li>
                                  <a href="#">Shop width Normal</a>
                                </li>
                                <li>
                                  <a href="#">Shop List Normal</a>
                                </li>
                              </ul>
                            </li>
                            <li className="megamenu-single">
                              <span className="mega-menu-title">Featured</span>
                              <ul>
                                <li>
                                  <a href="#">Thumbnails Left</a>
                                </li>
                                <li>
                                  <a href="#">Thumbnails Right</a>
                                </li>
                                <li>
                                  <a href="#">Thumbnails Bottom</a>
                                </li>
                                <li>
                                  <a href="#">Thumbnails Full</a>
                                </li>
                                <li>
                                  <a href="#">Single 2 Colums</a>
                                </li>
                                <li>
                                  <a href="#">Tabs Content</a>
                                </li>
                              </ul>
                            </li>
                            <li className="megamenu-single">
                              <span className="mega-menu-title">Shop Page</span>
                              <ul>
                                <li>
                                  <a href="#">Simple Product</a>
                                </li>
                                <li>
                                  <a href="#">Grouped Product</a>
                                </li>
                                <li>
                                  <a href="#">Variable Product</a>
                                </li>
                                <li>
                                  <a href="#">External Product</a>
                                </li>
                                <li>
                                  <a href="#">My account</a>
                                </li>
                                <li>
                                  <a href="#">Checkout</a>
                                </li>
                              </ul>
                            </li>
                            <li className="megamenu-single">
                              <span className="mega-menu-title">Features</span>
                              <ul>
                                <li>
                                  <a href="#">Detail with Video</a>
                                </li>
                                <li>
                                  <a href="#">Variations Swatches</a>
                                </li>
                                <li>
                                  <a href="#">With Countdown Timer</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Mode</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-desktop" />
                            TV &amp; Smart box <b className="caret" />
                          </a>
                          <ul className="mega-menu">
                            <li className="megamenu-single">
                              <span className="mega-menu-title">Shop Page</span>
                              <ul>
                                <li>
                                  <a href="#">Products Block Top</a>
                                </li>
                                <li>
                                  <a href="#">Products Block Bottom</a>
                                </li>
                                <li>
                                  <a href="#">Shop Grid 5 Column</a>
                                </li>
                                <li>
                                  <a href="#">Shop List</a>
                                </li>
                                <li>
                                  <a href="#">Shop width Normal</a>
                                </li>
                                <li>
                                  <a href="#">Shop List Normal</a>
                                </li>
                              </ul>
                            </li>
                            <li className="megamenu-single">
                              <span className="mega-menu-title">Featured</span>
                              <ul>
                                <li>
                                  <a href="#">Thumbnails Left</a>
                                </li>
                                <li>
                                  <a href="#">Thumbnails Right</a>
                                </li>
                                <li>
                                  <a href="#">Thumbnails Bottom</a>
                                </li>
                                <li>
                                  <a href="#">Thumbnails Full</a>
                                </li>
                                <li>
                                  <a href="#">Single 2 Colums</a>
                                </li>
                                <li>
                                  <a href="#">Detail with Accessories</a>
                                </li>
                                <li>
                                  <a href="#">Tabs Content</a>
                                </li>
                                <li>
                                  <a href="#">Accordion Tabs</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-camera" />
                            Camera &amp; Photography
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-headphones" />
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-music" />
                            Musical Instruments
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-mobile" />
                            Smart phone &amp; Tablets
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-flash" />
                            Accessories
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-microphone" />
                            Home Audio &amp; Theater
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-print" />
                            Printer
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-fax" />
                            Fax machine
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-spoon" />
                            Household goods
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-clock-o" />
                            Watch
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-random" />
                            Other
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*header-area end*/}
      {/*slider-area start*/}
      <div className="slider-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 offset-xl-2 off_sl">
              <div className="main-slider mt-sm-0">
                <div className="slider-single bg-1">
                  <div className="d-table">
                    <div className="slider-caption">
                      <h4>clothing</h4>
                      <h2 className="cssanimation leDoorCloseLeft sequence">
                        Men Collections
                      </h2>
                      <p>The 10 Best Man Collection 2018</p>
                      <div className="slider-product-price">
                        <del>$120.00</del>
                        <span>$295.00</span>
                      </div>
                      <a href="#" className="btn-common mt-43">
                        buy now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider-single bg-2">
                  <div className="d-table">
                    <div className="slider-caption">
                      <h4>clothing</h4>
                      <h2 className="cssanimation leDoorCloseLeft sequence">
                        Gadgets
                      </h2>
                      <p>The 10 Best Man Collection 2018</p>
                      <div className="slider-product-price">
                        <del>$120.00</del>
                        <span>$295.00</span>
                      </div>
                      <a href="#" className="btn-common mt-43">
                        buy now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4  off_sl ">
              <div className="card" id="form_card">
                <div className="card-header" id="form_card_head">
                  <h2> Post Requirement</h2>
                </div>
                <div className="card-body" id="form_card_body">
                  <form id="form_form">
                    <label htmlFor="name" className="form_f_label">
                      Name:
                    </label>
                    <input
                      className="form_f_input"
                      type="text"
                      id="name"
                      name="name"
                      required=""
                    />
                    <label htmlFor="email" className="form_f_label">
                      Email:
                    </label>
                    <input
                      className="form_f_input"
                      type="email"
                      id="email"
                      name="email"
                      required=""
                    />
                    <label htmlFor="phone" className="form_f_label">
                      Phone Number:
                    </label>
                    <input
                      className="form_f_input"
                      type="tel"
                      id="phone"
                      name="phone"
                      required=""
                    />
                    {/* <label for="password" class="form_f_label">Password:</label> */}
                    <textarea
                      className="form_f_text pt-10px"
                      id="password"
                      name="password"
                      rows={3}
                      cols={30}
                      placeholder="Enter Requirements"
                      required=""
                      defaultValue={""}
                    />
                  </form>
                </div>
                <div className="card-footer_form">
                  <button id="bts">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*slider-area end*/}
      {/*- vertical slider start*/}
      <div className=" mt-40">
        <h4 style={{ textAlign: "center", backgroundColor: "#ced4da" }}>
          Latest Buy Products
        </h4>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: "100%"
          }}
        >
          <div className="col-xl-4 slider-container-country">
            <div className="slider-content-country" id="slider-content-country">
              {/* Rows will be dynamically added here */}
            </div>
          </div>
          <div className="col-xl-4 slider-container-country trs">
            <img
              src="assets/Screenshot 2024-11-28 180019.png"
              alt=""
              height={280}
              width="400px"
            />
          </div>
          <div className="col-xl-4 slider-container-country trs">
            <img
              src="assets/Screenshot 2024-11-28 180041.png"
              alt=""
              height="280px"
              width="410px"
            />
          </div>
        </div>
      </div>
      {/* vertical slider end*/}
      <div className="container mt-80 col-lg-10">
        <div className="section-title">
          <h3>Recently Viewed Products</h3>
        </div>
      </div>
      {/*recently-viewed-products-start*/}
      <div className=" container recent-viewed-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4">
              {/*blog-list-widget*/}
              <div className="sidebar-single">
                <div className="container mt-60">
                  <img
                    src="assets/fmcg-products.png"
                    alt=""
                    style={{ height: 300 }}
                  />
                </div>
                <div
                  className="mt-38 mx-auto"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    style={{
                      backgroundColor: "rgb(211, 29, 29)",
                      color: "white",
                      padding: "6px 13px",
                      textDecoration: "none",
                      fontSize: 23,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.6s ease"
                    }}
                  >
                    Visit Us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 mt-md-40 mt-sm-40">
              <div className="row"></div>
              <div className="container row recent-products mlr-minus-12">
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/21.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/23.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/9.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/12.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*recently-viewed-products-end*/}
      {/*products-tab end*/}
      <div className="container mt-80 col-lg-10">
        <div className="section-title">
          <h3>Recently Viewed Products</h3>
        </div>
      </div>
      {/*recently-viewed-products-start*/}
      <div className=" container recent-viewed-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4">
              {/*blog-list-widget*/}
              <div className="sidebar-single">
                <div className="container mt-60">
                  <img
                    src="assets/fmcg-products.png"
                    alt=""
                    style={{ height: 300 }}
                  />
                </div>
                <div
                  className="mt-38 mx-auto"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    style={{
                      backgroundColor: "rgb(211, 29, 29)",
                      color: "white",
                      padding: "6px 13px",
                      textDecoration: "none",
                      fontSize: 23,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.6s ease"
                    }}
                  >
                    Visit Us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 mt-md-40 mt-sm-40">
              <div className="row"></div>
              <div className="container row recent-products mlr-minus-12">
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/21.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/23.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/9.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/12.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*products-tab end*/}
      <div className="container mt-80 col-lg-10">
        <div className="section-title">
          <h3>Recently Viewed Products</h3>
        </div>
      </div>
      {/*recently-viewed-products-start*/}
      <div className=" container recent-viewed-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4">
              {/*blog-list-widget*/}
              <div className="sidebar-single">
                <div className="container mt-60">
                  <img
                    src="assets/fmcg-products.png"
                    alt=""
                    style={{ height: 300 }}
                  />
                </div>
                <div
                  className="mt-38 mx-auto"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    style={{
                      backgroundColor: "rgb(211, 29, 29)",
                      color: "white",
                      padding: "6px 13px",
                      textDecoration: "none",
                      fontSize: 23,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.6s ease"
                    }}
                  >
                    Visit Us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 mt-md-40 mt-sm-40">
              <div className="row"></div>
              <div className="container row recent-products mlr-minus-12">
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/21.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/23.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/9.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/12.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*products-tab end*/}
      <div className="container mt-80 col-lg-10">
        <div className="section-title">
          <h3>Recently Viewed Products</h3>
        </div>
      </div>
      {/*recently-viewed-products-start*/}
      <div className=" container recent-viewed-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4">
              {/*blog-list-widget*/}
              <div className="sidebar-single">
                <div className="container mt-60">
                  <img
                    src="assets/fmcg-products.png"
                    alt=""
                    style={{ height: 300 }}
                  />
                </div>
                <div
                  className="mt-38 mx-auto"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    style={{
                      backgroundColor: "rgb(211, 29, 29)",
                      color: "white",
                      padding: "6px 13px",
                      textDecoration: "none",
                      fontSize: 23,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.6s ease"
                    }}
                  >
                    Visit Us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 mt-md-40 mt-sm-40">
              <div className="row"></div>
              <div className="container row recent-products mlr-minus-12">
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/21.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/23.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/9.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/12.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*products-tab end*/}
      <div className="container mt-80 col-lg-10">
        <div className="section-title">
          <h3>Recently Viewed Products</h3>
        </div>
      </div>
      {/*recently-viewed-products-start*/}
      <div className=" container recent-viewed-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4">
              {/*blog-list-widget*/}
              <div className="sidebar-single">
                <div className="container mt-60">
                  <img
                    src="assets/fmcg-products.png"
                    alt=""
                    style={{ height: 300 }}
                  />
                </div>
                <div
                  className="mt-38 mx-auto"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    style={{
                      backgroundColor: "rgb(211, 29, 29)",
                      color: "white",
                      padding: "6px 13px",
                      textDecoration: "none",
                      fontSize: 23,
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 0.6s ease"
                    }}
                  >
                    Visit Us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 mt-md-40 mt-sm-40">
              <div className="row"></div>
              <div className="container row recent-products mlr-minus-12">
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/21.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/23.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/9.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/12.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*single-product*/}
                  <div className="product-single style-2">
                    <div className="row align-items-center">
                      <div className="col-lg-6 p-0">
                        <div className="product-thumb">
                          <a href="#">
                            <img src="assets/images/products/6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 p-0">
                        <div className="product-title">
                          <small>
                            <a href="#">Electronics</a>
                          </small>
                          <h4>
                            <a href="#">Vantech VP-153C Camera</a>
                          </h4>
                        </div>
                        <div className="product-price-rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-price-rating">
                          <span>$195.00</span>
                          <del>$229.99</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*brands-area start*/}
      <div className="container mt-80 col-lg-10">
        <div className="section-title">
          <h3>Fresh Products</h3>
        </div>
      </div>
      <div
        className="container col-xl-12 mt-md-40 mt-sm-40"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="container row  mlr-minus-12">
          <div className="col-lg-4">
            {/*single-product*/}
            <div className="product-single style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 p-0">
                  <div className="product-thumb">
                    <a href="#">
                      <img src="assets/images/products/2.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">Vantech VP-153C Camera</a>
                    </h4>
                  </div>
                  <div className="product-price-rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                </div>
              </div>
            </div>
            {/*single-product*/}
            <div className="product-single style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 p-0">
                  <div className="product-thumb">
                    <a href="#">
                      <img src="assets/images/products/4.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">Vantech VP-153C Camera</a>
                    </h4>
                  </div>
                  <div className="product-price-rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/*single-product*/}
            <div className="product-single style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 p-0">
                  <div className="product-thumb">
                    <a href="#">
                      <img src="assets/images/products/5.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">Vantech VP-153C Camera</a>
                    </h4>
                  </div>
                  <div className="product-price-rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                </div>
              </div>
            </div>
            {/*single-product*/}
            <div className="product-single style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 p-0">
                  <div className="product-thumb">
                    <a href="#">
                      <img src="assets/images/products/5.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">Vantech VP-153C Camera</a>
                    </h4>
                  </div>
                  <div className="product-price-rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/*single-product*/}
            <div className="product-single style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 p-0">
                  <div className="product-thumb">
                    <a href="#">
                      <img src="assets/images/products/6.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">Vantech VP-153C Camera</a>
                    </h4>
                  </div>
                  <div className="product-price-rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                </div>
              </div>
            </div>
            {/*single-product*/}
            <div className="product-single style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 p-0">
                  <div className="product-thumb">
                    <a href="#">
                      <img src="assets/images/products/6.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">Vantech VP-153C Camera</a>
                    </h4>
                  </div>
                  <div className="product-price-rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rfq-container container mt-40">
        <div className="rfq-left">
          <h2>Request for Quotation</h2>
          <p>Want to save time and effort?</p>
          <p>
            IK****** from Zambia sourced 5 bibs, made of waterproof material.
            <a href="#">view more</a>
          </p>
          <h3>Benefits</h3>
          <ul>
            <li>Submit an RFQ in just one minute.</li>
            <li>Get multiple quotations from Verified Suppliers.</li>
            <li>Compare and choose the best quotation!</li>
          </ul>
        </div>
        <div
          className="rfq-right"
          style={{ marginBottom: 50, marginTop: 50, marginRight: 50 }}
        >
          <h2>One request, multiple quotes</h2>
          <form>
            <div className="form-group">
              <label htmlFor="product-name">Product name</label>
              <input
                type="text"
                id="product-name"
                placeholder="Enter product name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="product-quantity">Product quantity</label>
              <input
                type="text"
                id="product-quantity"
                placeholder="Enter product qty"
              />
            </div>
            <button type="submit">Request for Quotation</button>
          </form>
        </div>
      </div>
      <div className="container-fluid mt-50">
        <div className="brands-area">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-items">
                <div className="brand-item">
                  <a href="#">
                    <img
                      className="brand-static"
                      src="assets/images/brands/1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="brand-item">
                  <a href="#">
                    <img
                      className="brand-static"
                      src="assets/images/brands/2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="brand-item">
                  <a href="#">
                    <img
                      className="brand-static"
                      src="assets/images/brands/3.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="brand-item">
                  <a href="#">
                    <img
                      className="brand-static"
                      src="assets/images/brands/4.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="brand-item">
                  <a href="#">
                    <img
                      className="brand-static"
                      src="assets/images/brands/5.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="brand-item">
                  <a href="#">
                    <img
                      className="brand-static"
                      src="assets/images/brands/6.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="brand-item">
                  <a href="#">
                    <img
                      className="brand-static"
                      src="assets/images/brands/7.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="brand-item">
                  <a href="#">
                    <img
                      className="brand-static"
                      src="assets/images/brands/8.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*brands-area end*/}
      {/*footer-area start*/}
      <footer className="footer-area mt-50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="company-info">
                <img
                  src="assets/company_logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
                <p>
                  101 E 129th St, East Chicago, <br /> IN 46312, US
                </p>
                <p>Phone: 001-1234-88888</p>
                <p>Email: info.deercreative@gmail.com</p>
              </div>
              <div className="copyright">
                <p>
                  Copyright © <a href="#">.....</a>. All rights reserved.
                </p>
              </div>
              <div className="payment-gateways">
                <img src="assets/images/footer/p1.png" alt="" />
                <img src="assets/images/footer/p2.png" alt="" />
                <img src="assets/images/footer/p3.png" alt="" />
                <img src="assets/images/footer/p4.png" alt="" />
                <img src="assets/images/footer/p5.png" alt="" />
                <img src="assets/images/footer/p6.png" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="fooer-widget">
                <h4>Find It Fast</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Laptop &amp; Computers</a>
                    </li>
                    <li>
                      <a href="#">Smart Phone &amp; Tablets</a>
                    </li>
                    <li>
                      <a href="#">TV &amp; Audio</a>
                    </li>
                    <li>
                      <a href="#">Cameras &amp; Photography</a>
                    </li>
                    <li>
                      <a href="#">Gadgets</a>
                    </li>
                    <li>
                      <a href="#">Car Electronic &amp; GP5</a>
                    </li>
                    <li>
                      <a href="#">Accesories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-3 mt-sm-45">
              <div className="fooer-widget">
                <h4>Information</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Find a Store</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Delivery information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Gift Cards</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-3 mt-sm-45">
              <div className="fooer-widget">
                <h4>Customer Care</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                    <li>
                      <a href="#">Wish List</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Returns / Exchange</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Product Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-sm-45">
              <div className="footer-widget">
                <div className="subscribe-form">
                  <h3>
                    Sign Up to <strong>Newsletter</strong>
                  </h3>
                  <p>
                    Subscribe our newsletter gor get notification about information
                    discount.
                  </p>
                  <input type="text" placeholder="Your email address" />
                  <button>Subscribe</button>
                </div>
                <div className="social-icons style-2">
                  <strong>GET IN TOUCH !</strong>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*footer-area end*/}
      {/* modernizr js */}
      {/* jquery-3.3.1 version */}
      {/* bootstra.min js */}
      {/* mmenu js */}
      {/* easing js */}
      {/*-slick-js*/}
      {/*-letteranimation-js*/}
      {/* jquery-ui js */}
      {/* jquery.countdown js */}
      {/* venobox js */}
      {/* plugins js */}
      {/* main js */}
      {/* Modal */}
      <div
        className="modal fade"
        id="quick-view"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="tab-content">
                    <div id="product-1" className="tab-pane fade in show active">
                      <div className="product-details-thumb">
                        <img
                          src="assets/images/products/product-details/1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div id="product-2" className="tab-pane fade">
                      <div className="product-details-thumb">
                        <img
                          src="assets/images/products/product-details/2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div id="product-3" className="tab-pane fade">
                      <div className="product-details-thumb">
                        <img
                          src="assets/images/products/product-details/3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <ul className="nav nav-tabs products-nav-tabs horizontal quick-view mt-10">
                    <li>
                      <a className="active" data-toggle="tab" href="#product-1">
                        <img
                          src="assets/images/products/product-details/thumb-1.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#product-2">
                        <img
                          src="assets/images/products/product-details/thumb-2.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#product-3">
                        <img
                          src="assets/images/products/product-details/thumb-3.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="product-details-desc">
                        <h2>Apple The New MacBook Retina 2016 MLHA2 12 inches</h2>
                        <ul>
                          <li>
                            1.6 GHz dual-core Intel Core i5 (Turbo Boost up to 2.7
                            GHz) with 3 MB shared L3 cache 8 GB of 1600 MHz LPDDR3
                            RAM; 128 GB PCIe-based flash storage
                          </li>
                          <li>
                            13.3-Inch (diagonal) LED-backlit Glossy Widescreen
                            Display, 1440 x 900 resolution Intel HD Graphics 6000
                          </li>
                          <li>
                            OS X El Capitan, Up to 12 Hours of Battery Life Macbook
                            Air does not have a Retina display on any model.
                          </li>
                        </ul>
                        <div className="product-meta">
                          <ul className="list-none">
                            <li>
                              SKU: 00012 <span>|</span>
                            </li>
                            <li>
                              Categories:
                              <a href="#">Tech</a>
                              <a href="#">Macbook</a>
                              <a href="#">Laptop</a>
                              <span>|</span>
                            </li>
                            <li>
                              Tags:
                              <a href="#">Tech,</a>
                              <a href="#">Apple</a>
                            </li>
                          </ul>
                        </div>
                        <div className="social-icons style-5">
                          <span>Share Link:</span>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                          <a href="#">
                            <i className="fa fa-rss" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product-action stuck text-left">
                        <div className="free-delivery">
                          <a href="#">
                            <i className="ti-truck" /> Free Delivery
                          </a>
                        </div>
                        <div className="product-price-rating">
                          <div>
                            <del>629.99</del>
                          </div>
                          <span>$495.00</span>
                          <div className="pull-right">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                          </div>
                        </div>
                        <div className="product-colors mt-20">
                          <label>Select Color:</label>
                          <ul className="list-none">
                            <li>Red</li>
                            <li>Black</li>
                            <li>Blue</li>
                          </ul>
                        </div>
                        <div className="product-quantity mt-15">
                          <label>Quatity:</label>
                          <input type="number" defaultValue={1} />
                        </div>
                        <div className="add-to-get mt-50">
                          <a href="#" className="add-to-cart">
                            Add to Cart
                          </a>
                          <a href="#" className="add-to-cart compare">
                            + ADD to Compare
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
