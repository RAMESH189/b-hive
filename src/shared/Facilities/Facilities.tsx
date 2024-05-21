import "./Facilities.scss";
export default function Facilities(props: any) {
  return (
    <div className="facility">
      <div className="thumb">
        <img src={props?.thumb} alt="" />
      </div>
      <p>{props?.desc}</p>
    </div>
  );
}
