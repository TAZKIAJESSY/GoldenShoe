import React from "react";

import "./FooterPart.css";

export default function FooterPart() {
  return (
    <footer className="footer-part">
      <div className="">
        <div className="row">
          {" "}
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Golden Shoe, <i>We Believe in Quality Product </i>, is an
              initiative to provide the customers delivering the most and recent
              need, designing shoes with modern infrastructure and expert. In
              the yaer of 1995, we launched our london shop, since then we are
              able to meet each and every customers need.A family-oriented store
              is well-advised to keep on hand shoes to appeal to everyone, from
              fashion-oriented teens to comfort-oriented 30- and 40-somethings.
              That's what we believe.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a
                  href="http://www.mensfashionmagazine.com/wp-content/uploads/2016/10/mens-dress-shoes.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="https://img1.goodfon.com/wallpaper/nbig/f/7a/women-s-shoes-purchase-heels.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="https://img1.goodfon.com/wallpaper/nbig/f/7a/women-s-shoes-purchase-heels.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kids
                </a>
              </li>
              <li>
                <a
                  href="https://img1.goodfon.com/wallpaper/nbig/f/7a/women-s-shoes-purchase-heels.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  New Born
                </a>
              </li>
              <li>
                <a
                  href="https://img1.goodfon.com/wallpaper/nbig/f/7a/women-s-shoes-purchase-heels.jpg"
                  target="_blank"
                  rel="noreferrer"
                >
                  All Types
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Contact Us</h6>
            <p>520 BC, East-London,England</p>
            <p>+07435675659</p>
            <p>gShoe@hmail.com</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="##">GoldenShoe</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="##">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="##">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="##">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="##">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
