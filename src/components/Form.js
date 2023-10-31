import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserRequest } from "../redux/blogs/actions";

const Form = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [formValue, setFormValue] = useState("");

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const singleUser = users.find((user) => user.id === Number(id));
        setFormValue({...singleUser});
    }
  }, [id]);

  const handleInputChange = (e) => {
    setFormValue(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    // fORM AND ONE INOT FIELD
    <div>
      <h1>Edit Form</h1>
      <form onSubmit={handleEdit}>
        <input type="text" placeholder="Title" value={formValue || "" } onChange={handleInputChange} />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Form;
