import React, { useState } from "react";


const Sidebar = () => {
  const [closer, setCloser] = useState(false);
  const Closer = () => {
    setCloser(!closer);
  };

  const show=()=>{
    setCloser(false)
  }
  return (
    <>
   <div className="nav-content">
   
      <div className={`sidebar ${closer ? "closer" : ""}`}>
        <div className="close-btn">
          <button className="btn btn-dark " onClick={Closer}>
            Close
          </button>
        </div>
        <div className="nav-contents">
          <nav>
            <ul>
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Education</li>
              <li>Contact Me</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="show">
        <button className="btn btn-success" onClick={show}>Show</button>
    </div>
   </div>
    </>
  );
};

export default Sidebar;
