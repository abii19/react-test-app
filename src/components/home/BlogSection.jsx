import { Link } from "react-router-dom";
import * as Images from "../../assets/images";
import * as Icons from "../../assets/icons";
import { Button } from "../shared/Button";
import { Card } from "../shared/Card";
import styles from "./blog.module.css";
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "long first",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      created_at: "May 20th 2020",
      img: Images.Blog_1_Img,
      written_by: "John Doe",
    },
    {
      id: 2,
      title: "long established 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      created_at: "May 20th 2021",
      img: Images.Blog_2_Img,
      written_by: "John Doe",
    },
    {
      id: 3,
      title: "long established 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      created_at: "May 20th 2022",
      img: Images.Blog_3_Img,
      written_by: "John Doe",
    },
    {
      id: 4,
      title: "long established 4",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      created_at: "May 20th 2023",
      img: Images.Blog_4_Img,
      written_by: "John Doe",
    },
    {
      id: 5,
      title: "long established 4",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      created_at: "May 20th 2023",
      img: Images.Blog_4_Img,
      written_by: "John Doe",
    },
  ];

  const firstBlog = blogs[0];

  const filteredBlogs = blogs.slice(1, 4);

  //   Styling Method
  /* const h3Styles = {
    color: "green",
    fontWeight: "600",
    fontSize: "50px",
  }; */

  const handleSeeMoreClick = () => {
    alert("See More Button Clicked!");
  };

  return (
    <>
      <div className="blog-section">
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
            <img src={firstBlog.img} className={styles.main_blog_img} alt="" />
          </div>
        </div>
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
        <div className={styles.btn_right}>
          <Button
            title="See More"
            handleClick={handleSeeMoreClick}
            Icon={Icons.ArrowDownIcon}
          />
        </div>
      </div>
    </>
  );
};

export default BlogSection;
