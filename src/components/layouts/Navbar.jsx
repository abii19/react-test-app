import { Link } from "react-router-dom";
// import Logo from "../../assets/images/HotCoffee.png";
// import InstagramLogo from "../../assets/icons/InstagramIcon.svg";
// import { ReactComponent as InstagramIcon } from "../../assets/icons/InstagramIcon.svg";
// import { ReactComponent as TwitterIcon } from "../../assets/icons/TwitterIcon.svg";
// import { InstagramIcon } from "../../assets/icons/index.js";
import * as Images from "../../assets/images";
import * as Icons from "../../assets/icons";
// import InstagramIcon from "../../assets/icons/InstagramIcon.svg";

const Navbar = () => {
  // console.log(InstagramIcon);
  return (
    <>
      <nav>
        <div>
          <div>
            <img src={Images.HotCoffeeLogo} className="" alt="" />
          </div>
          <div>
            <input type="text" className="" placeholder="Search..." />
            <Link to="/">Home</Link>
            <Link to="/article">Article</Link>
            {/* <InstagramIcon /> */}
            {/* <img src={Icons.InstagramIcon} alt="" className="" /> */}
            <Icons.TwitterIcon />
            <Icons.LinkedinIcon />
            {/* <InstagramIcon className="instagram-icon" />
            <TwitterIcon className="twitter-icon" /> */}
            {/* <img src={InstagramLogo} className="" alt="" /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
