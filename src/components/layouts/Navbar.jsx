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
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/article",
      name: "Articles",
    },
    {
      path: "/posts",
      name: "Posts",
    },
  ];

  return (
    <>
      <nav className="navbar container">
        <div className="navbar-brand">
          <img src={Images.HotCoffeeLogo} className="" alt="" />
        </div>
        <div className="nav-lists">
          <div className="search-box">
            <Icons.SearchIcon />
            <input type="text" className="" placeholder="Search..." />
          </div>
          {routes.map((route) => (
            <Link key={route.name} to={route.path}>
              {route.name}
            </Link>
          ))}
          <Icons.InstagramIcon />
          <Icons.TwitterIcon />
          <Icons.LinkedinIcon />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
