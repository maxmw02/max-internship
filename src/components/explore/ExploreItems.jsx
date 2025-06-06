import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Timer from "../UI/Timer";

const ExploreItems = () => {
  const [sortType, setSortType] = useState("");
  const [exploreData, setExploreData] = useState([])
  const [sortedExploreData, setSortedExploreData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const displayFull = (visibleItems === exploreData.length);

  async function fetchExploreData() {
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore`
      );
      setExploreData(data)
      setSortedExploreData(data);
    } catch (error) {
      console.error("Error fetching api:", error);
      setSortedExploreData([]);
    }
  }

  useEffect(() => {
    if (sortType === "price_high_to_low") {
      setSortedExploreData((prev) =>
        [...prev].sort((a, b) => {
          const priceA = parseFloat(a.price);
          const priceB = parseFloat(b.price);
          return priceB - priceA;
        })
      );
    } else if (sortType === "price_low_to_high") {
      setSortedExploreData((prev) =>
        [...prev].sort((a, b) => {
          const priceA = parseFloat(a.price);
          const priceB = parseFloat(b.price);
          return priceA - priceB;
        })
      );
    } else if (sortType === "likes_high_to_low") {
      setSortedExploreData((prev) =>
        [...prev].sort((a, b) => {
          const likesA = parseInt(a.likes);
          const likesB = parseInt(b.likes);
          return likesB - likesA;
        })
      );
    }
  }, [sortType]);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  useEffect(() => {
    fetchExploreData();
  }, []);

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          onChange={(event) => {
            setSortType(event.target.value);
          }}
          value={sortType}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {sortedExploreData.slice(0, visibleItems).map((displayedExploreData) => (
        <div
          key={displayedExploreData.id}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to="/author"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <img
                  className="lazy"
                  src={displayedExploreData.authorImage}
                  alt=""
                />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            <Timer initialTime={displayedExploreData.expiryDate} />
            <div className="nft__item_wrap">
              <div className="nft__item_extra">
                <div className="nft__item_buttons">
                  <button>Buy Now</button>
                  <div className="nft__item_share">
                    <h4>Share</h4>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <Link to="/item-details">
                <img
                  src={displayedExploreData.nftImage}
                  className="lazy nft__item_preview"
                  alt=""
                />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
                <h4>{displayedExploreData.title}</h4>
              </Link>
              <div className="nft__item_price">
                {displayedExploreData.price}
              </div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{displayedExploreData.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="col-md-12 text-center">
        {displayFull ? (
          ""
        ) : (
          <button
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={() => {
              loadMore();
            }}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
