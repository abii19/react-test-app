import { useParams } from "react-router-dom";
import * as Images from "../../assets/images";

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

const ArticleDetails = () => {
  const { articleId } = useParams();

  const currentBlog = blogs.find((blog) => blog.id === +articleId);

  return (
    <>
      <div className="container">
        <img src={Images.Blog_1_Img} alt="" className="article-main-img" />
        <div className="article-title">
          <h1>{currentBlog.title}</h1>
          <div className="">
            <b className="">{currentBlog.written_by}</b>
            <div className="">{currentBlog.created_at}</div>
          </div>
        </div>
        <div className="article-description">{currentBlog.description}</div>
      </div>
    </>
  );
};

export default ArticleDetails;
