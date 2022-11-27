import "./Portfolio.css";

import crmsystem from "../../assets/crmsystem.png";
import realtyproject from "../../assets/realtyproject.jpg";
import budgetproject from "../../assets/budget-project.jpg";

const data = [
  {
    id: 1,
    image: crmsystem,
    title: "CRM System",
    github: "https://github.com/kuanysh-1998/crmsystem",
    demo: "https://kuanysh-1998.github.io/crmsystem/",
  },
  {
    id: 2,
    image: realtyproject,
    title: "Real estate catalog project",
    github: "https://github.com/kuanysh-1998/Catalog-of-realty",
    demo: "https://kuanysh-1998.github.io/Catalog-of-realty/",
  },
  {
    id: 3,
    image: budgetproject,
    title: "Budget Calculator",
    github: "https://github.com/kuanysh-1998/Budget-Calculator",
    demo: "https://kuanysh-1998.github.io/Budget-Calculator/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <article className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <div key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Portfolio;
