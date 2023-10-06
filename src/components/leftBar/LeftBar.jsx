import React from "react";
import "./LeftBar.css";
// always remember ./ eutai folder vitra ko arko file ho vaney ../ vaney ko parent ho ../../ vaneko chai 2 level up parent vaneko ho hai
import Friends from "../../icon_images/1.png";
import Groups from "../../icon_images/2.png";
import Market from "../../icon_images/3.png";
import Watch from "../../icon_images/4.png";
import Memories from "../../icon_images/5.png";
import Events from "../../icon_images/6.png";
import Gaming from "../../icon_images/7.png";
import Gallery from "../../icon_images/8.png";
import Videos from "../../icon_images/9.png";
import Messages from "../../icon_images/10.png";
import Tutorials from "../../icon_images/11.png";
import Courses from "../../icon_images/12.png";
import Fund from "../../icon_images/13.png";
const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="leftbaruser">
            <img
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Jhon Lenon</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div> <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div> <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div> <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div> <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div> <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div> <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
