import "./Home.css";
import { Link } from "react-router-dom";
import { Filters } from "components";

const Home = () => {
  return (
    <section className="main-section home-container">
      <div className="home-background">
        <img src="/assets/home-banner.jpg" alt="Coding" />
      </div>

      <div className="home-content">
        <p className="home-header">
          Tutorials curated to leverage your Coding skills
        </p>

        <div className="home-action">
          <Link to="/explore">
            <button className="btn btn-primary">Watch Now</button>
          </Link>
        </div>

        <div className="home-filters explore-filters">
          <Filters />
        </div>
      </div>
    </section>
  );
};

export { Home };
