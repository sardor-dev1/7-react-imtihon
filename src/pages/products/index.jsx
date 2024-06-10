import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// MUI cards
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// MUI button
import DeleteIcon from "@mui/icons-material/Delete";

import "./index.scss";

const Index = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data.slice(0, 20));
    });
  }, []);

  const handleDeletePhoto = (cardId) => {
    setProducts(products.filter((photo) => photo.id !== cardId));
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="product">
        <div className="product__body">
          {products.map((item) => (
            <Card
              key={item.id}
              className="product__card"
              sx={{ maxWidth: 360 }}
              onClick={() => handleCardClick(item.id)}
            >
              <CardActionArea>
                <CardMedia
                  className="product__img"
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography
                    className="title-lines"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    ${item.price}
                  </Typography>
                  <Typography
                    className="limited-lines"
                    gutterBottom
                    variant="body2"
                    component="div"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="card__footer">
                <CardActions className="product__delete">
                  <Button
                    variant="outlined"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeletePhoto(item.id);
                    }}
                    size="small"
                    color="primary"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </CardActions>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
