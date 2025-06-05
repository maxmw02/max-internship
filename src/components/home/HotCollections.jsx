import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HotCollections = () => {
  const [nftData, setNftData] = useState([]);

  async function fetchApi() {
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
      );
      setNftData(data);
    } catch (error) {
      console.error("Error fetching api:", error);
      setNftData([]);
    }
  }



  useEffect(() => {
    fetchApi();
  }, []);

  const options = {
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
      770: {
        items: 3,
      },
      980: {
        items: 4,
      },
    },
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
  };
  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <ReactOwlCarousel className="owl-theme" {...options}>
            {nftData.map((data, index) => (
              <div key={index}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    {nftData.length === 0 ? (
                      <Skeleton height={"100%"} borderRadius={10} />
                    ) : (
                      <Link to="/item-details">
                        <img
                          src={data.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    )}
                  </div>
                  <div className="nft_coll_pp">
                    {nftData.length === 0 ? (
                      <Skeleton circle={true} height={55} />
                    ) : (
                      <Link to="/author">
                        <img
                          className="lazy pp-coll"
                          src={data.authorImage}
                          alt=""
                        />
                      </Link>
                    )}
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    {nftData.length === 0 ? (
                      <Skeleton width={80} />
                    ) : (
                      <Link to="/explore">
                        <h4>{data.title}</h4>
                      </Link>
                    )}
                    {nftData.length === 0 ? (
                      <Skeleton width={40} />
                    ) : (
                      <span>ERC-{data.code}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </ReactOwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
