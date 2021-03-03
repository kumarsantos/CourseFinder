import React from "react";
import "./ContainerOne.css";


const ContainerOne = () => {

  return (
    <div className="statement">
      <strong>Trending Erxians -</strong> see which Erxian is <br /> trending?
      <br />
      <br /> <strong>Trending Topics -</strong> Read out the hot topics <br />
      Erxians are discussing <br />
      <br />
      <strong>Trending Institutions -</strong> See which collages & <br />
      universities Erxians are applying <br /> <br />
      <strong>Trending Cources -</strong> Know the top trending cources <br />
      Erxians have opted to study <br /> <br />
      <hr /> <br />
      Please <strong>Sign Up</strong> or <strong>Login</strong> to continue
      exploring how <br /> Erxians are trending everyday!
      <br /> <br />
      <div className="btn__div">
        <button>Sign Up</button>
      <button>Login</button>
      </div>

    </div>
  );
};

export default ContainerOne;
