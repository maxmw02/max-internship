import React from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";


const Landing = () => {

  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="spacer-single"></div>
              <h6
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
                data-aos-delay="500"
              >
                <span className="text-uppercase id-color-2">
                  Ultraverse Market
                </span>
              </h6>
              <div className="spacer-10"></div>
              <h1
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="200"
              >
                Create, sell or collect digital items.
              </h1>
              <p
                className="lead"
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-delay="200"
              >
                Unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore not
                interchangeable
              </p>
              <div className="spacer-10"></div>
              <div
                data-aos="fade-zoom-in"
                data-aos-duration="1500"
                data-aos-delay="700"
              >
                <Link className="btn-main lead" to="/explore">
                  Explore
                </Link>
              </div>
              <div className="mb-sm-30"></div>
            </div>
            <div className="col-md-6 xs-hide">
              <img
                src={NFT}
                className="lazy img-fluid"
                alt=""
                data-aos="fade-zoom-in"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
