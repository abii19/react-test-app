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
      img: Images.Blog_2_Img,
    },
    {
      id: 2,
      title: "long established 2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      created_at: "May 20th 2021",
      img: Images.Blog_3_Img,
    },
    {
      id: 3,
      title: "long established 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
      created_at: "May 20th 2022",
      img: Images.Blog_4_Img,
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
        <div className={styles.blog_lists}>
          {blogs.map((blog, index) => {
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
      </div>
    </>
  );
};

export default BlogSection;
