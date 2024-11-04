
import styles from "./page.modules.css";

export default function Projects() {
  const projects = [
    {
      title: "Wanderlust Travel",
      description:
        "A web application built for travel enthusiasts. Wanderlust Travel allows users to explore popular destinations, browse travel services, and find special travel offers. The platform provides an engaging user interface and comprehensive travel resources to inspire adventure.",
    },
    {
      title: "Candle E-commerce Website",
      description:
        "An e-commerce platform dedicated to luxurious and artisanal candles. This site allows users to browse a variety of candle collections, view detailed product descriptions, and make secure purchases. The design focuses on a seamless shopping experience, with a clean and aesthetic layout that highlights each product.",
    },
    {
      title: "TuniFarm (Final Project)",
      description:
        "An innovative web application like a Marketplace designed to Empower Tunisian small farmers by providing a direct link to consumers, promoting sustainable agriculture and supporting local economies..",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
