import React from "react";
import { Link } from "react-router-dom";

//404 Not found links back to home page
export const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/" className="btn btn-light my-3 mx-3">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

{/*Brittany */}