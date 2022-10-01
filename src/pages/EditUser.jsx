import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TextField from "../components/TextField";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../store/userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((user) => user.id === +params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({ name, email });

  const handleEditUser = () => {
    dispatch(
      editUser({ id: params.id, name: values.name, email: values.email })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label={"Name"}
        inputProps={{ type: "text", placeholder: "Seymur Orucov" }}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values.name}
      />
      <br />
      <TextField
        label={"Email"}
        inputProps={{ type: "text", placeholder: "example@gmail.com" }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />
      <Button onClick={handleEditUser}>Submit</Button>
    </div>
  );
};

export default EditUser;
