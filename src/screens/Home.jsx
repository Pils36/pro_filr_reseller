import React from "react";

function Home() {

    return (
        <div className="main">

            {/* <!--hero section start--> */}
            <section className="ptb-100 overflow-hidden primary-bg">
                <div className="container">
                    <div
                        className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                        <div className="col-md-12 col-lg-6">
                            <div className="hero-slider-content text-white py-5">
                                <div className="headline mb-4">
                                    <p className="mb-0"><i className="fas fa-bell rounded-circle mr-2"></i> <span
                                        className="font-weight-bold">30% Discount </span> first annual purchase</p>
                                </div>
                                <h1 className="text-white">Unlimited Domain & Hosting in One Platform</h1>
                                <p className="lead">A ton of website hosting options, 99.9% uptime guarantee, free SSL
                                    certificate, easy WordPress installs.</p>

                                <div className="action-btns mt-4">
                                    <a href="index.html" className="btn btn-brand-03 btn-lg">Get Started Now </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <div className="img-wrap">
                                <img src="assets/img/hero-home.svg" alt="hosting" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* <!--end of row--> */}
                </div>
                {/* <!--end of container--> */}
            </section>
            {/* <!--hero section end--> */}

            {/* <!--domain search promo start--> */}
            <section className="position-relative zindex-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8 col-12">
                            <div className="domain-search-wrap border gray-light-bg">
                                <h4 className="text-center">Looking For Domain Name?</h4>
                                <form action="https://kohost.themetags.com/domain-search-result.php" method="GET"
                                    className="domain-search-form my-4">
                                    <input type="text" name="domain" id="domain" className="form-control"
                                        placeholder="yourdomainname.com" />
                                    <div className="select-group">
                                        <select name="domainType" className="form-control">
                                            <option value="com" defaultValue>.com</option>
                                            <option value="net">.net</option>
                                            <option value="io">.io</option>
                                            <option value="info">.info</option>
                                            <option value="store">.store</option>
                                            <option value="store">.org</option>
                                        </select>
                                        <button type="submit" className="btn btn-brand-01"><i className="fas fa-search pr-1"></i>
                                            Search</button>
                                    </div>
                                </form>
                                <div className="domain-list-wrap text-center">
                                    <ul className="list-inline domain-search-list">
                                        <li className="list-inline-item bg-white border rounded"><a href="index.html"><img
                                            src="assets/img/com.png" alt="com" width="70" className="img-fluid" />
                                            <span>$8.99</span></a>
                                        </li>
                                        <li className="list-inline-item bg-white border rounded"><a href="index.html"><img
                                            src="assets/img/online.png" alt="com" width="70" className="img-fluid" />
                                            <span>$0.99</span></a>
                                        </li>
                                        <li className="list-inline-item bg-white border rounded"><a href="index.html"><img
                                            src="assets/img/net.png" alt="com" width="70" className="img-fluid" />
                                            <span>$4.99</span></a>
                                        </li>
                                        <li className="list-inline-item bg-white border rounded"><a href="index.html"><img
                                            src="assets/img/org.png" alt="com" width="70" className="img-fluid" />
                                            <span>$2.99</span></a>
                                        </li>
                                        <li className="list-inline-item bg-white border rounded"><a href="index.html"><img
                                            src="assets/img/store.png" alt="com" width="70" className="img-fluid" />
                                            <span>$0.99</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--domain search promo end--> */}

            {/* <!--promo section start--> */}
            <section className="promo-section ptb-100 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-7">
                            <div className="section-heading text-center">
                                <h2>We Provide You World Class Best Hosting Features For You</h2>
                                <p>Uniquely repurpose strategic core competencies with progressive content. Assertively
                                    transition ethical imperatives and collaborative manufactured products. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center justify-content-sm-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
                                <div className="card-body">
                                    <div className="pb-2">
                                        <span className="fas fa-cubes icon-size-lg color-primary"></span>
                                    </div>
                                    <div className="pt-2 pb-3">
                                        <h5>Fully functional</h5>
                                        <p className="mb-0">Phosfluorescently target bleeding sources through viral methodsp
                                            progressively expedite empowered.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
                                <div className="card-body">
                                    <div className="pb-2">
                                        <span className="fas fa-headset icon-size-lg color-primary"></span>
                                    </div>
                                    <div className="pt-2 pb-3">
                                        <h5>24/7 Live Chat</h5>
                                        <p className="mb-0">Enthusiastically productivate interactive interfaces after
                                            energistically scale client-centered catalysts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card single-promo-card single-promo-hover text-center p-2 mt-4">
                                <div className="card-body">
                                    <div className="pb-2">
                                        <span className="fas fa-lock icon-size-lg color-primary"></span>
                                    </div>
                                    <div className="pt-2 pb-3">
                                        <h5>Secure Data</h5>
                                        <p className="mb-0">Synergistically architect virtual content solutions. Monotonectally
                                            communicate cooperative solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--promo section end--> */}

            {/* <!--call to action start--> */}
            <section className="ptb-60 primary-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7 col-lg-6">
                            <div className="cta-content-wrap text-white">
                                <h2 className="text-white">Best Cloud Hosting <br /> With Trusted Service</h2>
                                <p>Objectively innovate high standards in methodologies vis-a-vis sustainable compellingly
                                    maintain multidisciplinary process proactively streamline mission-critical information
                                    via quality imperatives. </p>
                            </div>
                            <div className="action-btns mt-4">
                                <a href="index.html" className="btn btn-brand-03"> Get Start Now </a>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="cta-img-wrap text-center">
                                <img src="assets/img/cta-new.svg" className="img-fluid" alt="server room" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--call to action end--> */}

            {/* <!--services section start--> */}
            <section className="ptb-100 service-section-wrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-7">
                            <div className="section-heading text-center">
                                <h2>Our Tools And Services For Optimize Website Building</h2>
                                <p>Uniquely repurpose strategic core competencies with progressive content. Assertively
                                    transition ethical imperatives and collaborative manufactured products. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="single-service p-5 rounded border gray-light-bg">
                                <div className="service-header d-flex align-items-center justify-content-between">
                                    <h4><span className="h5 text-uppercase">Easy & First</span> <br />Website Building</h4>
                                    <span className="fas fa-shield-alt fa-3x color-primary"></span>
                                </div>
                                <p>Globally fashion client-focused synergy for accurate synergy. Quickly network cost
                                    effective ideas rather than standardized leadership. Interactively syndicate alternative
                                    opportunities via ubiquitous systems. </p>
                                <a href="index.html" className="btn btn-outline-brand-02 mt-3">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="single-service p-5 rounded border gray-light-bg">
                                <div className="service-header d-flex align-items-center justify-content-between">
                                    <h4><span className="h5 text-uppercase">Suitable For All Users</span> <br />Managed WordPress
                                    </h4>
                                    <span className="fab fa-wordpress fa-3x color-primary"></span>
                                </div>
                                <p>Globally fashion client-focused synergy for accurate synergy. Quickly network cost
                                    effective ideas rather than standardized leadership. Interactively syndicate alternative
                                    opportunities via ubiquitous systems. </p>
                                <a href="index.html" className="btn btn-outline-brand-02 mt-3">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="single-service p-5 rounded border gray-light-bg">
                                <div className="service-header d-flex align-items-center justify-content-between">
                                    <h4><span className="h5 text-uppercase">Commitment To</span> <br />Dedicated Support</h4>
                                    <span className="fas fa-headset fa-3x color-primary"></span>
                                </div>
                                <p>Globally fashion client-focused synergy for accurate synergy. Quickly network cost
                                    effective ideas rather than standardized leadership. Interactively syndicate alternative
                                    opportunities via ubiquitous systems. </p>
                                <a href="index.html" className="btn btn-outline-brand-02 mt-3">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="single-service p-5 rounded border gray-light-bg">
                                <div className="service-header d-flex align-items-center justify-content-between">
                                    <h4><span className="h5 text-uppercase">Easy & Smooth</span> <br />Website Transfer</h4>
                                    <span className="fas fa-dolly-flatbed fa-3x color-primary"></span>
                                </div>
                                <p>Globally fashion client-focused synergy for accurate synergy. Quickly network cost
                                    effective ideas rather than standardized leadership. Interactively syndicate alternative
                                    opportunities via ubiquitous systems. </p>
                                <a href="index.html" className="btn btn-outline-brand-02 mt-3">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--services section end--> */}

            {/* <!--pricing section start--> */}
            <section className="pricing-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-4">
                                <h2>Our Flexible Pricing Plan</h2>
                                <p>
                                    Professional hosting at an affordable price. Distinctively recaptiualize
                                    principle-centered
                                    core competencies through client-centered
                                    core competencies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-md-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div className="pricing-icon">
                                    <img src="assets/img/dadicate-web-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 className="package-title">Web Hosting</h4>
                                <p className="mb-4">For small business</p>
                                <div className="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div className="h2">$8.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="index.html" className="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="popular-price text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div className="pricing-icon">
                                    <img src="assets/img/vps-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 className="package-title">VPS Hosting</h4>
                                <p className="mb-4">For medium business</p>
                                <div className="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div className="h2">$8.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="index.html" className="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div className="pricing-icon">
                                    <img src="assets/img/cloud-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 className="package-title">Cloud Hosting</h4>
                                <p className="mb-4">Large and enterprise business</p>
                                <div className="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div className="h2">$8.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="index.html" className="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="support-cta text-center mt-5">
                                <h5 className="mb-1"><span className="ti-headphone-alt color-primary mr-3"></span>We're Here to Help
                                    You
                                </h5>
                                <p>Have some questions? <a href="index.html">Chat with us now</a>, or <a href="index.html">send us an
                                    email</a> to
                                    get in touch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--pricing section end--> */}

            {/* <!--features section start--> */}
            <div className="feature-section ptb-100 ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7 col-lg-6">
                            <div className="feature-content-wrap">
                                <h2>99% Cloud Hosing High-speed Cutting-edge Platform</h2>
                                <p>Authoritatively transform functionalized information without cross-platform convergence.
                                    Quickly reconceptualize cross-unit e-markets without superior products. Appropriately
                                    foster timely collaboration and idea-sharing rather than magnetic potentialities.
                                    Authoritatively restore high standards in outsourcing whereas vertical meta-services.
                                    Compellingly reconceptualize out-of-the-box outsourcing through plug-and-play synergy.
                                </p>
                                <a href="index.html" className="btn btn-outline-brand-01 mt-3" target="_blank">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-6 d-none d-md-block d-lg-block">
                            <div className="feature-img-wrap text-center">
                                <img src="assets/img/feature-new-1.svg" className="img-fluid" alt="server room" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between mt-5">
                        <div className="col-md-5 col-lg-6 d-none d-md-block d-lg-block">
                            <div className="feature-img-wrap text-center">
                                <img src="assets/img/feature-new-2.svg" className="img-fluid" alt="server room" />
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-6">
                            <div className="feature-content-wrap">
                                <h2>Our Own Interfaces for All Management Processes</h2>
                                <p>Authoritatively transform functionalized information without cross-platform convergence.
                                    Quickly reconceptualize cross-unit e-markets without superior products. Appropriately
                                    foster timely collaboration and idea-sharing rather than magnetic potentialities.
                                    Authoritatively restore high standards in outsourcing whereas vertical meta-services.
                                    Compellingly reconceptualize out-of-the-box outsourcing through plug-and-play synergy.
                                </p>
                                <a href="index.html" className="btn btn-outline-brand-01 mt-3" target="_blank">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--features section end--> */}

            {/* <!--call to action start--> */}
            <section className="ptb-60 primary-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                            <div className="cta-content-wrap text-white">
                                <h2 className="text-white">24/7 Expert Hosting Support Our Customers Love</h2>
                                <p>Objectively innovate high compellingly maintain progressively pursue mission-critical
                                    information quality imperatives. </p>
                            </div>
                            <div className="support-action d-inline-flex flex-wrap">
                                <a href="mailto:support@yourdomain.com" className="mr-3"><i
                                    className="fas fa-comment mr-1 color-accent"></i>
                                    <span>support@yourdomain.com</span></a>
                                <a href="tel:+00123456789" className="mb-0"><i className="fas fa-phone-alt mr-1 color-accent"></i>
                                    <span>+00123456789</span></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-none d-lg-block">
                            <div className="cta-img-wrap text-center">
                                <img src="assets/img/call-center-support.svg" width="250" className="img-fluid"
                                    alt="server room" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--call to action end--> */}

            {/* <!--network map section start--> */}
            <section className="network-map-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>Our Data centers Location</h2>
                                <p className="lead">Cloudhub offers a low latency worldwide network, enabling you to deploy your
                                    service infrastructure in close proximity to your customer base.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="network-map-wrap">
                                <ul className="custom-map-location">
                                    <li style={{ top: "29%", left: "15.5%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="Canada"></span>
                                    </li>
                                    <li style={{ top: "42%", left: "20%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="United States"></span>
                                    </li>
                                    <li style={{ top: "70%", left: "32%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="Brazil"></span>
                                    </li>
                                    <li style={{ top: "57%", left: "48%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="Nigeria"></span>
                                    </li>
                                    <li style={{ top: "18%", left: "53%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="Finland"></span>
                                    </li>
                                    <li style={{ top: "34%", left: "55%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="Ukraine"></span>
                                    </li>
                                    <li style={{ top: "45%", left: "68%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="India"></span>
                                    </li>
                                    <li style={{ top: "35%", left: "80%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="China"></span>
                                    </li>
                                    <li style={{ top: "77%", left: "85%" }}>
                                        <span data-toggle="tooltip" data-placement="top" title="Australia"></span>
                                    </li>
                                </ul>
                                <img src="assets/img/map-dark.svg" alt="location map" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--network map section end--> */}

            {/* <!--testimonial section start--> */}
            <section className="review-section ptb-100 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-7">
                            <div className="section-heading text-center">
                                <h2>Our Lovely Client Say About Us</h2>
                                <p>Uniquely repurpose strategic core competencies with progressive content. Assertively
                                    transition ethical imperatives and collaborative manufactured products. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="owl-carousel owl-theme client-testimonial-1 dot-bottom-center custom-dot">
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Amazing template</h5>
                                        <p>Distinctively foster maintainable metrics whereas multidisciplinary process
                                            improvements. Distinctively foster maintainable metrics whereas
                                            multidisciplinary process improvements. Objectively implement strategic niches
                                            through.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-2.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Ana Joly</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Best template for app</h5>
                                        <p>Efficiently innovate customized growth strategies whereas error-free paradigms.
                                            Monotonectally enhance stand-alone data with prospective innovation.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-1.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Tony Roy</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Efficiently innovate app</h5>
                                        <p>Continually redefine sticky channels whereas extensive "outside the box"
                                            thinking. Rapidiously supply focused schemas vis-a-vis optimal users.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-3.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Ana Joly</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Uniquely mesh flexible</h5>
                                        <p>Phosfluorescently optimize intermandated platforms without integrated
                                            infrastructures. Proactively redefine granular thinking before.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-4.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Ana Joly</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Compellingly empower app</h5>
                                        <p>Proactively grow focused niche markets with virtual e-services. Rapidiously
                                            pursue effective ROI via holistic information completely reintermediate.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-2.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Ana Joly</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Holisticly reintermediate</h5>
                                        <p>Collaboratively reintermediate out-of-the-box e-business via economically sound
                                            supply chains. Dynamically target client-based holistic information.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-1.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Ana Joly</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Uniquely mesh flexible</h5>
                                        <p>Phosfluorescently optimize intermandated platforms without integrated
                                            infrastructures. Proactively redefine granular thinking before.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-3.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Ana Joly</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Compellingly empower app</h5>
                                        <p>Proactively grow focused niche markets with virtual e-services. Rapidiously
                                            pursue effective ROI via holistic information completely reintermediate.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-1.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Ana Joly</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="border single-review-wrap bg-white p-4 m-3">
                                    <div className="review-body">
                                        <h5>Holisticly reintermediate</h5>
                                        <p>Collaboratively reintermediate out-of-the-box e-business via economically sound
                                            supply chains. Dynamically target client-based holistic information.</p>
                                    </div>
                                    <div className="review-author d-flex align-items-center">
                                        <div className="author-avatar">
                                            <img src="assets/img/client-2.jpg" width="64" alt="author"
                                                className="rounded-circle shadow-sm img-fluid mr-3" />
                                            <span>“</span>
                                        </div>
                                        <div className="review-info">
                                            <h6 className="mb-0">Ana Joly</h6>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--testimonial section end--> */}

            {/* <!--our blog section start--> */}
            <section className="our-blog-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center">
                                <h2>Recent News and Events</h2>
                                <p>
                                    Efficiently matrix robust total linkage after market positioning bandwidth. Holisticly
                                    restore B2B materials rather than brand flexible paradigms vis-a-vis mission-critical
                                    e-commerce.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <a className="single-blog-article border rounded bg-white d-block p-4 mt-4" href="index.html">
                                <div className="article-heading">
                                    <h3 className="h5 mb-0">Professionally cultivate testing</h3>
                                    <span> On 20 Mar, 2020</span>
                                </div>
                                <span className="border-shape my-3"></span>
                                <p>Enthusiastically pursue tactical architectures vis-a-vis goal-oriented resources.</p>
                                <div className="article-footer d-flex align-items-center justify-content-between">
                                    <div className="article-comments">
                                        <span><i className="fas fa-comment mr-1"></i> 34 Comments</span>
                                    </div>
                                    <div className="article-user">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a className="single-blog-article border rounded bg-white d-block p-4 mt-4" href="index.html">
                                <div className="article-heading">
                                    <h3 className="h5 mb-0">Monotonectally promote market</h3>
                                    <span> On 20 May, 2020</span>
                                </div>
                                <span className="border-shape my-3"></span>
                                <p>Enthusiastically pursue tactical architectures vis-a-vis goal-oriented resources.</p>
                                <div className="article-footer d-flex align-items-center justify-content-between">
                                    <div className="article-comments">
                                        <span><i className="fas fa-comment mr-1"></i> 24 Comments</span>
                                    </div>
                                    <div className="article-user">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a className="single-blog-article border rounded bg-white d-block p-4 mt-4" href="index.html">
                                <div className="article-heading">
                                    <h3 className="h5 mb-0">Seamlessly evolve interactive </h3>
                                    <span> On 10 Mar, 2020</span>
                                </div>
                                <span className="border-shape my-3"></span>
                                <p>Enthusiastically pursue tactical architectures vis-a-vis goal-oriented resources.</p>
                                <div className="article-footer d-flex align-items-center justify-content-between">
                                    <div className="article-comments">
                                        <span><i className="fas fa-comment mr-1"></i> 20 Comments</span>
                                    </div>
                                    <div className="article-user">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--our blog section end--> */}

            {/* <!--our team section start--> */}
            <section className="client-section  ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-5">
                                <h2>Lots of Customer Love Us</h2>
                                <p>
                                    Rapidiously morph transparent internal or sources whereas resource sucking e-business.
                                    Conveniently innovate formulate clicks-and-mortar manufactured products compelling
                                    internal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                                <div className="item single-customer">
                                    <img src="assets/img/customers/clients-logo-01.png" alt="client logo"
                                        className="customer-logo" />
                                </div>
                                <div className="item single-customer">
                                    <img src="assets/img/customers/clients-logo-02.png" alt="client logo"
                                        className="customer-logo" />
                                </div>
                                <div className="item single-customer">
                                    <img src="assets/img/customers/clients-logo-03.png" alt="client logo"
                                        className="customer-logo" />
                                </div>
                                <div className="item single-customer">
                                    <img src="assets/img/customers/clients-logo-04.png" alt="client logo"
                                        className="customer-logo" />
                                </div>
                                <div className="item single-customer">
                                    <img src="assets/img/customers/clients-logo-05.png" alt="client logo"
                                        className="customer-logo" />
                                </div>
                                <div className="item single-customer">
                                    <img src="assets/img/customers/clients-logo-06.png" alt="client logo"
                                        className="customer-logo" />
                                </div>
                                <div className="item single-customer">
                                    <img src="assets/img/customers/clients-logo-07.png" alt="client logo"
                                        className="customer-logo" />
                                </div>
                                <div className="item single-customer">
                                    <img src="assets/img/customers/clients-logo-08.png" alt="client logo"
                                        className="customer-logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--our team section end--> */}

        </div>
    );

}

export default Home;