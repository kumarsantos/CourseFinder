import React,{useState} from 'react'
import './Output.css'
import logo from './img-1.jpg'
import down from './chevron-down.svg'
import up from './chevron-up.svg'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Styled from 'styled-components'
import { TramRounded } from '@material-ui/icons'

const Output = ({result}) => {

    const [show,Setshow]=useState(true)
    const [size,SetHeight]=useState({size:"180px"})

    const [subshow,Setsubshow]=useState(true)
    const [subsize,SetSubHeight]=useState({Subsize:"180px"})


    let toggle=(index)=>{
        if(show){
            Setshow(false)
             SetHeight({size:"auto"})
        }

        else{
            Setshow(true)
            SetHeight({size:"180px"})
        } 
    }

    let Subtoggle=(index)=>{
        if(subshow){
            Setsubshow(false)
            SetSubHeight({subsize:"auto"})
        }

        else{
            Setsubshow(true)
            SetSubHeight({subsize:"180px"})
        } 
    }
    
    const OutputContainer={

    width:"100%",
    padding:"10px",
    backgroundColor:"rgb(222, 226, 226)",
    height: `${size.size}`,
    overflowY:"hidden",
    cursor:"pointer",
    transition:"all 0.5s ease-in-out"
    }

    const SubContainer={

    marginTop:"15px",
    transition:"all 0.5s ease-in-out",
    width:"80%",
    backgroundColor:"rgb(222, 226, 226)",
    height: `${subsize.subsize}`,
    overflowY:"hidden",
    cursor:"pointer"
    }



    return (
        <div className="output_container">
            <p>We found 218 Institution's with 1314 Course's in computer Science. </p>
            <div style={OutputContainer}>
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
                                <a href="#">Visit Website<span> <ArrowForwardIosIcon /></span></a>
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
                            <div className="courses">
                                <img src={logo} alt="#" />
                                <p>50 Course's</p>
                            </div>
                            <div className="phd">
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

                            <div className="accordian" onClick={e=>toggle(e) }>
                                {/* <p><img src={up} alt="#" /></p> */}
                                {/* <p><img src={down} alt="#" /></p> */}
                                {!show ? <ExpandLessIcon />:<ExpandMoreIcon />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapsed_part" style={SubContainer}>
                    <p><span>Bachelors</span><span>Master</span><span>Doctorate</span></p>
                    <div className="course_container">
                        <div className="content">
                            <h5>M.Sc (Hons) Computer Science.</h5>
                                <p>     M.Sc (Hons) Computer Science of Master of Science Honours
                                    Computer Science is a postgraduated Computer
                                    M.Sc (Hons) Computer Science of Master of Science Honours
                                    Computer Science is a postgraduated Computer
                                    M.Sc (Hons) Computer Science of Master of Science Honours
                                     Computer Science is a postgraduated Computer
                                    M.Sc (Hons) Computer Science of Master of Science Honours
                                     Computer Science is a postgraduated Computer
                                </p>
                        </div>
                        <div className="help_and_collapse">
                            <div>
                            <a href="#" >Help Me Apply</a>
                            </div>
                            <div>
                                <p onClick={Subtoggle}>{!subshow ? <ExpandLessIcon />:<ExpandMoreIcon />}</p>
                            </div>
                        </div>
                    </div>
                    <div className="collapsed_data">
                        <div className="fisrt_col">
                            <h6>STUDY MODE</h6>
                            <p>On Campus</p>
                            <hr/>
                            <h6>ELIGIBILITY</h6>
                            <p>GRADUATION (MIN 3 YEARS)</p>
                            <hr/>
                            <h6>ELIGIBILITY</h6>
                            <p>GRADUATION (MIN 3 YEARS)</p>
                            <hr/>
                        </div>
                        <div className="second_col">
                        <h6>STUDY MODE</h6>
                            <p>On Campus</p>
                            <hr/>
                            <h6>ELIGIBILITY</h6>
                            <p>GRADUATION (MIN 3 YEARS)</p>
                            <hr/>
                            <h6>ELIGIBILITY</h6>
                            <p>GRADUATION (MIN 3 YEARS)</p>
                            <hr/>
                        </div>
                        <div className="third_col">
                        <h6>STUDY MODE</h6>
                            <p>On Campus</p>
                            <hr/>
                            <h6>ELIGIBILITY</h6>
                            <p>GRADUATION (MIN 3 YEARS)</p>
                            <hr/>
                            <h6>ELIGIBILITY</h6>
                            <p>GRADUATION (MIN 3 YEARS)</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="last_content">
                        <p>COURSE DETAILS</p>
                        <p>
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            M.Sc. (Hons) Computer Science or Master of Science.
                            </p>
                    </div>

                </div>
            </div>
        </div>
    )
}




export default Output
