import React from "react";
import ContainerOne from "./ContainerOne";
import "./Home.css";
import Button from "./Button"
// import Button from "@material-ui/core/Button";


const Home = () => {

  return (
    <section>
      <div className="container__one">
        <h2>How many Questions Unaswered?</h2>
        <br />
        <h4>
          Watch out this space to see how Erxians are trending with thier Dream.
        </h4>
        <ContainerOne />
      </div>
      <div className="container__two">
       <Button />
      </div>
    </section>
  );
};

export default Home;
