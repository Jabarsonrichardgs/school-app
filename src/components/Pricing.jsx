

import React from "react";

const Pricing = () => {
  return (
    <div className="pricing-container pricing container">
      <h1>Choose Your Plan</h1>
      <p>Flexible pricing for every learner.</p>

      <div className="pricing-plans">
        <div className="plan">
          <h2>Basic</h2>
          <p>$19/month</p>
          <ul>
            <li>Access to all courses</li>
            <li>Community support</li>
            <li>Progress tracking</li>
          </ul>
          <p>Best For: Beginners and casual learners</p>
          <button className="btn">Join Now</button>
        </div>

        <div className="plan">
          <h2>Standard</h2>
          <p>$39/month</p>
          <ul>
            <li>Everything in Basic</li>
            <li>Certificate of completion</li>
            <li>Access to quizzes and assignments</li>
            <li>Monthly live Q&A sessions</li>
          </ul>
          <p>Best For: Students aiming for certification</p>
          <button className="btn">Join Now</button>
        </div>

        <div className="plan">
          <h2>Premium</h2>
          <p>$79/month</p>
          <ul>
            <li>Everything in Standard</li>
            <li>Personalized mentorship</li>
            <li>One-on-one tutoring sessions</li>
            <li>Access to exclusive content and workshops</li>
          </ul>
          <p>Best For: Serious learners and professionals</p>
          <button className="btn">Join Now</button>
        </div>

        <div className="plan">
          <h2>Institution</h2>
          <p>$199/month</p>
          <ul>
            <li>Everything in Premium</li>
            <li>Bulk course access for 10+ students</li>
            <li>Customized course creation</li>
            <li>Dedicated account manager</li>
          </ul>
          <p>Best For: Schools and educational institutions</p>
          <button className="btn">Join Now</button>
        </div>
      </div>

     


     

    </div>
  );
};

export default Pricing;
