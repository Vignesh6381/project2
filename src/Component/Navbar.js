import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
// import icon from '../UI/Icon.png';
import angel from '../UI/angel logo.png'

const Navbar = () => {
  const navigate = useNavigate();

  return (

    

    <div class="container ">
      {/* Top Green Bar with Logo and Info */}
      <div className=" text-white" style={{ backgroundColor: '#198754' }}>
        <div className="container-fluid d-flex flex-column flex-lg-row align-items-stretch">
          {/* Left: Logo - Full Height */}
          <div
            className="col-md-3 bg-white p-2  d-flex align-items-center justify-content-center"
            style={{ height: "100%", maxHeight: "100px", minWidth: "200px", cursor: "pointer" }}
            onClick={() => navigate("/home")}
          >
            <img
              src={angel}
              alt="Angel Logo"
              className="img-fluid"
              style={{ width: "auto",marginTop: "25px" }}
            />
          </div>

          {/* Right: Info Bar */}
          <div className=" col-md-9 d-flex flex-column flex-md-row justify-content-between align-items-center px-4 py-2">
            {/* Timing */}
            <div className="d-flex align-items-start gap-2 text-start">
              <i className="bi bi-clock-fill text-warning fs-3"></i>
              <div className="fs-6">
                <strong>Monday - Saturday:</strong><br />
                9 am - 8 pm
              </div>
            </div>

            {/* Phone */}
            <div className="d-flex align-items-start gap-2 text-start mt-3 mt-md-0">
              <i className="bi bi-telephone-fill text-warning fs-3"></i>
              <div className="fs-6">
                <strong>Requesting A Call:</strong><br />
                (+91) 9092713336
              </div>
            </div>

            {/* Brochure Button */}
            <div className="mt-3 mt-md-0" style={{ backgroundColor: '#6c757d' }}>
              <a href="/home" className="btn btn-light btn-sm fs-6 fw-bold p-3 ">
                Download Brochure →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div class="row ">
    <div class="col-md-9 offset-md-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container p-3">
          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse fw-bold" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-lg-3">
              <li className="nav-item">
                <Link className="nav-link text-success" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="/feature">About us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link text-success" to="/products">
                  Products
                </Link>
                {/* <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                  <li><Link className="dropdown-item" to="/product1">UPVC Windows</Link></li>
                  <li><Link className="dropdown-item" to="/product2">UPVC Doors</Link></li>
                  <li><Link className="dropdown-item" to="/product3">Aluminium Windows</Link></li>
                  <li><Link className="dropdown-item" to="/product4">Aluminium Doors</Link></li>
                  <li><Link className="dropdown-item" to="/product5">PVC & WPC Doors</Link></li>
                  <li><Link className="dropdown-item" to="/product6">Partition Works</Link></li>
                  <li><Link className="dropdown-item" to="/product7">Interior Works</Link></li>
                </ul> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="/community">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="/recipes">Career</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="/register-form">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>

      <Outlet />
    </div>
    
  );
}



export default Navbar;
