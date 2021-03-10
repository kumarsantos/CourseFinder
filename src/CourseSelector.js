import Dropdown from 'react-mui-multiselect-dropdown'
import React,{useEffect,useState} from 'react'
// import { Paper, Grid, Typography, makeStyles, Button } from '@material-ui/core'


import { FindInPage } from '@material-ui/icons'
import './App.css'

export const Courser=["Engineering","Medical","Business"]
export const Country=["Australia","UK","Japan"]


// const useStyles = makeStyles((theme) => ({
//   error: {
//     color: theme.palette.error.dark,
//     fontSize: '1em'
//   },
//   checkBox: {
//     color: 'Purple'
//   }
// }))

const CourseSelector = ({Find,SetData,userData}) => {

    // const [skill, SetSkill] = useState([])
    // const [SelectedSkill, SetSelectedSkill] = useState([])

    
    
    //     function Populate(){
            
    //         const skillsData = [
    //             { id: 1, name: 'React Js' },
    //             { id: 2, name: 'Angular' },
    //             { id: 3, name: 'Node JS' }
    //         ]
    //         SetSkill(skillsData)
    //     }
      


    //   useEffect(() => {

    //       Populate();

    //   })

    //   const classes = useStyles()

    return (
        <div className='courseselector_container'>
            <div className='selectorwapper'>
                <div className="course">

                {/* <Dropdown
                data={skill}
                fullWidth
                searchable
                searchPlaceHolder='search employee...'
                itemId='id'
                itemLabel='name'
                simpleValue
                searchByValue='name'
                itemValue='id'
                selectedValues={SelectedSkill}
                errorText='error'
                onItemClick={(records) => {
                    SetSelectedSkill(records)
                }}
                onDeleteItem={(deleted) => {
                  console.log('deleted', deleted)
                }} */}
              {/* /> */}
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
