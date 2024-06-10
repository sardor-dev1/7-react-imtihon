import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Cards from "../pages/cars/Cars.jsx";
import Main from "../pages/single-car/main/Main";
import Products from "../pages/products/index.jsx";
import SingleProduct from "../components/ui/single-product/SingleProduct.jsx";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="main/*" element={<Main />}>
          <Route index element={<Cards />} />
          <Route path="product" element={<Products />} />
          <Route path="product-single/:id" element={<SingleProduct />} />{" "}
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
