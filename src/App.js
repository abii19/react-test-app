import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetails from "./components/article/ArticleDetails";
import ArticlePage from "./components/article/ArticlePage";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layouts/Layout";
import PageNotFound from "./components/pages/PageNotFound";
import Posts from "./components/posts/Posts";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage blogs={blogs} />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/article/:articleId" element={<ArticleDetails />} />
            <Route
              path="/posts"
              element={<Posts blogs={blogs} setBlogs={setBlogs} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
