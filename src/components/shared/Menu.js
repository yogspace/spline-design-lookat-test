import Button from "./Button";
import arrowLeft from "./icons/arrow-left.svg";
import arrowRight from "./icons/arrow-right.svg";

import "./style.css";

export default function Menu(props) {
  return (
    <div
      className={`menu-container ${props.menuState ? "show slide-in" : "hide"}`}
    >
      <div className="menu">
        <Button
          icon={arrowLeft}
          name={"left"}
          handleClick={props.handleClick}
          title="zurück"
        />
        <Button
          icon={arrowRight}
          name={"right"}
          handleClick={props.handleClick}
          title="weiter"
        />
      </div>
    </div>
  );
}
