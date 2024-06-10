import { useState } from "react";
import UserModal from "../../components/modal/UserModal";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import "./index.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Cars = () => {
  const [cars, setCars] = useState([
    {
      id: nanoid(),
      name: "MERS",
      price: "5655",
      color: "black",
      year: "2025",
      brand: "merc",
      action: "21654",
    },
    {
      id: nanoid(),
      name: "BMW",
      price: "5655",
      color: "red",
      year: "2015",
      brand: "bmw",
      action: "21654",
    },
  ]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [currentCar, setCurrentCar] = useState(null);

  let navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleEdit = (car) => {
    setCurrentCar(car);
    setModal(true);
  };

  const handleDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <UserModal
        open={modal}
        toggle={() => setModal(false)}
        cars={cars}
        setCars={setCars}
        currentCar={currentCar}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row items-center my-4">
              <div className="col-2">
                <Button
                  onClick={() => {
                    setCurrentCar(null);
                    setModal(true);
                  }}
                  variant="contained"
                >
                  Open Modal
                </Button>
              </div>
              <div className="col-6">
                <TextField
                  fullWidth
                  label="Search"
                  id="search"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              <div className="col-4">
                <Button variant="contained" onClick={() => navigate(-1)}>
                  Go home
                </Button>
              </div>
            </div>
            <div className="row mt-4">
              <table className="table bg-[rgb(35, 34, 34)] table-bordered table-hover table-striped">
                <thead>
                  <tr>
                    <td>T/R</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Year</td>
                    <td>Color</td>
                    <td>Brand</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {filteredCars.map((item, index) => (
                    <tr key={item.id} className="body__table">
                      <td>
                        {" "}
                        <span>ID</span> {index + 1}
                      </td>
                      <td>
                        {" "}
                        <span>Name</span> {item.name}
                      </td>
                      <td>
                        {" "}
                        <span>Price</span> {item.price}
                      </td>
                      <td>
                        {" "}
                        <span>Year</span> {item.year}
                      </td>
                      <td>
                        {" "}
                        <span>Color</span> {item.color}
                      </td>
                      <td>
                        {" "}
                        <span>Brand</span> {item.brand}
                      </td>
                      <td>
                        {" "}
                        <span>Action</span> {item.action}
                      </td>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <button
                            className="btn btn-info"
                            onClick={() => handleEdit(item)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i> Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i> Delete
                          </button>
                          <NavLink
                            to={`/main/single-car/${item.id}`}
                            className="btn btn-primary"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
