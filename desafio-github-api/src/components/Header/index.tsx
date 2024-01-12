import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/" className="custom-brand">
          Github API
        </Link>
      </div>
    </header>
  );
};
