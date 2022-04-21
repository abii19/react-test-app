import { useParams } from "react-router-dom";
import * as Images from "../../assets/images";
import { blogs } from "../models/blogs";

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
