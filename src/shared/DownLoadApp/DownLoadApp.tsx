import "./DownLoadApp.scss";
type Props = {};

export default function DownLoadApp({}: Props) {
  return (
    <>
      <div className="container downloadApp-web">
        <h3 className="download-header">Download our app now</h3>
        <div className="card card-wrapper">
          <div className="card-left">
            <img src="/appbanner.png" alt="Banner" className="banner-image" />
          </div>
          <div className="card-right">
            <p className="description">
              Our app offers amazing features and a seamless user experience.
              Get it now and start exploring!
            </p>
            <div className="icons">
              <img
                src="/googleplay.png"
                alt="Feature 1"
                className="small-image"
              />
              <img src="/apple.png" alt="Feature 2" className="small-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="downloadApp-tab container">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="download-header">Download our app now</h3>
          <img src="/arrow.png" alt="" />
        </div>
        <div className="card card-wrapper">
          <div className="banner-wrapper">
            <img src="/appbanner.png" alt="" />
            {/* <img src="/appbackground.png" alt="" className="background" /> */}
          </div>
          <div className="app-images">
            <div className="app-image">
              <img src="/googleplay.png" alt="" />
            </div>
            <div className="app-image">
              <img src="/apple.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
