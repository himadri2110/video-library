import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="main-section page-not-found">
      <img
        src="/assets/404.svg"
        className="not-found-image"
        alt="Page Not Found"
      />

      <div className="page-action">
        <Link to="/" className="btn-link">
          <i className="fa-solid fa-angle-double-left" aria-hidden="true"></i>
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export { PageNotFound };
