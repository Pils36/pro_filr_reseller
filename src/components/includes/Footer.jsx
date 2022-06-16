import React from 'react';


function Footer() {
    return (
        <div>
            <footer className="footer-1 ptb-60 gradient-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                            <a href="index.html" className="navbar-brand mb-2">
                                <img src="prologo.png" alt="logo" className="img-fluid" />
                            </a>
                            <br />
                            <p>Dynamically re-engineer high standards in functiona with alternative paradigms. Conveniently
                                monetize resource maximizing initiatives.</p>
                            <ul className="list-inline social-list-default background-color social-hover-2 mt-2">
                                <li className="list-inline-item"><a className="twitter" href="index.html"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="youtube" href="index.html"><i className="fab fa-youtube"></i></a></li>
                                <li className="list-inline-item"><a className="linkedin" href="index.html"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li className="list-inline-item"><a className="dribbble" href="index.html"><i className="fab fa-dribbble"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="row mt-0">
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                    <h6 className="font-weight-normal">Resources</h6>
                                    <ul>
                                        <li>
                                            <a href="index.html">Help</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Events</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Live sessions</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Open source</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Documentation</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                    <h6 className="font-weight-normal">Products</h6>
                                    <ul>
                                        <li>
                                            <a href="index.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Navigation</a>
                                        </li>
                                        <li>
                                            <a href="index.html">AI Studio</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Page Speed </a>
                                        </li>
                                        <li>
                                            <a href="index.html">Performance</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                    <h6 className="font-weight-normal">Company</h6>
                                    <ul>
                                        <li>
                                            <a href="index.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Careers</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Customers</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Community</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Our Team</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <h6 className="font-weight-normal">Support</h6>
                                    <ul>
                                        <li>
                                            <a href="index.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Sells</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Contact Support</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Network Status</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Product Services</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end of container--> */}
            </footer>

            {/* <!--footer bottom copyright start-- > */}
            <div className="footer-bottom py-3 gray-light-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-7">
                            <div className="copyright-wrap small-text">
                                <p className="mb-0">&copy; ThemeTags Design Agency, All rights reserved</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="terms-policy-wrap text-lg-right text-md-right text-left">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a className="small-text" href="terms-condition.html">Terms &
                                        Condition</a></li>
                                    <li className="list-inline-item"><a className="small-text" href="privacy-policy.html">Privacy
                                        Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--footer bottom copyright end-- >
    < !--footer section end-- >
    < !--scroll bottom to top button start-- > */}
            <div className="scroll-top scroll-to-target primary-bg text-white" data-target="html">
                <span className="fas fa-hand-point-up"></span>
            </div>
            {/* <!--scroll bottom to top button end-- > */}
        </div>
    );
}


export default Footer;