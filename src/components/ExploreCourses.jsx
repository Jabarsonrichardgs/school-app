
import React from "react";
import CourseCard from './CourseCard';
import Footer from "./Footer";
const ExploreCourses = () => {
  const courses = [
    {
      image: "https://via.placeholder.com/150",
      title: "Web Development Bootcamp",
      duration: "6 Weeks",
      amount: 299,
      description:
        "Learn the fundamentals of web development with this comprehensive course.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Data Science Essentials",
      duration: "8 Weeks",
      amount: 399,
      description:
        "Dive into data science and learn how to analyze data effectively.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Digital Marketing Masterclass",
      duration: "4 Weeks",
      amount: 199,
      description:
        "Master digital marketing strategies and grow your business online.",
    },
  ];

  return (
    <>
    <div className="explore-courses container">
      <h1 style={{textAlign:"center" ,color:"crimson"}}>Explore Our Courses</h1>
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            duration={course.duration}
            amount={course.amount}
            description={course.description}
          />
        ))}
      </div>
    </div>
<Footer/>
    </>
  );
};

export default ExploreCourses;
