import React, { Component } from "react";
import BannerComponent from "./BannerComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ItemComponent from "./ItemComponent";

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div className="header">
          {/* HeaderComponent */}
          <HeaderComponent />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* bannerComponent */}
              <BannerComponent />
            </div>
              <div className="col-3">
                {/* ItemComponent */}
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
              </div>  
          </div>
        </div>
        <div className="footer">
            {/* footerComponent */}
            <FooterComponent/>
        </div>
      </div>
    );
  }
}
