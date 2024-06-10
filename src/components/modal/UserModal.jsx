import { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const UserModal = (props) => {
  const { cars, setCars, toggle, currentCar } = props;

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    color: "",
    year: "",
    brand: "",
  });

  useEffect(() => {
    if (currentCar) {
      setForm(currentCar);
    } else {
      setForm({
        id: "",
        name: "",
        price: "",
        color: "",
        year: "",
        brand: "",
      });
    }
  }, [currentCar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      const updatedCars = cars.map((car) => (car.id === form.id ? form : car));
      setCars(updatedCars);
    } else {
      setCars([...cars, { ...form, id: new Date().getTime().toString() }]);
    }
    toggle();
  };

  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader>
        <h1 className="text-center">{form.id ? "Edit Car" : "Add Car"}</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            onChange={handleChange}
            value={form.name}
            type="text"
            placeholder="Name"
            name="name"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            value={form.price}
            type="number"
            placeholder="Price"
            name="price"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            value={form.year}
            type="date"
            placeholder="Year"
            name="year"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            value={form.color}
            type="text"
            placeholder="Color"
            name="color"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            value={form.brand}
            type="text"
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
          />
          <input
            onChange={handleChange}
            value={form.action}
            type="number"
            placeholder="Action"
            name="action"
            className="form-control my-2"
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.toggle}>
          Cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
