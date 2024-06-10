import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Cars from "../pages/cars/Cars";
import SingleCar from "../pages/single-car/SingleCar";
import Main from "../pages/single-car/main/Main";
import Products from "../pages/products/index.jsx";
import SingleProduct from "../components/ui/single-product/product.jsx";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="main/*" element={<Main />}>
          <Route index element={<Cars />} />
          <Route path="single-car/:id" element={<SingleCar />} />
          <Route path="product" element={<Products />} />
          <Route path="single-product/" element={<SingleProduct />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
