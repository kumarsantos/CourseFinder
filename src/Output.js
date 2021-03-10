import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Styled from "styled-components";
import "./Output.css";
import logo from "./img-1.jpg";
import SubContent from './SubContent'

// import Dropdown from 'react-mui-multiselect-dropdown'
// import { Paper, Grid, Typography, makeStyles, Button } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   error: {
//     color: theme.palette.error.dark,
//     fontSize: '1em'
//   },
//   checkBox: {
//     color: 'Purple'
//   }
// }))





const Output = ({ result }) => {
    
    // const skillsData = [
    //     { id: 1, name: 'React Js' },
    //     { id: 2, name: 'Angular' },
    //     { id: 3, name: 'Node JS' }
    // ]
    
    // const [selectedEmployee, setSelectedEmployees] = useState([])
    // const [employees, setEmployees] = useState([])
    
    
    //   const populateData = () => {
    
    //       setEmployees(skillsData)

    //       const SelectedEmp = []
    //       setSelectedEmployees(SelectedEmp)
    //   }

    //   useEffect(() => {
    //     populateData()
    //   }, [])
    //   const classes = useStyles()


  const [bachelor, SetBachelor] = useState(true);
  const [master, Setmaster] = useState(false);

  const TabSwitching=(id)=>{
      if(id==="mas"){
         SetBachelor(false)
         Setmaster(true)}
    else if(id==="doc"){
        SetBachelor(false)
        Setmaster(false)}
    else{SetBachelor(true)}
}
  
  
  const [show, Setshow] = useState(true);
  const [size, SetHeight] = useState({ size: "185px" });
  const [subshow, Setsubshow] = useState(true);
  const [subsize, SetSubHeight] = useState({ Subsize: "185px" });

  let toggle = (index) => {
    if (show) {
      Setshow(false);
      SetHeight({ size: "auto" });
    } else {
      Setshow(true);
      SetHeight({ size: "185px" });
    }
  };

  let Subtoggle = (index) => {
    if (subshow) {
      Setsubshow(false);
      SetSubHeight({ subsize: "auto" });
    } else {
      Setsubshow(true);
      SetSubHeight({ subsize: "185px" });
    }
  };

  

  const OutputContainer = {
    width: "100%",
    padding: "10px",
    backgroundColor: "rgb(222, 226, 226)",
    height: `${size.size}`,
    overflowY: "hidden",
    cursor: "pointer",
    transition: "all 0.5s ease-in-out",
  };

  const SubContainer = {
    marginTop: "15px",
    transition: "all 0.5s ease-in-out",
    // width: "80%",
    backgroundColor: "rgb(222, 226, 226)",
    height: `${subsize.subsize}`,
    overflowY: "hidden",
    cursor: "pointer",
  };



  return (
    <div className="output_container">
      <p>We found 218 Institution's with 1314 Course's in computer Science. </p>
      <div className="output_wrapper" style={OutputContainer}>
        
        <div className="output_header">
          
          <div className="university_image">
            <img src={logo} alt="#" />
          </div>

          <div className="content_wrapper">

            <div className="university_banner">
              <div className="university_name">
                <h4>{result.University}. </h4>
                <p>Melbourne, Victoria, Australia</p>
              </div>
              <div className="website_link">
                <a href="#">
                  Website
                  <span>
                   
                    <ArrowForwardIosIcon />
                  </span>
                </a>
              </div>
            </div>

            <div className="logo_content">
              <div className="institute">
                <img src={logo} alt="#" />
                <p>Private Institute</p>
              </div>
              <div className="top">
                <img src={logo} alt="#" />
                <p>Top 200</p>
              </div>
              <div className="courses">
                <img src={logo} alt="#" />
                <p>134 Course's</p>
              </div>
              <div className="courses">
                <img src={logo} alt="#" />
                <p>72 Course's</p>
              </div>
              <div  className="courses">
                <img src={logo} alt="#" />
                <p>50 Course's</p>
              </div>
              <div id="last" className="phd">
                <img src={logo} alt="#" />
                <p>12 Course's</p>
              </div>

              <div className="erxians_admit">
                <p>14</p>
                <p>Erxian Admits</p>
              </div>

              <div className="erxians_applied">
                <p>15</p>
                <p>Erxian Applied</p>
              </div>

              <div className="accordian" onClick={(e) => toggle(e)}>
                {!show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
            </div>
          </div>
        </div>


        <div className="collapsed_part" style={SubContainer}>
          <p>
            <span id="bach" onClick={e=>TabSwitching(e.target.id)}>Bachelors</span>
            <span id="mas" onClick={e=>TabSwitching(e.target.id)}>Master</span>
            <span id="doc" onClick={e=>TabSwitching(e.target.id)}>Doctorate</span>
          </p>

         { bachelor ? (<SubContent Subtoggle={Subtoggle} subshow={subshow} course_name=" Bachelor In Computer"/>)
         : master ? (<SubContent Subtoggle={Subtoggle} subshow={subshow} course_name=" MSC In Computer"/>)
          : (<SubContent Subtoggle={Subtoggle} subshow={subshow} course_name=" Doctorate In Computer"/>)}
        </div>
      </div>
    </div>
  );
};

export default Output;
