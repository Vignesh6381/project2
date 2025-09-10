import React from 'react';
import image from '../UI/Logo.png';
import image1 from '../UI/Logo1.png';
import image2 from '../UI/Logo2.png';
import image3 from '../UI/Logo3.png';
import image4 from '../UI/Logo4.png';
import image5 from '../UI/Logo5.png';
import image6 from '../UI/icon2.png';
import image7 from '../UI/Icon3.png';
import image8 from '../UI/Icon4.png';
import image9 from '../UI/Frame 35.png';
import image10 from '../UI/icon5.png';
import image11 from '../UI/Icon6.png';
import image12 from '../UI/Icon7.png';
import image13 from '../UI/Icon8.png';
import image14 from '../UI/pana.png';

const Client = () => {
  return (
    <div class="container py-5">
      {/* Section: Our Clients */}
      <div class="text-center mb-5">
        <h2 class="fw-bold">Our Clients</h2>
        <p class="text-muted">We have been working with some Fortune 500+ clients</p>
      </div>

      {/* Carousel of Client Logos */}
      <div id="carouselExampleInterval" class="carousel slide  " data-bs-ride="carousel">
        <div class="carousel-inner">
          {[0, 1].map((item, index) => (
            <div class={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000" key={index}>
              <div class="d-flex flex-wrap justify-content-around ">
                {[image, image1, image2, image3, image4, image5].map((imgSrc, idx) => (
                  <img key={idx} src={imgSrc} alt={`client${idx}`} class="img-fluid" style={{ maxWidth: '100px' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button class="carousel-control-prev  top-50 start-0 translate-middle-y" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span aria-hidden="true">
            <svg width="32" height="32" fill="#000000ff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 7l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z" />
            </svg>
          </span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next  top-50 end-0 " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span aria-hidden="true">
            <svg width="32" height="32" fill="#000000ff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L9.293 7 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Section: Suitable For */}
      <div class="text-center mt-5">
        <h4>Manage your entire community<br /> in a single system</h4>
        <p class="text-muted">Who is Nextcent suitable for?</p>
      </div>

      {/* Cards */}
      <div class="row text-center mt-4">
        {[{ img: image6, title: "Membership Organisations" },
        { img: image7, title: "National Associations" },
        { img: image8, title: "Clubs And Groups" }].map((item, index) => (
          <div class="col-12 col-md-4 mb-4" key={index}>
            <img src={item.img} class="img-fluid mb-3 w-25 h-25" style={{ maxHeight: '80px' }} alt="icon" />
            <h5>{item.title}</h5>
            <p class="text-muted text-center">Our membership management <br />software provides full automation of <br />membership renewals and payments</p>
          </div>
        ))}
      </div>

      {/* Section: Pixelgrade */}
      <div class=" container row align-items-center mt-5">
        <div class="col-md-6 mb-4 mb-md-0">
          <img src={image9} alt="Pixelgrade" class="img-fluid w-75 h-75" />
        </div>
        <div class="col-md-6 text-start justify-content-center">
          <h3>The unseen of spending three<br />years at Pixelgrade</h3>
          <p class="text-muted ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button class="btn text-white" style={{ backgroundColor: '#4CAF4F' }}>Learn More</button>
        </div>

      </div>


      <div class="container py-5" style={{ backgroundColor: '#F5F7FA' }}>
        <div class="row align-items-center">


          <div class="col-12 col-md-6 mb-4 mb-md-0">
            <h2 class="text-start">Helping a local</h2>
            <h2 class="text-start" style={{ color: '#4CAF4F' }}>business reinvent itself</h2>
            <p class="text-start text-muted">We reached here with our hard work and dedication</p>
          </div>


          <div class="col-12 col-md-6">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="d-flex align-items-center gap-3">
                <img src={image10} alt="icon" class="img-fluid" style={{ width: "50px", height: "50px" }} />
                <div>
                  <h5 class="mb-0">2,245,341</h5>
                  <small class="text-muted">Members</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src={image11} alt="icon" class="img-fluid" style={{ width: "50px", height: "50px" }} />
                <div>
                  <h5 class="mb-0">46,328</h5>
                  <small class="text-muted">Clubs</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src={image12} alt="icon" class="img-fluid" style={{ width: "50px", height: "50px" }} />
                <div>
                  <h5 class="mb-0">828,867</h5>
                  <small class="text-muted">Event Bookings</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src={image13} alt="icon" class="img-fluid" style={{ width: "50px", height: "50px" }} />
                <div>
                  <h5 class="mb-0">1,926,436</h5>
                  <small class="text-muted">Payments</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

     <div class="container mt-5">
  <div class="row align-items-center">
    
    
    <div class="col-12 col-md-6 mb-4 mb-md-0 text-center">
      <img src={image14} alt="image14" class="img-fluid" style={{width: "350px", height: "auto"}} />
    </div>

    
    <div class="col-12 col-md-6 text-start">
      <h2>How to design your site footer like we did</h2>
      <p>
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
        massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
        In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
        In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
        Integer in nisi eget nulla commodo faucibus efficitur quis massa.
        Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
        Donec consectetur faucibus ipsum id gravida.
      </p>
      <button class="btn text-white" style={{ backgroundColor: '#4CAF4F' }}>Learn More</button>
    </div>

  </div>
</div>




      <div class='nam1'>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Full stack developer
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body"> <code>HTML,CSS,Javascript</code> </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Graphic designer
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body"><code>Photoshop,ILLustrator,Figma</code> </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                SEO analyst
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body"><code>SEO optimaization</code></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client