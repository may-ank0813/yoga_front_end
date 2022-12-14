import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div >
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron text-info text-center" style ={{background: "#fffef2"}}>
          <h2 className="display-4">{title}</h2>
          <h4>{description}</h4>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer mt-auto py-3" style ={{background: "#fffef2"}}>
        <div className="container-fluid bg-dark  text-center py-3" style ={{color: "#fffef2"}}>
          <h4>If you got any questions, reach me out at instagram</h4>
          <button className="btn btn-dark btn-lg bg-secondary">Contact Us</button>
          <div className="container">
            <span className="" style ={{color: "#fffef2"}}>
            We make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Base;
