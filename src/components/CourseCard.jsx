import React from "react";

const CourseCard = ({ image, title, duration, amount, description }) => {
  return (
   
      <div className="course-card">
        <img src={image} alt={title} className="course-image" />
        <h3 >{title}</h3>
        <p className="course-duration">Duration: {duration}</p>
        <p className="course-amount">Amount: ${amount}</p>
        <p className="course-description">{description}</p>
      </div>
    
  );
};

export default CourseCard;
