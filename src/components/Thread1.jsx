import React from 'react'
import "./Main.css";

const Thread1 = ({data}) => {
  return (
    <div className="thread1">
            <div className="insideThread">
            
                <div className="blackInsideThread">
              <p>{data.tasks[0].assets[0].asset_title}</p>
            </div>
              
              <div className="h3wrapper">
                <h3>
                  <span className="h3Span">Description : </span>{
                    data.tasks[0].assets[0].asset_description
                  }
                </h3>
              </div>

              <div className="threadInfo">
               
                <iframe src={data.tasks[0].assets[0].asset_content  } className="youtubeimage"></iframe>

              </div>
            </div>
          </div>
  )
}

export default Thread1