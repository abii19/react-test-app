import * as Images from "../../assets/images";
import { Card } from "../shared/Card";
import styles from "./blog.module.css";
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      created_at: "May 20th 2020",
      img: Images.Blog_1_Img,
    },
  ];

  //   Styling Method
  /* const h3Styles = {
    color: "green",
    fontWeight: "600",
    fontSize: "50px",
  }; */

  return (
    <>
      <div className="blog-section">
        <div className={styles.main_blog}>
          <div className={styles.content}>
            <h3>long established</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className={styles.details}>
              <p>May 20th 2020</p>
              <p>Read More</p>
            </div>
          </div>
          <div className={styles.img}>
            <img
              src={Images.Blog_1_Img}
              className={styles.main_blog_img}
              alt=""
            />
          </div>
        </div>
        {/* Other Blogs */}
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default BlogSection;
