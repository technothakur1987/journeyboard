import React from "react";
import "./Main.css";

const Thread2 = ({
  data,
  up,
  setUp,
  arrowUp,
  threadicon4,
  threadicon3,
  threadicon2,
  threadicon1,
}) => {
  return (
    <div className="thread2 mdpad0">
     <div className="insideThread">
         <div className="blackInsideThread">
          <p>{data.tasks[0].assets[1].asset_title}</p>
        </div> 

        <div className="h3wrapper">
          <h3>
            <span className="h3Span">Description : </span>
            {data.tasks[0].assets[1].asset_description}{" "}
          </h3>
        </div>
        <div className="threadInfo">
        <div className="arrowupdiv" onClick={()=>{setUp(!up)}}>
          {
            up?(<img src={arrowUp} alt='arrowUp' className="arrowUp" />):(<img src={arrowUp} alt='arrowUp' className="arrowDown" /> )
         }
         
        
        <span style={{marginLeft:'1.5rem'}}>Thread A</span>  
           
            
        </div>
       <div className="subthreadrow">
            <div className="subthread">
                <label htmlFor="subthrea1" >Sub thread 1</label>
                <textarea name="subthread1" id="subthread1" placeholder="Enter Text here"></textarea>


            </div>
            <div className="subthread">
                <label htmlFor="subthrea1" >Sub Interpretation 1</label>
                <textarea name="subthread1" id="subthread1" placeholder="Enter Text here"></textarea>


            </div>
        </div>
        <div className="subthreadrow custompadding">
            <div className="iconbelowsubthread">
                <div className="threadiconWrapper">

                            <img src={threadicon4} alt="threadicon4" className="threadicon" />
                            <img src={threadicon3} alt="threadicon3" className="threadicon" />
                            <img src={threadicon2} alt="threadicon2" className="threadicon" />
                            <img src={threadicon1} alt="threadicon1" className="threadicon" />
                </div>
               

            </div>
             <div className="belowsubthread">
                
                 <select name="cat" id="cat">
                    <option value="select cat">Select cat</option>
                </select>

                <select name="process" id="process">
                    <option value="select process">Select Process</option>
                </select> 
                

            </div>

        </div>
          <div className="subthreadbtnWrapper">
            <button>+ {" "}{" "}Sub-thread</button>

        </div>
       
       <div className="endsubthreadWrapper">
        <div className="endsubthread">
                <label htmlFor="subthrea1" >Summary for thread A</label>
                <textarea name="subthread1" id="subthread1" placeholder="Enter Text here"></textarea>


            </div>
        </div> 
        
        </div>
      
      </div>
    </div>
  );
};

export default Thread2;
