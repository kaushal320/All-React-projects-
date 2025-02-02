import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img className="card-img" src={img} alt="Shoe" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>
              {newPrice}
            </div>
            <div className="bag">
              <FaBagShopping className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
