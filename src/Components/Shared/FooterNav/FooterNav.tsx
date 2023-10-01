import { Link } from "react-router-dom";
import "./FooterNav.css";

export default function FooterNav() {
  return (
    <div className="navbar-foot">
      <Link to="/">
        {" "}
        <b>Home </b>
      </Link>
      {"  "}
      <Link to="/blogs">
        {" "}
        <b>Blogs</b>
      </Link>
      {"  "}
      <Link to="/services">
        <b>Services</b>
      </Link>
      {"  "}
      <Link to="/contact">
        {" "}
        <b>Contact</b>
      </Link>
    </div>
  );
}
