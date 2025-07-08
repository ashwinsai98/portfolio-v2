import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "../../assets/timelineData.js";
import "./Timeline.css";
import WorkIcon from "../../assets/work.svg";
import SchoolIcon from "../../assets/school.svg";
import underline from '../../assets/underline.png';

const Timeline = () => {
  let workIconStyles = { background: "#d17a1e" };
  let schoolIconStyles = { background: "#d17a1e" };

  return (
    <div id="timeline" className="timeline">
      <div className="title">
        <h1>My Journey</h1>
        <img src={underline} alt="" />
      </div>
      <VerticalTimeline>
        {timelineData.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={<img src={isWorkIcon ? WorkIcon : SchoolIcon} alt="icon" />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <div id="description">
                {element.description.split("⋄").map((item, index) => (
                  <p key={index}>{"⋄ " + item.trim()}</p>
                ))}
              </div>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
