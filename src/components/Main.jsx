import React ,{useState}from "react";
import "./Main.css";
import SideNav from "./SideNav";

import arrowUp from '../assets/arrowUp.png'
import threadicon1 from '../assets/threadicon1.png'
import threadicon2 from '../assets/threadicon2.png'
import threadicon3 from '../assets/threadicon3.png'
import threadicon4 from '../assets/threadicon4.png'
import contentleftarrow from '../assets/contentleftarrow.png'
import contentrightarrow from '../assets/contentrightarrow.png'
import contentallarrow from '../assets/contentallarrow.png'

import Blue from "./Blue";
import Thread1 from "./Thread1";
import Thread2 from "./Thread2";
import Thread3 from "./Thread3";
import Thread4 from "./Thread4";
import NoticeBoard from "./NoticeBoard";




const Main = ({data}) => {
  const [up, setUp] = useState(true);
  const [up1, setUp1] = useState(false);
  const [up2, setUp2] = useState(false);
  console.log(data)
  
  data && console.log(data.tasks)
  return (
    <div className="main ">
     <SideNav /> 
           <Blue/> 
       <NoticeBoard/> 

      <div className="mainDiv">
        <div className="HeadingDiv">
          <p className="mainHeading">{data.title}</p>
          <button className="submitBtn">Submit Task</button>
        </div>
        <div className="exploreDiv">
          {
            data && (
              <>
              <p className="heading">{data.tasks[0].task_title}</p>
              <p className="para">{data.tasks[0].task_description}
                
              </p>
              </>
            )
          }
          
        </div>

         <div className="threads ">
         <Thread1 data={data}/>
            <Thread2 data={data} up={up} setUp={setUp} arrowUp = {arrowUp} threadicon4={threadicon4} threadicon3={threadicon3} threadicon2={threadicon2} threadicon1={threadicon1}/>
           <Thread3 data={data} contentleftarrow={contentleftarrow} contentrightarrow={contentrightarrow} contentallarrow={contentallarrow}/>
         <Thread4 data={data} arrowUp ={arrowUp } up1={up1} setUp1={setUp1} up2={up2} setUp2={setUp2}/>
          
           
         
          
        </div> 
      </div>
    </div>
  );
};

export default Main;
