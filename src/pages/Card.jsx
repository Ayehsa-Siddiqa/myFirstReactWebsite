import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="col-sm-6 col-lg-4">
        <div className="card">
          <img
            src={`https://picsum.photos/id/${props.id}/200/150`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
