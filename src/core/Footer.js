import React from "react";
import {Link} from "react-router-dom";

const Footer = () => (
    <footer class="p-5 bg-dark text-white text-center position-relative">
    <div class="container">

      <Link to="/"><i class="bi bi-twitter text-dark mx-1"></i></Link>
      <Link to="/"><i class="bi bi-facebook text-dark mx-1"></i></Link>
      <Link to="/"><i class="bi bi-whatsapp text-dark mx-1"></i></Link>
      <Link to="/"><i class="bi bi-youtube text-dark mx-1"></i></Link>
      <p class="lead">Copyright &copy; 2022</p>

      <Link to="/" class="position-absolute bottom-0 end-0 p-5">
        <i class="bi bi-arrow-up-circle h1"></i>
      </Link>
    </div>
  </footer>
);

export default Footer;