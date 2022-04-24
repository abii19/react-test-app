import React, { useState } from "react";
import { Button } from "../shared";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

  const [values, setValues] = useState({
    title: "",
    author: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit!");
    setBlogs([...blogs, values]);
  };

  return (
    <>
      <div className="container">
        <h2>Add Posts</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              name="title"
              className=""
              value={values.title}
              onChange={(e) => handleChange(e)}
              placeholder="Test Posts"
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              name="author"
              className=""
              value={values.author}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows={5}
              name="description"
              className=""
              value={values.description}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <Button title="Submit" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Posts;
