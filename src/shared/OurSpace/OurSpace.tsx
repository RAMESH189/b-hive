import WorkSpaceCard from "../WorkSpaceCard/WorkSpaceCard";
import "./OurSpace.scss";
import React from "react";
export default function OurSpace() {
  return (
    <div className="container workspace">
      <div className="space-h-wrapper">
        <h3>Our Space Overview</h3>
        <img src="arrow.png" alt="" />
      </div>
      <div className="workcard-wrapper">
        {data?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <WorkSpaceCard
              address={item?.name}
              thumbnail={item?.images}
              navigation={item?.google_maps_url}
              daypassprice={item?.day_pass_price}
              percentageOff={item?.day_pass_discounts_percentage}
              frame={item?.frame}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const data: any = [
  {
    id: "39ab7642-8de3-4e95-aa5d-34089bc67b90",
    name: "Platinum, Indiranagar",
    address:
      "271, 6th Main Rd, HAL 2nd Stage, Motappapalya, Indiranagar, Bengaluru, Karnataka 560038, India",
    latitude: 12.9732196,
    longitude: 77.6406548,
    google_maps_url:
      "https://www.google.com/maps/place/BHIVE+Workspace+Platinum+Indiranagar/@12.9732196,77.6406548,15z/data=!4m2!3m1!1s0x0:0x310e3359eaf1ee4f?sa=X&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAg9EAA&hl=en-US&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAhNEAgm/maps/place/BHIVE+Workspace+Indiranagar/@12.9789187,77.6404881,17z/data=!4m6!3m5!1s0x3bae141e007a849d:0xbff26c814318fc77!8m2!3d12.9789187!4d77.643063!16s%2Fg%2F11bxf3zpnf?entry=ttu",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560038",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: ["/workspace1.png"],
    frame: ["/f1.png"],
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    contact_person_name: "Lavena",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 499,
    day_pass_discounts_percentage: {
      "1": {
        value: 0,
        message: "",
      },
      "10": {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
  },
  {
    id: "f87f54e2-6ce4-4bc5-bed7-587b361b5633",
    name: "JBR Campus, Whitefield",
    address:
      "Plot No. 77, Jbr Tech Park, 6th Rd, Whitefield, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066, India",
    latitude: 12.978337,
    longitude: 77.727572,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560066",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: ["/workspace2.png"],
    frame: ["/f2.png"],
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": {
        value: 0,
        message: "",
      },
      "10": {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
  {
    id: "292caef7-95a4-493d-9575-5524b12eb0a5",
    name: "HSR Sector 6 Service Road, Silkboard",
    address:
      "L-194, Santhosapuram, Sector 6, HSR Layout, Bengaluru, Karnataka 560101, India",
    latitude: 12.9180167,
    longitude: 77.6247532,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560101",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: ["/workspace3.png"],
    frame: ["/f3.png"],
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": {
        value: 0,
        message: "",
      },
      "10": {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
  {
    id: "471c30b4-e91c-4392-9ebe-b4c1ad4a7b63",
    name: "HSR Campus",
    address:
      'BHIVE Workspace - No.112, AKR Tech Park, "A" and, B-Block, 7th Mile Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068, India',
    latitude: 12.8926389,
    longitude: 77.6417601,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560068",
    description: null,
    rules: null,
    amenities: null,
    images: ["/workspace4.png"],
    frame: ["/f4.png"],
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": {
        value: 0,
        message: "",
      },
      "10": {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
  {
    id: "298a504d-c5cd-4456-a132-e3a8f18a4a43",
    name: "27th Main, HSR",
    address: "27th Main Rd, Bengaluru, Karnataka, India",
    latitude: 12.9120089,
    longitude: 77.6518831,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560102",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: ["/workspace5.png"],
    frame: ["/f5.png"],
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": {
        value: 0,
        message: "",
      },
      "10": {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
  {
    id: "298a504d-c5cd-4456-a132-e3a8f18a4a43",
    name: "27th Main, HSR",
    address: "27th Main Rd, Bengaluru, Karnataka, India",
    latitude: 12.9120089,
    longitude: 77.6518831,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560102",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: ["/workspace6.png"],
    frame: ["/f6.png"],
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      "1": {
        value: 0,
        message: "",
      },
      "10": {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
];
