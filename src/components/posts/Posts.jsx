import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../shared";

const Posts = ({ blogs, setBlogs }) => {
  // const [blogs, setBlogs] = useState([]);
  // console.log(blogs);

  const initialState = {
    title: "",
    author: "",
    description: "",
    img: "https://images.unsplash.com/photo-1651153491779-7b9b28020615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };

  const [values, setValues] = useState(initialState);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([...blogs, { id: uuidv4(), ...values }]);
    setValues(initialState);
  };

  const deletePost = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const editPost = (id) => {
    const toEditBlog = blogs.find((blog) => blog.id === id);
    setValues({
      id: toEditBlog.id,
      title: toEditBlog.title,
      author: toEditBlog.author,
      description: toEditBlog.description,
    });
    setIsEdit(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const filteredBlogs = blogs.filter((blog) => blog.id !== values.id);

    setBlogs([values, ...filteredBlogs]);

    setValues(initialState);
    setIsEdit(false);
  };

  return (
    <>
      <div className="container">
        <h2>Add Posts</h2>
        <br />
        <br />
        <form onSubmit={isEdit ? handleUpdate : handleSubmit}>
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
          <Button title={isEdit ? "Update" : "Submit"} type="submit" />
        </form>

        <br />
        <br />

        <h2>Blogs</h2>
        <div>
          {blogs.map((blog) => {
            return (
              <div key={blog.id}>
                <img src={blog.img} alt="" width="200" height="200" />
                <h3>{blog.title}</h3>
                <p>{blog.author}</p>
                <p>{blog.description}</p>
                <Button handleClick={() => deletePost(blog.id)}>Delete</Button>
                <Button handleClick={() => editPost(blog.id)}>Edit</Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Posts;
