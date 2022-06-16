import React from 'react';


function Header() {

    return (
        <header id="header" className="header-main">
            {/* <!--main header menu start--> */}
            <div id="logoAndNav" className="main-header-menu-wrap bg-transparent fixed-top">
                <div className="container">
                    <nav className="js-mega-menu navbar navbar-expand-md header-nav">

                        {/* <!--logo start--> */}
                        <a className="navbar-brand pt-0" href="index.html"><img src="prologo.png" alt="logo" className="img-fluid" /></a>
                        {/* <!--logo end--> */}

                        {/* <!--responsive toggle button start--> */}
                        <button type="button" className="navbar-toggler btn" ariaExpanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                            <span id="hamburgerTrigger">
                                <span className="ti-menu"></span>
                            </span>
                        </button>
                        {/* <!--responsive toggle button end--> */}

                        {/* <!--main menu start--> */}
                        <div id="navBar" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto main-navbar-nav">
                                {/* <!--home start--> */}
                                <li className="nav-item custom-nav-item" data-position="center">
                                    <a id="homeMegaMenu" className="nav-link custom-nav-link" href="index.html" ariaHaspopup="true" ariaExpanded="false">Home</a>

                                </li>

                                {/* <!--home end--> */}

                                {/* <!--pages start--> */}
                                <li className="nav-item hs-has-sub-menu custom-nav-item d-none">
                                    <a id="pagesMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="index.html" ariaHaspopup="true" ariaExpanded="false" aria-labelledby="pagesSubMenu">Pages</a>

                                    {/* <!-- Pages - Submenu --> */}
                                    <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu" aria-labelledby="pagesMegaMenu" style={{ minWidth: "230px" }}>
                                        <li className="nav-item submenu-item">
                                            <a className="nav-link sub-menu-nav-link" href="about-us.html">About Us</a>
                                        </li>
                                        <li className="nav-item submenu-item">
                                            <a className="nav-link sub-menu-nav-link" href="offer-single-page.html">Black Friday Single</a>
                                        </li>
                                        <li className="nav-item submenu-item">
                                            <a className="nav-link sub-menu-nav-link" href="terms-condition.html">Terms & Condition</a>
                                        </li>
                                        <li className="nav-item submenu-item">
                                            <a className="nav-link sub-menu-nav-link" href="privacy-policy.html">Privacy Policy</a>
                                        </li>
                                        <li className="hs-has-sub-menu">
                                            <a id="navLinkPagesPricing" className="nav-link sub-menu-nav-link sub-link-toggle" href="index.html" ariaHaspopup="true" ariaExpanded="false" aria-controls="navSubmenuPagesPricing">Pricing</a>

                                            <ul id="navSubmenuPagesPricing" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesPricing" style={{ minWidth: "230px" }}>
                                                <li><a className="nav-link sub-menu-nav-link" href="pricing-default.html">Pricing Default</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="pricing-package.html">Pricing Packages</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="pricing-web-hosting.html">Web Hosting Packages</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="pricing-windows-hosting.html">Windows Hosting</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="pricing-comparision.html">Pricing Comparison</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="pricing-specifications.html">Pricing Specifications <span className="badge badge-danger ml-auto"> New</span></a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="vps-pricing.html">VPS Pricing</a></li>
                                            </ul>
                                        </li>
                                        <li className="hs-has-sub-menu">
                                            <a id="navLinkPagesBlog" className="nav-link sub-menu-nav-link sub-link-toggle" href="index.html" ariaHaspopup="true" ariaExpanded="false" aria-controls="navSubmenuPagesBlog">Blog</a>

                                            <ul id="navSubmenuPagesBlog" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesBlog" style={{ minWidth: "230px" }}>
                                                <li><a className="nav-link sub-menu-nav-link" href="blog-grid.html">Blog Grid</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="hs-has-sub-menu">
                                            <a id="navLinkPagesSpecialty" className="nav-link sub-menu-nav-link sub-link-toggle" href="index.html" ariaHaspopup="true" ariaExpanded="false" aria-controls="navSubmenuPagesSpecialty">Specialty</a>

                                            <ul id="navSubmenuPagesSpecialty" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesSpecialty" style={{ minWidth: "230px" }}>
                                                <li><a className="nav-link sub-menu-nav-link" href="domain-search-result.html">Search Search Result <span className="badge badge-warning ml-2">New</span></a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="cover-page.html">Cover Page</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="coming-soon.html">Coming Soon</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="thank-you.html">Thank You</a></li>
                                                <li><a className="nav-link sub-menu-nav-link" href="404.html">Error 404</a></li>
                                            </ul>
                                        </li>
                                        <li className="hs-has-sub-menu">
                                            <a id="navLinkPagesLogin" className="nav-link sub-menu-nav-link sub-link-toggle" href="index.html" ariaHaspopup="true" ariaExpanded="false" aria-controls="navSubmenuPagesLogin">Login &amp; Signup</a>

                                            <ul id="navSubmenuPagesLogin" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesLogin" style={{ minWidth: "230px" }}>
                                                <li><a className="nav-link sub-menu-nav-link" href="login.html">Login</a>
                                                </li>
                                                <li><a className="nav-link sub-menu-nav-link" href="sign-up.html">Signup</a>
                                                </li>
                                                <li><a className="nav-link sub-menu-nav-link" href="password-reset.html">Recover Account</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/* <!-- End Pages - Submenu --> */}
                                </li>
                                {/* <!--pages end--> */}


                                {/* <!--hosting start--> */}
                                <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                    <a id="hostingMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="index.html" ariaHaspopup="true" ariaExpanded="false">Hosting</a>

                                    {/* <!-- Demos - Mega Menu --> */}
                                    <div className="hs-mega-menu main-sub-menu" style={{ width: "715px" }} aria-labelledby="hostingMegaMenu">
                                        <div className="row no-gutters">
                                            <div className="col-md-6">
                                                <div className="menu-item-wrap py-0 p-md-3 p-lg-3">
                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="shared-hosting.html">
                                                            <div className="media align-items-center">
                                                                <div className="menu-item-icon rounded-circle primary-bg">
                                                                    <i className="fas fa-server"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <span className="u-header__promo-title">Shared Web Hosting</span>
                                                                    <small className="u-header__promo-text">Innovate reliable quality
                                                                        Starting at <strong>$2.99</strong></small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}
                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="vps-hosting.html">
                                                            <div className="media align-items-center">
                                                                <div className="menu-item-icon rounded-circle accent-bg">
                                                                    <i className="fas fa-box"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <span className="u-header__promo-title">VPS Hosting</span>
                                                                    <small className="u-header__promo-text">Pefficiently maintain
                                                                        Starting at <strong>$11.99</strong></small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}

                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="cloud-hosting.html">
                                                            <div className="media align-items-center">
                                                                <div className="menu-item-icon rounded-circle secondary-bg">
                                                                    <i className="fas fa-cloud"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <span className="u-header__promo-title">Cloud Hosting </span>
                                                                    <small className="u-header__promo-text">Conveniently cloud Starting
                                                                        at <strong>$5.99/mo</strong></small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="menu-item-wrap py-0 p-md-3 p-lg-3">
                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="email-hosting.html">
                                                            <div className="media align-items-center">
                                                                <div className="menu-item-icon rounded-circle twitter-bg">
                                                                    <i className="fas fa-envelope"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <span className="u-header__promo-title">Email Hosting</span>
                                                                    <small className="u-header__promo-text">First Starting at <strong>$0.99/mo
                                                                        per mailbox</strong></small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}
                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="windows-vps-hosting.html">
                                                            <div className="media align-items-center">
                                                                <div className="menu-item-icon rounded-circle btn-behance">
                                                                    <i className="fab fa-windows"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <span className="u-header__promo-title">Windows VPS Hosting</span>
                                                                    <small className="u-header__promo-text">Globally Starting at
                                                                        <strong>$9.99/mo</strong></small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}
                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="dedicated-server-hosting.html">
                                                            <div className="media align-items-center">
                                                                <div className="menu-item-icon rounded-circle dribbble-bg">
                                                                    <i className="fas fa-database"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <span className="u-header__promo-title">Dedicated Server Hosting</span>
                                                                    <small className="u-header__promo-text">Conveniently Starting at
                                                                        <strong>$9.99/mo</strong></small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}
                                                </div>
                                            </div>

                                        </div>
                                        {/* <!--application hosting start--> */}
                                        <div className="application-hosting text-white">
                                            <span className="sub-menu-title text-lg-center text-md-center text-white mb-3">Application For Hosting</span>
                                            <ul className="application-hosting-list">
                                                <li><a href="wp-hosting.html"><img src="assets/img/icons/wordpress-icon-color.svg" alt="icon" />WordPress Hosting</a></li>
                                                <li><a href="joomla-hosting.html"><img src="assets/img/icons/joomla-icon-color.svg" alt="icon" />Joomla Hosting</a></li>
                                                <li><a href="magento-hosting.html"><img src="assets/img/icons/magento-icon-color.svg" alt="icon" />Magento Hosting</a></li>
                                                <li><a href="opencart-hosting.html"><img src="assets/img/icons/opencart-icon-color.svg" alt="icon" />Opencart Hosting</a></li>
                                                <li><a href="prestashop-hosting.html"><img src="assets/img/icons/prestashop-icon-color.svg" alt="icon" />Prestashop Hosting</a></li>
                                                <li><a href="drupal-hosting.html"><img src="assets/img/icons/drupal-icon-color.svg" alt="icon" />Drupal Hosting</a></li>
                                            </ul>
                                        </div>
                                        {/* <!--application hosting end--> */}
                                    </div>
                                    {/* <!-- End Demos - Mega Menu --> */}
                                </li>
                                {/* <!--hosting end--> */}

                                {/* <!--domain start--> */}
                                <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                    <a id="domainMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="index.html" ariaHaspopup="true" ariaExpanded="false">Domain</a>
                                    {/* <!-- Demos - Mega Menu --> */}
                                    <div className="hs-mega-menu main-sub-menu" style={{ width: "660px" }} aria-labelledby="domainMegaMenu">
                                        <div className="row no-gutters">
                                            <div className="col-md-6 col-sm-6">
                                                <div className="menu-item-wrap p-3">
                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="domain-checker.html">
                                                            <div className="d-flex align-items-center pb-1">
                                                                <i className="fas fa-globe mr-2 color-primary"></i>
                                                                <span className="u-header__promo-title">Domain Checker</span>
                                                            </div>
                                                            <small className="u-header__promo-text">Find the perfect domain for your business</small>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}
                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="domain-transfer.html">
                                                            <div className="d-flex align-items-center pb-1">
                                                                <i className="fas fa-exchange-alt mr-2 color-accent"></i>
                                                                <span className="u-header__promo-title">Domain Transfer</span>
                                                            </div>
                                                            <small className="u-header__promo-text">Transfer your domain easily using this tool</small>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}
                                                    {/* <!--menu title with subtitle and icon item start--> */}
                                                    <div className="title-with-icon-item">
                                                        <a className="title-with-icon-link" href="domain-registration.html">
                                                            <div className="d-flex align-items-center pb-1">
                                                                <i className="fas fa-copyright mr-2 instagram-color"></i>
                                                                <span className="u-header__promo-title">Domain Registration </span>
                                                            </div>
                                                            <small className="u-header__promo-text">Register your domain name for lifetime</small>
                                                        </a>
                                                    </div>
                                                    {/* <!--menu title with subtitle and icon item end--> */}
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-6 gray-light-bg custom-radius-right">
                                                <div className="menu-item-wrap p-4">
                                                    <h6>#1 Web Hosting Company</h6>
                                                    <ul className="list-unstyled tech-feature-list">
                                                        <li className="py-1"><small><span className="fad fa-check-circle text-success mr-2"></span><strong>Flexible</strong> Easy to Use Control Panel</small></li>
                                                        <li className="py-1"><small><span className="fad fa-check-circle text-success mr-2"></span><strong>99%</strong> Uptime Guarantee</small></li>
                                                        <li className="py-1"><small><span className="fad fa-check-circle text-success mr-2"></span><strong>45-Day</strong> Money-Back Guarantee</small></li>
                                                        <li className="py-1"><small><span className="fad fa-check-circle text-success mr-2"></span><strong>Free SSL</strong> Certificate Included</small></li>
                                                    </ul>
                                                    <a className="btn btn-brand-03 btn-block mt-3" href="index.html">Learn More <span
                                                        className="fas fa-angle-right ml-2"></span></a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- End Demos - Mega Menu --> */}
                                </li>
                                {/* <!--domain end--> */}

                                <li className="nav-item custom-nav-item">
                                    <a className="nav-link custom-nav-link" href="affiliates.html">Affiliates</a>
                                </li>

                                {/* <!--about start--> */}
                                <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                    <a id="aboutMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="index.html" ariaHaspopup="true" ariaExpanded="false">Company</a>

                                    {/* <!--about submenu start--> */}
                                    <div className="hs-mega-menu main-sub-menu" style={{ width: "320px" }} aria-labelledby="aboutMegaMenu">
                                        {/* <!--menu title with subtitle and icon item start--> */}
                                        <div className="title-with-icon-item">
                                            <a className="title-with-icon-link" href="contact-us.html">
                                                <div className="media align-items-center">
                                                    <img className="menu-titile-icon" src="assets/img/chat-mobile.svg" alt="SVG" />
                                                    <div className="media-body">
                                                        <span className="u-header__promo-title">Contact Us</span>
                                                        <small className="u-header__promo-text">Face any problem contact with us
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        {/* <!--menu title with subtitle and icon item end--> */}

                                        {/* <!--menu title with subtitle and icon item start--> */}
                                        <div className="title-with-icon-item">
                                            <a className="title-with-icon-link" href="about-us.html">
                                                <div className="media align-items-center">
                                                    <img className="menu-titile-icon" src="assets/img/community.svg" alt="SVG" />
                                                    <div className="media-body">
                                                        <span className="u-header__promo-title">About Us</span>
                                                        <small className="u-header__promo-text">We are leading hosting company
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        {/* <!--menu title with subtitle and icon item end--> */}

                                        {/* <!--menu title with subtitle and icon item start--> */}
                                        <div className="title-with-icon-item">
                                            <a className="title-with-icon-link" href="partners.html">
                                                <div className="media align-items-center">
                                                    <img className="menu-titile-icon" src="assets/img/partner.svg" alt="SVG" />
                                                    <div className="media-body">
                                                        <span className="u-header__promo-title">Our Partner</span>
                                                        <small className="u-header__promo-text">We have trusted partners globally
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        {/* <!--menu title with subtitle and icon item end--> */}

                                        {/* <!--menu title with subtitle and icon item start--> */}
                                        <div className="title-with-icon-item">
                                            <a className="title-with-icon-link" href="network.html">
                                                <div className="media align-items-center">
                                                    <img className="menu-titile-icon" src="assets/img/network.svg" alt="SVG" />
                                                    <div className="media-body">
                                                        <span className="u-header__promo-title">Network</span>
                                                        <small className="u-header__promo-text">Keep your data save and secure
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        {/* <!--menu title with subtitle and icon item end--> */}

                                        {/* <!--menu title with subtitle and icon item start--> */}
                                        <div className="title-with-icon-item">
                                            <a className="title-with-icon-link" href="blog-grid.html">
                                                <div className="media align-items-center">
                                                    <img className="menu-titile-icon" src="assets/img/blog.svg" alt="SVG" />
                                                    <div className="media-body">
                                                        <span className="u-header__promo-title">Company Blog</span>
                                                        <small className="u-header__promo-text">Industry latest technology news &
                                                            tips
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        {/* <!--menu title with subtitle and icon item end--> */}
                                    </div>
                                    {/* <!--about submenu end--> */}
                                </li>
                                {/* <!--about end--> */}

                                {/* <!--button start--> */}
                                {/* <li className="nav-item header-nav-last-item d-flex align-items-center d-none">
                                    <a className="btn btn-brand-03 animated-btn" href="https://whmcs.themetags.com/?systpl=kohost-professional" target="_blank" rel="noreferrer">
                                        <span className="fa fa-user pr-2"></span> Client Area
                                    </a>
                                </li> */}
                                {/* <!--button end--> */}
                            </ul>
                        </div>
                        {/* <!--main menu end--> */}
                    </nav>
                </div>
            </div>
            {/* <!--main header menu end--> */}
        </header>
    );
}

export default Header;