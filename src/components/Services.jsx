import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Services = () => {
  return (
    <div className="services-container container services">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        At Pixel Prodigy, we offer a range of educational services designed to
        help you achieve your learning goals. Whether you're a student looking
        to enhance your skills or a professional seeking to advance your career,
        our tailored solutions are here to support you every step of the way.
      </p>

      <div className="services-list">
        <div className="service-item">
          <h2>Online Courses</h2>
          <p>
            Explore a wide variety of online courses covering topics from
            programming to art. Our courses are designed by industry experts and
            provide interactive learning experiences, including quizzes,
            assignments, and multimedia content.
          </p>
          <Link to="/online-courses">
            <button className="btn">Explore Courses</button>
          </Link>
        </div>

        <div className="service-item">
          <h2>One-on-One Tutoring</h2>
          <p>
            Get personalized attention with our one-on-one tutoring sessions.
            Our experienced tutors work with you to identify your strengths and
            weaknesses, helping you to improve in specific areas and gain
            confidence in your studies.
          </p>
          {/* <Link to="/tutoring"> */}
            <button className="btn">Get Tutored</button>
          {/* </Link> */}
        </div>

        <div className="service-item">
          <h2>Workshops and Webinars</h2>
          <p>
            Join our engaging workshops and webinars to learn from industry
            leaders and experts. These sessions cover various topics and provide
            opportunities for networking and interactive discussions.
          </p>
          {/* <Link to="/workshops"> */}
            <button className="btn">Join a Workshop</button>
          {/* </Link> */}
        </div>

        <div className="service-item">
          <h2>Career Counseling</h2>
          <p>
            Our career counseling services help you navigate your career path.
            We offer guidance on job searching, resume writing, interview
            preparation, and professional development to ensure you succeed in
            your chosen field.
          </p>
          {/* <Link to="/career-counseling"> */}
            <button className="btn">Get Career Advice</button>
          {/* </Link> */}
        </div>

        <div className="service-item">
          <h2>Community Support</h2>
          <p>
            Join our vibrant community of learners! Participate in forums,
            discussion groups, and peer mentoring. Our community support ensures
            you’re never alone on your educational journey.
          </p>
          {/* <Link to="/community"> */}
            <button className="btn">Join the Community</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
