import React from "react";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveDrawer from "../../layout";

const Header = () => {
  return (
    <header className="header">
      <h2>Logo</h2>
      <div>
        <Link to={"/"}>
          <button className="header__out">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
