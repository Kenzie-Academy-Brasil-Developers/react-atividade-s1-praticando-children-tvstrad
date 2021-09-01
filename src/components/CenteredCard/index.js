import "./style.css";

const CenteredCard = (props) => {
  return (
    <div className="card">
      <span> {props.name} </span>
      <span> {props.age} </span>
      <span> {props.contact} </span>
    </div>
  );
};

export default CenteredCard;
