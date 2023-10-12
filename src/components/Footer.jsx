// imports for react
import React from 'react';

function Footer() {
  return (
    <div className="container footer w-full">
      <footer className="text-center text-lg-start text-white">
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">VIBES VERSE</h6>
                <p>
                  A vibrant, energetic and youthfull community that brings hope and entertains it's audience in a creative way.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a className="text-white">Swag Kit</a></p>
                <p><a className="text-white">Goodies & Merchandise</a></p>
                <p><a className="text-white">Digital Rewards</a></p>
                <p><a className="text-white">Cool Swags</a></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p><a className="text-white">Verify Your Certificate</a></p>
                <p><a className="text-white">Internship Opportunities</a></p>
                <p><a className="text-white">Start Your Career</a></p>
                <p><a className="text-white">Help Desk</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><ion-icon name="home"></ion-icon> Bangalore, 470001</p>
                <p><ion-icon name="mail-open"></ion-icon> help.vibesverse@gmail.com</p>
                <p><ion-icon name="call"></ion-icon> +91 9516644340</p>
                <p><ion-icon name="call"></ion-icon> +91 9244389908</p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2022 Copyright : 
                  <a className="text-white" href="https://mdbootstrap.com/"> Vibes Verse</a>
                </div>
              </div>
              <div className=" flex col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className=" btn-floating m-1" role="button"><ion-icon name="logo-instagram"></ion-icon></a>
                <a className=" btn-floating m-1" role="button"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a className=" btn-floating m-1" role="button"><ion-icon name="mail-unread"></ion-icon></a>
                <a className="btn-floating m-1" role="button"><ion-icon name="color-wand"></ion-icon></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
