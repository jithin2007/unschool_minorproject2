import React from "react";
import Jithin from "../assets/jithin.jpg";

function Title() {
    const name = "Jithin Mathew";
    const leadText = "I Am A Student From India.";
    return (
        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid rounded-circle w-75"
              src={Jithin}
              alt="Jithin Mathew"
            />
          </div>
          <div className="col-12 col-md-6 pt-5">
            <div className="font-weight-light" style={{ fontSize: "50px" }}>
              Hi, I Am <span className="text-info">{name}</span>
            </div>
            <h4 className="font-weight-light">{leadText}</h4>
          </div>
        </div>
      </div>
    );
}

export default Title;