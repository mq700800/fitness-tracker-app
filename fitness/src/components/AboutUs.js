import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
         {/* Breadcrumb Section Begin */}
         <section className="breadcrumb-section set-bg about" data-setbg="img/breadcrumb/classes-breadcrumb.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <h2>About</h2>
                  <div className="breadcrumb-option">
                    <i className="fa fa-home color" /><Link to='/'> Home</Link>
                    <span>About</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* About Section Begin */}
        <section className="about-section about-page spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-5">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/7KSNmziMqog" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
              </div>
              <div className="col-lg-6">
                <div className="about-text">
                  <h2>Story About Us</h2>
                  <p className="first-para">Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
                    sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate
                    cursus a amet.</p>
                  <p className="second-para">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
                    quam semper libero sit amet.</p>
                  <img src="img/about-signature.png" alt="" />
                  <div className="at-author">
                    <h4>Lettie Chavez</h4>
                    <span>CEO - Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}
        {/* About Counter Section Begin */}
        <div className="about-counter">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-counter-text">
                  <div className="single-counter">
                    <h1 className="counter-num count">98</h1>
                    <p>Programs</p>
                  </div>
                  <div className="single-counter">
                    <h1 className="counter-num count">14</h1>
                    <p>Locations</p>
                  </div>
                  <div className="single-counter">
                    <h1 className="counter-num count">50</h1>
                    <span>k+</span>
                    <p>Members</p>
                  </div>
                  <div className="single-counter">
                    <h1 className="counter-num count">34</h1>
                    <p>Coaches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Counter Section End */}
        {/* Gym Award Section Begin */}
        <section className="gym-award spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="award-text">
                  <h2>Best gym award</h2>
                  <p>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin,
                    nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a
                    amet.</p>
                  <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero
                    sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
                    semper libero sit amet.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <img src="img/award.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Gym Award Section End */}
    </div>
  )
}

export default AboutUs