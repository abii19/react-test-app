import * as Icons from "../../assets/icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container footer-content">
          <p>
            <b>hotcoffee</b> 2020 copyright all rights reserved
          </p>
          <div className="footer-icons">
            <Icons.InstagramIcon />
            <Icons.TwitterIcon />
            <Icons.LinkedinIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
