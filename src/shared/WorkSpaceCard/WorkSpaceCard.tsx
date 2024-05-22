import "./WorkSpaceCard.scss";

export default function WorkSpaceCard(props: any) {
  const { address, thumbnail, navigation, daypassprice, percentageOff, frame } =
    props;
  console.log(percentageOff);
  const price10 = daypassprice * 10
  const discountPrice = (price10 * 20) / 100;
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
          <img src={frame} alt="" className="feature"/>
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
            <div className="discount">
              <p>{percentageOff[10].value} % Discount</p>
            </div>
            <div className="button-left">
              <p>Bulk pass</p>
              <div className="amount">
                <h3>$ {discountPrice}</h3>
                <p>/ 10 days</p>
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
