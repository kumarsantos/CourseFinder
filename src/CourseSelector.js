import { FindInPage } from '@material-ui/icons'
import React from 'react'
import './App.css'

export const Courser=["Engineering","Medical","Business"]
export const Country=["Australia","UK","Japan"]



const CourseSelector = ({Find,SetData,userData}) => {
    return (
        <div className='courseselector_container'>
            <div className='selectorwapper'>
                <div className="course">
                    <select onChange={e=>SetData({course:e.target.value})}>
                        <option>Select Courses</option>
                        {Courser.map((val,i)=>(
                            
                            <option key={i}>{val}</option>
                        ))}
                        
                      
                    </select>
                </div>
                <div className="country">
                <select onChange={e=>SetData({Country:e.target.value})}>
                        <option>Select Country</option>
                        {Country.map((val,i)=>(
                            
                            <option key={i}>{val}</option>
                        ))}
                        
                      
                    </select>
                </div>
                <div className="finder" onClick={Find}>
                    <button>Find Course</button>
                </div>
            </div>
        </div>
    )
}

export default CourseSelector
