import "./Portfolio.css";

import crmsystem from "../../assets/crmsystem.png";
import realtyproject from "../../assets/realtyproject.jpg";
import budgetproject from "../../assets/budget-project.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={crmsystem} alt="img" />
          </div>
          <h3>CRM System</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kuanysh-1998/crmsystem"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://kuanysh-1998.github.io/crmsystem/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={realtyproject} alt="img" />
          </div>
          <h3>Real estate catalog project</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kuanysh-1998/Catalog-of-realty"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://kuanysh-1998.github.io/Catalog-of-realty/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={budgetproject} alt="img" />
          </div>
          <h3>Budget Calculator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kuanysh-1998/Budget-Calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://kuanysh-1998.github.io/Budget-Calculator/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
