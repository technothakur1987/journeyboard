import React from 'react'
import "./Main.css";

const Thread4 = ({data, up1, setUp1, arrowUp , up2, setUp2}) => {
  return (
    <div className="thread4 mdpad0">
          <div className="insideThread">
              <div className="blackInsideThread">
                <p>{data.tasks[0].assets[3].asset_title}</p>
              </div>
              <div className="h3wrapper">
                <h3>
                  <span className="h3Span">Description : </span>{data.tasks[0].assets[3].asset_description}
                </h3>
              </div>

              <div className="threadInfo4">
              <div className={`arrowupdiv4 ${up1?'mb':'nomb'}`} onClick={()=>{setUp1(!up1)}}>
                  {
                    !up1?(<img src={arrowUp} alt='arrowUp' className="arrowUp" />):(<img src={arrowUp} alt='arrowUp' className="arrowDown" /> )
                  }
                 
                
                <span style={{marginLeft:'1.5rem'}}>Introduction</span>  
                   
                    
                </div>
                {
                    up1?"":(<><p className="p41">The 4SA Method , How to bring a idea into progress ?</p>
                <p className="p42">See More</p></>)
                  }
                
              </div>
              <div className="threadInfo4">
              <div className={`arrowupdiv4 ${up2?'mb':'nomb'}`} onClick={()=>{setUp2(!up2)}}>
                  {
                    !up2?(<img src={arrowUp} alt='arrowUp' className="arrowUp" />):(<img src={arrowUp} alt='arrowUp' className="arrowDown" /> )
                  }
                 
                
                <span style={{marginLeft:'1.5rem'}}>Thread A</span>  
                   
                    
                </div>
                {
                    up2?"":(<><p className="p41">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                <p className="p42 ">See More</p></>)
                  }
                
                
              </div>
              <div className="threadInfo4">
              <div className="arrowupdiv4 examplediv4">
                
                 <span style={{marginLeft:'0.25rem'}}>Example</span>  
                    
                </div>
                <p className="p41 " style={{marginLeft:'1.5rem'}}>You have a concept , How will you put into progress?</p>
                
              </div>
              


              
            </div>
          </div>
  )
}

export default Thread4