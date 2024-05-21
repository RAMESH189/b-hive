import "./WorkSpaceCard.scss";

export default function WorkSpaceCard(props: any) {
  const { address, thumbnail, navigation, daypassprice, percentageOff } = props;
  return (
    <div className="workcard">
      <div className="wrokcard-wrapper">
        <div className="card-address">
          <h3>{address}</h3>
          <a href={navigation} target="_blank">
            <button className="map">
              <img src="/navigation.png" alt="" />
              <p>6 Kms</p>
            </button>
          </a>
        </div>
        <div className="card-thumbnail">
          <img src={thumbnail} alt="" className="thumbnail" />
        </div>
        <div className="card-buttons">
          <button className="daypass">
            <div className="button-left">
              <p>Day pass</p>
              <div className="amount">
                <h3>$ {daypassprice}</h3>
                <p>/ day</p>
              </div>
            </div>
            <div className="button-right">
              <img src="/swipe.svg" alt="" />
            </div>
          </button>
          <button className="bulkpass">
            <div className="button-left">
              <p>Bulk pass</p>
              <div className="amount">
                <h3>$254</h3>
                <p>/ day</p>
              </div>
            </div>
            <div className="button-right">
              <img src="/swipe.svg" alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
