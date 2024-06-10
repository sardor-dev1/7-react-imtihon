import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SnackbarWithDecorators from "../../components/ui/notification";

const Login = () => {
  
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);

    const { username, password } = form;

    if (username === "admin" && password === "123") {
      navigate("/main");
    } else {
      alert("an ");
    }
  };

  return (
    <section className="login__wrap">
      <SnackbarWithDecorators open={open} setOpen={setOpen} />
      <div className="container">
        <div className="login">
          <div className="login__modal">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">login</h1>
              </div>
              <div className="card-body">
                <form className="form " id="submit" onSubmit={handleSubmit}>
                  <TextField
                    className="my-3"
                    onChange={handleChange}
                    type="username"
                    name="username"
                    fullWidth
                    label="Username"
                    id="username"
                  />
                  <TextField
                    onChange={handleChange}
                    type="password"
                    name="password"
                    fullWidth
                    label="Password"
                    id="password"
                  />
                </form>
              </div>
              <div className="card-footer">
                <Button variant="contained" type="submit" form="submit">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
