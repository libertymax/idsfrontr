import React from 'react';
import Map from "./Map";

const Contact = () => {
    return (
      <section class="p-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <h2 class="text-center mb-4">Contact Info</h2>
              <ul class="list-group list-group-flush lead">
                <li class="list-group-item">
                  <span class="fw-bold">Main Location:</span> Angwan Rukuba, Behind Gondola Shopping Complex, Jos
                </li>

                <li class="list-group-item">
                  <span class="fw-bold">Phone Numbers:</span> 08036456347   08125376021
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Email:</span> internatinaldrivindschool4you@gmail.com
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Office Hours:</span> 8am - 6pm daily, except sundays
                </li>
              </ul>
            </div>
            <div class="col-md">
              <div id="map">
                <Map />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact;