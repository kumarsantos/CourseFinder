import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SubContent = ({ Subtoggle, subshow, course_name }) => {
  return (
    <>
      <div className="course_container">
        <div className="content">
          <h5>{course_name}</h5>
          <p>
            M.Sc (Hons) Computer Science of Master of Science Honours Computer
            Science is a postgraduated Computer M.Sc (Hons) Computer Science of
            Master of Science Honours Computer Science is a postgraduated
            
          </p>
        </div>
        <div className="help_and_collapse">
          <div>
            <a href="#">Help Me Apply</a>
          </div>
          <div>
            <p onClick={Subtoggle}>
              {!subshow ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </p>
          </div>
        </div>
      </div>
      <div className="collapsed_data">
        <div className="fisrt_col">
          <h6>STUDY MODE</h6>
          <p>On Campus</p>
          <hr />
          <h6>ELIGIBILITY</h6>
          <p>GRADUATION (MIN 3 YEARS)</p>
          <hr />
          <h6>ELIGIBILITY</h6>
          <p>GRADUATION (MIN 3 YEARS)</p>
          <hr />
        </div>
        <div className="second_col">
          <h6>STUDY MODE</h6>
          <p>On Campus</p>
          <hr />
          <h6>ELIGIBILITY</h6>
          <p>GRADUATION (MIN 3 YEARS)</p>
          <hr />
          <h6>ELIGIBILITY</h6>
          <p>GRADUATION (MIN 3 YEARS)</p>
          <hr />
        </div>
        <div className="third_col">
          <h6>STUDY MODE</h6>
          <p>On Campus</p>
          <hr />
          <h6>ELIGIBILITY</h6>
          <p>GRADUATION (MIN 3 YEARS)</p>
          <hr />
          <h6>ELIGIBILITY</h6>
          <p>GRADUATION (MIN 3 YEARS)</p>
          <hr />
        </div>
      </div>
      <div className="last_content">
        <p>COURSE DETAILS</p>
        <p>
          M.Sc. (Hons) Computer Science or Master of Science. M.Sc. (Hons)
          Computer Science or Master of Science. M.Sc. (Hons) Computer Science
          or Master of Science. M.Sc. (Hons) Computer Science or Master of
          Science. M.Sc. (Hons) Computer Science or Master of Science. M.Sc.
          (Hons) Computer Science or Master of Science. M.Sc. (Hons) Computer
          Science or Master of Science. M.Sc. (Hons) Computer Science or Master
         
        </p>
      </div>
    </>
  );
};

export default SubContent;
