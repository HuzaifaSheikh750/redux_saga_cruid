import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest, createUserStart, deleteUserStart, searchUserStart } from "../redux/blogs/actions";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import { useNavigate  } from 'react-router-dom';

const Blog = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [title, setTitle] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setProducts(users);
    }
  }, [users]);

  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      cell: (row) => (
        <div>
          {/* edit button and go to form page along with id */}
          <button onClick={() => handleEdit(row)}>Edit</button>
          <button onClick={() => handleDelete(row)}>Delete</button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserStart({
      title: title,
    }));

    // console.log(inputValue);
    toast.success("Add successfully!" );
  };

  const handleEdit = (row) => {
    const id = row.id; 
    navigate(`/form/${id}`);
  };

  const handleDelete = (row) => {
    console.log(`Delete: ${row.id}`);
    dispatch(deleteUserStart(row.id));
    toast.success("Delete successfully!" );
  };

  const handleSarch = (e) => {
    e.preventDefault();
    dispatch(searchUserStart(search));
    setSearch("");
  };

  return (
    <>
      <div className="App">
        <h1>React DataTable Example</h1>
        {/* add data input field */}
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={handleInputChange} />
          <button type="submit">Add data</button>
        </form>

        <form onSubmit={handleSarch}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">Search</button>
        </form>

        <DataTable
          title="User Data"
          columns={columns}
          data={users}
          pagination
        />
      </div>
    </>
  );
};

export default Blog;
