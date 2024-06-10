import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CustomizedProgressBars from "../../loading/loading";

import "./single.scss";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <CustomizedProgressBars />;

  return (
    <div className="single container">
      <div className="single__wrap">
        <div className="single__wrap__img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="single__wrap__info">
          <h2 className="single__wrap__info__title">{product.title}</h2>
          <p className="single__wrap__info__text">{product.description}</p>
          <p className="single__wrap__info__price">
            Price: <span>{product.price}</span>$
          </p>
          <p className="single__wrap__info__category">
            Category: <span>{product.category}</span>
          </p>
          <div>
            <p className="single__wrap__info__star">
              Rate:{" "}
              <span>
                {product.rating.rate} <i className="fa-solid fa-star"></i>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
