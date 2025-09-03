import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Md Aftab Alam </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I am an entry-level Java Full Stack Developer with a strong
            foundation in Java, Spring Boot, React, REST APIs, and databases.
            <br />
            🎓 I completed my B.Tech in Computer Science and Engineering from
            Cambridge Institute of Technology, Ranchi, under{" "}
            <span className="purple"> Jharkhand Technological University</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by Code, Powered by Passion!"{" "}
          </p>
          <footer className="blockquote-footer">Aftab Alam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
