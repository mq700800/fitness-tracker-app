import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <div>
         {/* Breadcrumb Section Begin */}
         <section className="breadcrumb-section set-bg about" data-setbg="img/breadcrumb/classes-breadcrumb.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <h2>Contact</h2>
                  <div className="breadcrumb-option">
                    <i className="fa fa-home color" /><Link to='/'>Home</Link>
                    <span>Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Map Section Begin */}
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.7525876633304!2d74.34579761422735!3d31.503483755129636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919058d8bdf3ad3%3A0xbdfbad38092c123e!2sGame%20Train!5e0!3m2!1sen!2s!4v1675679650039!5m2!1sen!2s" height={612} style={{border: 0}} allowFullScreen />
          <img src="img/icon/location.png" alt="" />
        </div>
        {/* Map Section End */}
        {/* Contact Section Begin */}
        <section className="contact-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-info">
                  <h4>Contacts Us</h4>
                  <div className="contact-address">
                    <div className="ca-widget">
                      <div className="cw-icon">
                        <img src="img/icon/icon-1.png" alt="" />
                      </div>
                      <div className="cw-text">
                        <h5>Our Location</h5>
                        <p>Office # 413 – 415, Al-Hafeez Executive, Firdous Mkt Rd, 30-C/3 Block C 3 Gulberg III, Lahore, Punjab 54200, Pakistan</p>
                      </div>
                    </div>
                    <div className="ca-widget">
                      <div className="cw-icon">
                        <img src="img/icon/icon-2.png" alt="" />
                      </div>
                      <div className="cw-text">
                        <h5>Phone:</h5>
                        <p>+923134452048</p>
                      </div>
                    </div>
                    <div className="ca-widget">
                      <div className="cw-icon">
                        <img src="img/icon/icon-3.png" alt="" />
                      </div>
                      <div className="cw-text">
                        <h5>Mail</h5>
                        <p>mq700800@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-form">
                  <h4>Leave A Comment</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your email" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Your messages" defaultValue={""} />
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section End */}
    </div>
  )
}

export default ContactUs