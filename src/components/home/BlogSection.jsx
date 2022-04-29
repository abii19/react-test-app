import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "../../assets/icons";
import { Button } from "../shared/Button";
import { Card } from "../shared/Card";
import styles from "./blog.module.css";
// import { blogs } from "../models/blogs";

const BlogSection = ({ blogs }) => {
  console.log(blogs);

  const firstBlog = blogs.length > 0 && blogs[0];

  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [lastIndex, setLastIndex] = useState(4);

  useEffect(() => {
    setFilteredBlogs(blogs.slice(1, lastIndex)); //4 //7
    // eslint-disable-next-line
  }, [lastIndex]);

  // const filteredBlogs = blogs.slice(1, 4);

  const handleSeeMoreClick = () => {
    // const newLastIndex = lastIndex + 3; //7
    // setLastIndex(newLastIndex); //7
    // setFilteredBlogs(blogs.slice(1, newLastIndex)); //7

    // if (blogs.length < lastIndex) {
    //   alert("No more blogs!");
    // } else {
    setLastIndex(lastIndex + 3); //7
    // }
  };

  return (
    <>
      <div className="blog-section">
        {Object.keys(firstBlog).length > 0 && (
          <div className={styles.main_blog}>
            <div className={styles.content}>
              <h3>{firstBlog.title}</h3>
              <p>{firstBlog.description}</p>
              <div className={styles.details}>
                <p>{firstBlog.created_at}</p>
                <Link to={`/article/${firstBlog.id}`}>Read More</Link>
              </div>
            </div>
            <div className={styles.img}>
              <img
                src={firstBlog.img}
                className={styles.main_blog_img}
                alt=""
              />
            </div>
          </div>
        )}

        {/* Other Blogs */}
        <div className={styles.blog_lists}>
          {filteredBlogs.map((blog, index) => {
            return (
              <Card
                key={index}
                blog={blog}
                // title={blog.title}
                // description={blog.description}
                // uploadedDate={blog.created_at}
              />
            );
          })}
          {/* <Card
            title="long established"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quod totam eum commodi reprehenderit vero? Blanditiis ducimus omnis,
            doloremque natus illum"
            uploadedDate="May 20th 2020"
          />
          <Card
            title="long established 2"
            description="dolor sit amet consectetur adipisicing elit. Facilis
            quod totam eum commodi reprehenderit vero? Blanditiis ducimus omnis,
            doloremque natus illum "
            uploadedDate="May 20th 2021"
          />
          <Card
            title="long established 3"
            description="amet consectetur adipisicing elit. Facilis
            quod totam eum commodi reprehenderit vero? Blanditiis ducimus omnis,
            doloremque natus illum "
            uploadedDate="May 20th 2022"
          /> */}
        </div>

        {/* Button */}
        {blogs.length > lastIndex && (
          <div className={styles.btn_right}>
            <Button
              title="See More"
              handleClick={handleSeeMoreClick}
              Icon={Icons.ArrowDownIcon}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogSection;
