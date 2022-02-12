import React from "react";
import himg from "../img/ds.jpg";

const About = () => (
    <section className="p-5">
    <h2 className="text-center mb-4" id="abt">About Us</h2>

    <p>  Our school is certificated and registered by the Fedral Government with Registration Number 004424. We rank one of the best among other driving schools in terms of formal drivers training.</p>
    <p>  Our certificates are internationally recognised and we also help to secure a job upon graduation. We can also help obtain
       enhanced national driver licence for our students.
    </p>
    
    <h5 className="text-center mb-4">Our Instructor</h5>
    
    <div className="card mb-3  justify-content-center " >
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={himg} className="img-fluid rounded-start rounded-circle mb-3" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Mr Julius Seweje</h5>
            <p className="card-text"> He holds a masters degree and is a trained and licenced instructor by the Fedral Road Safety Corps, Nigeria.</p>
           
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About;