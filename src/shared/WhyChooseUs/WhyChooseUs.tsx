import Facilities from '../Facilities/Facilities';
import './WhyChooseUs.scss'
import React from "react"
type Props = {}

const facility = [
  {
    thumb: "/community.png",
    desc: "Community Events",
  },
  {
    thumb: "/gym.png",
    desc: "Gym Facilities",
  },
  {
    thumb: "/wifi.png",
    desc: "High-Speed WiFi",
  },
  {
    thumb: "/cafe.png",
    desc: "Cafe & Tea Bar",
  },
  {
    thumb: "/affordable.png",
    desc: "Affordable",
  },
  {
    thumb: "/comfortable.png",
    desc: "Comfort Lounges",
  },
  {
    thumb: "/booking.png",
    desc: "Quick Booking",
  },
  {
    thumb: "/sport.png",
    desc: "Sports Area",
  },
];

export default function WhyChooseUs({}: Props) {
  return (
    <div className="whyChooseUs container">
      <div className="header-whyChoose">
        <h3>Why Choose us?</h3>
        <div className="arrow">
          <a href="https://bhiveworkspace.com/" target="_blank">
            <img src="/arrow.png" alt="" />
          </a>
        </div>
      </div>
      <div className="facility-wrapper">
        {facility.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <Facilities desc={item?.desc} thumb={item?.thumb} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}