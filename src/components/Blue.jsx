import React from 'react'
import './Blue.css'
import blue1 from '../assets/blue1.png'
import blue2 from '../assets/blue2.png'
import blue3 from '../assets/blue3.png'

const Blue = () => {
  return (
    <div className='blueArea'>

        <ul>
            <li>
                <div>
                    <img src={blue1} alt="blue1" />
                </div>
            </li>
            <li> <div>
                    <img src={blue2} alt="blue2" />
                </div></li>
            <li> <div>
                    <img src={blue3} alt="blue3" />
                </div></li>
        </ul>
    </div>
  )
}

export default Blue