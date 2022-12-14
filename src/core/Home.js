import React from "react";
import Base from "./Base";
import Enroll from "./Enroll";

export default function Home() {

  return (
    <Base title="Online Yoga Classes" description="Explore And Enroll">
        <Enroll />
        <div class="card text-center">
            <div class="card-header" style ={{background: "#000000"}}>
            Surya Namaskar
            </div>
        <div class="card-body">
            <h5 class="card-title" style ={{color: "#000000"}}>Surya Namaskar is a very popular yoga practice. </h5>
            <p class="card-text" style ={{color: "#000000"}}>This videos introduces us to the concept of Surya Namaskar and its benefits, 
            It also illustrates the many different kinds of Surya Namaskar practiced in various traditions.</p>
            <a href="https://www.google.co.in/" class="btn btn-primary">Explore</a>
        </div>
        <div class="card-footer text-muted">
        </div>
    </div>
   </Base>
  );
}
