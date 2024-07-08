import React from 'react';


export default function HeroSection() {
  const handleContactClick = () => {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Khanya</p>
         <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <span className="smaller-text">Developer</span>
          </h1>
          <p className="hero--section-description">
            Welcome to my personal portfolio, where I showcase my passion for innovation and creativity through projects that push boundaries and inspire collaboration.
          </p><br></br>
        </div>
        {/* Use flexbox to place buttons next to each other */}
        <div className="hero--section--buttons flex-container">
      
          <a href="./CV/Khanya Somagaca Resume.pdf" download className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/MK.png" alt="Hero Section" />
      </div>
    </section>
  );
}
