import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetails from "./components/article/ArticleDetails";
import ArticlePage from "./components/article/ArticlePage";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layouts/Layout";
import PageNotFound from "./components/pages/PageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/article/:articleId" element={<ArticleDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
