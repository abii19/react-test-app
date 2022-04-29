import BannerSection from "./BannerSection";
import BlogSection from "./BlogSection";

const HomePage = ({ blogs }) => {
  return (
    <>
      <div className="container">
        <BannerSection />
        <BlogSection blogs={blogs} />
      </div>
    </>
  );
};

export default HomePage;
