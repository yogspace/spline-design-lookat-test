import "./style.css";

export default function Button(props) {
  const styles = {
    backgroundImage: `url(${props.icon})`,
  };

  return (
    <div className="button-container">
      <div
        className="button-icon icon-arrow-left"
        style={styles}
        onClick={() => props.handleClick(props)}
      ></div>
    </div>
  );
}
