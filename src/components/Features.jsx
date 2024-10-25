<<<<<<< HEAD
import React from "react";
import support from "../assests/Images/support.jpg";
import flex from "../assests/Images/flexible.jpg";
import expert from "../assests/Images/expetise.jpg";
import shedule from "../assests/Images/shedule.jpg";

const featuresData = [
  {
    img: flex,
    title: "Interactive Learning",
    items: [
      "Quizzes & Assessments",
      "Hands-On Projects",
      "Multimedia Content",
      "Gamification",
    ],
  },
  {
    img: expert,
    title: "Expert Instructors",
    items: [
      "Instructor-Led Webinars",
      "Live Q&A Sessions",
      "Personalized Feedback",
      "Industry Experience",
    ],
  },
  {
    img: shedule,
    title: "Flexible Scheduling",
    items: [
      "Customizable Timelines",
      "Self-Paced Learning",
      "Multiple Time Zones",
      "On-Demand Content",
    ],
  },
  {
    img: support,
    title: "24/7 Support",
    items: [
      "Dedicated Support Team",
      "Community Forums",
      "Resource Library",
      "Technical Assistance",
    ],
  },
  
];

const Features = () => {
  return (
    <div className="title container mainfeatures">
      <div className="title-1">
        <h1 style={{ fontWeight: "bolder", fontSize: "3.5em", textAlign: "center" }}>
          Features
        </h1>
      </div>
      <div className="feature-content">
        {featuresData.map((feature, index) => (
          <div className="features" key={index}>
            <div className="f-img">
              <img src={feature.img} alt={feature.title} />
            </div>
            <div className="f-content">
              <p>{feature.title}</p>
              <ul className="text-muted">
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="overlay">
              <div className="overlay-text">{feature.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
=======
import React from "react";
import support from "../assests/Images/support.jpg";
import flex from "../assests/Images/flexible.jpg";
import expert from "../assests/Images/expetise.jpg";
import shedule from "../assests/Images/shedule.jpg";

const featuresData = [
  {
    img: flex,
    title: "Interactive Learning",
    items: [
      "Quizzes & Assessments",
      "Hands-On Projects",
      "Multimedia Content",
      "Gamification",
    ],
  },
  {
    img: expert,
    title: "Expert Instructors",
    items: [
      "Instructor-Led Webinars",
      "Live Q&A Sessions",
      "Personalized Feedback",
      "Industry Experience",
    ],
  },
  {
    img: shedule,
    title: "Flexible Scheduling",
    items: [
      "Customizable Timelines",
      "Self-Paced Learning",
      "Multiple Time Zones",
      "On-Demand Content",
    ],
  },
  {
    img: support,
    title: "24/7 Support",
    items: [
      "Dedicated Support Team",
      "Community Forums",
      "Resource Library",
      "Technical Assistance",
    ],
  },
  
];

const Features = () => {
  return (
    <div className="title container mainfeatures">
      <div className="title-1">
        <h1 style={{ fontWeight: "bolder", fontSize: "3.5em", textAlign: "center" }}>
          Features
        </h1>
      </div>
      <div className="feature-content">
        {featuresData.map((feature, index) => (
          <div className="features" key={index}>
            <div className="f-img">
              <img src={feature.img} alt={feature.title} />
            </div>
            <div className="f-content">
              <p>{feature.title}</p>
              <ul className="text-muted">
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="overlay">
              <div className="overlay-text">{feature.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
>>>>>>> 5a84f5fdfd4b446c55c304790ce134a4a1595fe8
