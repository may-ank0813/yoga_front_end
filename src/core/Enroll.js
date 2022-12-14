import React from "react";
import Card from "./Card";
import {isAuthenticated } from "../auth";

export default function Enroll() {

  return (
    <>
        { isAuthenticated() && (
        <div className="card-group">
            <Card title = "Morning" />
            <Card title = "Evening" />
            <Card title = "Night" />
        </div> 
        )}
    </>

  );
}
