import React from "react";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <div className="container">
          <div className="row">
            {/* Left - Image */}
            <div className="col-12 col-md-6">
              <div className="home-image-container">
                <img
                  src="https://res.cloudinary.com/ddaults7y/image/upload/v1734879796/5b0bfe66-2f39-456e-9bac-01da0c70dfce_uuxais.jpg"
                  className="home-image"
                  alt="Chandu profile"
                />
              </div>
            </div>

            {/* Right - Details */}
            <div className="col-12 col-md-6 home-details">
              <h3 className="home-heading"> HELLO I'M </h3>
              <h1 className="home-heading2">CHANDU JANIPIREDDY</h1>

              {/* Animated Roles */}
              <p className="home-paragraph1">
                <ReactTyped
                  strings={[
                    "FRONTEND DEVELOPER",
                    "BACKEND DEVELOPER",
                    "UI/UX DESIGNER",
                    "FULL STACK DEVELOPER",
                  ]}
                  typeSpeed={60}
                  backSpeed={35}
                  loop
                />
              </p>

              <div className="text-left">
                <div className="home-paragraph2 text-center">
                  <p className="home-paragraph2">
                    I am a passionate software development student, eager to apply my
                    skills and knowledge to contribute to impactful projects in a
                    professional environment.
                  </p>
                </div>

                {/* Buttons */}
                <div className="home-button-container">
                  <a href="#about">
                    <button className="home-button"> About Me </button>
                  </a>
                  <a
                    href="/CHANDU_RESUME.pdf"
                    download="CHANDU_RESUME.pdf"
                  >
                    <button className="home-button"> Download CV </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
