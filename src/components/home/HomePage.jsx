import * as Images from "../../assets/images";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="banner-section">
          <div className="content">
            <div className="title">
              <h1>
                Make better <br /> coffee
                <img src={Images.CoffeeImg} width="70" height="70" alt="" />
              </h1>{" "}
            </div>
            <p className="base">why learn how to blog?</p>
          </div>
          <div className="">
            <img src={Images.BannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
