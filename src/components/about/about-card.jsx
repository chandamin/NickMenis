import React from "react";

const AboutCard = () => {
  const cards = [
    { title: "Our Vision", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { title: "Our Mission", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { title: "Our Values", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { title: "Our Resources", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." }
  ];

  return (
    <section className="about-section">
        <div className="about-card-inner-main">
      <h2 className="about-heading">About 3PercentAgents</h2>
      <p className="about-description">
        It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.
      </p>

      <div className="about-grid">
        {cards.map((item, i) => (
          <div className="about-card" key={i}>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default AboutCard;
