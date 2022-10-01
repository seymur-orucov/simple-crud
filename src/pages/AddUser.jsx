import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "../components/TextField";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { createUser } from "../store/userSlice";

const AddUser = () => {
  const [values, setValues] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(
      createUser({
        id: Date.now(),
        name: values.name,
        email: values.email,
      })
    );
    setValues({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label={"Name"}
        inputProps={{ type: "text", placeholder: "Seymur Orucov" }}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <TextField
        label={"Email"}
        inputProps={{ type: "text", placeholder: "example@gmail.com" }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
