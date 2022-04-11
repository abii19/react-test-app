import * as Images from "../../assets/images";

const BannerSection = () => {
  return (
    <>
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
    </>
  );
};

export default BannerSection;
