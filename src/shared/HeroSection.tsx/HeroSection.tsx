import './HeroSection.scss'
type Props = {}

export default function HeroSection({}: Props) {
  return (
    <div className="herosection">
      <div className="wrapper container">
        <div className="title-wrapper">
          <h3>Host your meeting with </h3>
          <h3>world-class amenities.</h3>
          <h3 className="d-flex gap-3">
            Starting at<p>₹199/-!</p>
          </h3>
        </div>
        <div className="image-wrapper">
          <div className="img-hero">
            <img src="/video.svg" alt="" />
          </div>
          <h3 className="title-sm">Host your meeting with world-class</h3>
          <h3 className="d-flex title-sm gap-2">
            amenities. Starting at <p>₹199/-!</p>{" "}
          </h3>
          {/* <img src="/Vector 7.png" className='background' alt="" /> */}
        </div>
      </div>
    </div>
  );
}