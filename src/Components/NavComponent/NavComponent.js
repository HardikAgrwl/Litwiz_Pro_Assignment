import React from "react";
import Slider from "react-slick";
import "./NavComponent.css";

const NavItem = ({ title }) => {
  return <h6 className="navitem">{title}</h6>;
};

const NavComponent = () => {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    draggable: false,
  };
  return (
    <div className="navSlider">
      <Slider {...settings}>
        <div className="slide-item">
          <NavItem title={"Title 1"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 2"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 3"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 4"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 5"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 6"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 7"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 8"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 9"} />
        </div>
        <div className="slide-item">
          <NavItem title={"Title 10"} />
        </div>
      </Slider>
    </div>
  );
};

export default NavComponent;
