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
        <h1 className="home-header">Leverage your Coding skills</h1>

        <div className="home-action">
          <Link to="/explore">
            <button className="btn btn-primary">Explore</button>
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
