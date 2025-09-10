import React, { useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import Client from './Client';
import alum from '../UI/upvcdoors.jpg';
import forward from '../UI/arrow forward.png';
import back from '../UI/arrow back.png';

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize carousel once component mounts
    if (window.bootstrap && carouselRef.current) {
      new window.bootstrap.Carousel(carouselRef.current, {
        interval: 5000,
        ride: 'carousel',
      });
    }
  }, []);

  const handleNext = () => {
    if (window.bootstrap && carouselRef.current) {
      const carousel = window.bootstrap.Carousel.getInstance(carouselRef.current);
      carousel?.next();
    }
  };

  const handlePrev = () => {
    if (window.bootstrap && carouselRef.current) {
      const carousel = window.bootstrap.Carousel.getInstance(carouselRef.current);
      carousel?.prev();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-md-2 bg-light min-vh-100">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-10">
          {/* Carousel */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            ref={carouselRef}
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={i}
                  className={i === 0 ? 'active' : ''}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              {[1, 2, 3].map((_, i) => (
                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                  <div
                    className="text-white text-center p-5"
                    style={{
                      backgroundImage: `url(${alum})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '100vh',
                    }}
                  >
                    <div className="container py-5">
                      <div className="row align-items-center">
                        <div className="col-md-6 text-start">
                          <h6 className="mt-5" style={{ color: '#d2f704ff' }}>
                            ANGEL DECORATORS
                          </h6>
                          <h1 className="fw-bold fs-1 mt-4">Aluminium Windows</h1>
                          <p className="text-white text-start fs-5 mt-4">
                            Aluminium windows are a popular choice for both residential and
                            commercial buildings due to their many features and advantages.
                          </p>
                          <a
                            href="/home"
                            className="btn btn-light btn-sm fs-6 fw-bold p-3 mt-4"
                          >
                            View Products →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow Navigation */}
            <div
              className="position-absolute"
              style={{ top: '45%', right: '30px', zIndex: 2 }}
            >
              <div className="d-flex flex-column gap-3">
                <div onClick={handleNext}>
                  <img
                    src={forward}
                    alt="next"
                    className="bg-white rounded-circle p-1"
                    style={{ width: '30px', cursor: 'pointer' }}
                  />
                </div>
                <div onClick={handlePrev}>
                  <img
                    src={back}
                    alt="prev"
                    className="bg-white rounded-circle p-1"
                    style={{ width: '30px', cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Client Section */}
          <div className="mt-5">
            <Client />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
