import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        
  {/* Hero Section Begin */}
  <section className="hero-section set-bg bgimg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-text">
                <span>FITNESS ELEMENTS</span>
                <h1>FITNESS TRACKER</h1>
                <p>The user-friendly Fitness Tracker Website<br /> Easy to handle</p>
                <Link to='/aboutus' className="primary-btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

        {/* About Section Begin */}
        <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eaRQF-7hhmo" 
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
                  quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, gravida quam semper libero sit amet.</p>
                <Link to='/aboutus' className="primary-btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}


    </div>
  )
}

export default Home