import React from "react";
import {Link} from "react-router-dom";
import himg from "../img/ds.jpg";

const Header = () => (
    <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">

    <div class="container">
      <div class="d-sm-flex align-items-center justify-content-between">
        <div>
          <h1>Learn How To <span class="text-warning"> Drive A Car </span></h1>
          <p class="lead my-4">
            We focus on teaching our students the fundamentals of driving
            with road safety in mind
          </p>
         
          <Link className="btn btn-primary btn-lg" to={"/register"}>Enroll Now</Link>
        </div>
        <img
          className="img-fluid w-50 d-none d-sm-block"
          src={himg}
          alt="International driving school jos" />
      </div>
    </div>
  </section>
);

export default Header;