import React, { useState } from "react";
import "./SideNav.css";

const SideNav = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  
  return (
    <div className="sidenav">
      {expandMenu === false ? (
        <>
          <div className="blackDiv"></div>
          <div className="menuNav">
            <div className="openDiv" onClick={()=>{setExpandMenu(true)}}>
              1
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="largeblackDiv">
            <p>Journey Board </p>
            <i className="fa-solid fa-arrow-left  collapseIcon" onClick={()=>{setExpandMenu(false)}}></i>
            
          </div>
          <div className="largemenuNav">
            <ul>
                <li className="mainLi">Explore the world of management</li>
                <li>Technical Project Management</li>
                <li>Threadbuild</li>
                <li>Structure your pointers</li>
                <li>4SA Method</li>
            </ul>
            
          </div>
        </>
      )}
    </div>
  );
};

export default SideNav;
