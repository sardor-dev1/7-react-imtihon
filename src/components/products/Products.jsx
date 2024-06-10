import { useState } from "react";
import Cards from "../cards/Cards";
import cardImg from "../../assets/images/cardImg.jpg"

const Products = () => {
    const [users] = useState([
      { name: "card-1", img: cardImg },
      { name: "card-2", img: cardImg },
      { name: "card-3", img: cardImg },
    ]);
  return (
    <div className="container">
      <div className="row">
        {users.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Cards user={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products