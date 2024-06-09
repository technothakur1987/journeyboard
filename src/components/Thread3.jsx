import React from 'react'
import "./Main.css";

const Thread3 = ({data,contentleftarrow,contentrightarrow,contentallarrow}) => {
  return (
    <div className="thread3">
          <div className="insideThread">
              <div className="blackInsideThread">
                <p>{data.tasks[0].assets[2].asset_title}</p>
              </div>
              <div className="h3wrapper">
                <h3>
                  <span className="h3Span">Description : </span> {data.tasks[0].assets[2].asset_description}
                </h3>
              </div>

              <div className="thread3Info">
                <div className="thread3title">
                  <label htmlFor="title3">Title </label>
                  <input type="text" name="title3" id="title3" />
                </div>
                <div className="thread3content">
                <p >Content </p>
                <div className="thread3ContentBox">
                  <div className="contentmenu">
                    <ul className="ul1">
                      <li>File</li>
                      <li>Edit</li>
                      <li>View</li>
                      <li>Insert</li>
                      <li>Format</li>
                      <li>Tools</li>
                      <li>Table</li>
                      <li>Help</li>
                    </ul>
                    <ul className="ul2">
                      <li><img src={contentleftarrow} alt="contentleftarrow" /></li>
                      <li><img src={contentrightarrow} alt="contentrightarrow" /></li>
                      <li><img src={contentallarrow} alt="contentallarrow" /></li>
                      <li className="parali">Paragraph</li>
                      <li><i className="fa-solid fa-ellipsis-vertical contentthreedots"></i> </li>
                      <li className="invisible">Tools</li>
                      <li className="invisible">Table</li>
                      
                      
                    </ul>
                  </div>
                  <div className="contentText"></div>
                </div>
                </div>


                
              </div>
            </div>
          </div>
  )
}

export default Thread3