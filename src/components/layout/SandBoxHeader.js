import { RiExpandDiagonalLine, RiCollapseDiagonal2Line } from "react-icons/ri";

import "../../styles/layout/SandBoxHeader.css";

export default function SandBoxHeader({ Icon, title, isCollapsed, onToggle }) {
  return (
    <div className="header-container">
      <Icon />
      <h2 className="title">{title}</h2>

      <button className="expand-btn" onClick={() => onToggle(!isCollapsed)}>
        {isCollapsed === true ? (
          <RiExpandDiagonalLine />
        ) : (
          <RiCollapseDiagonal2Line />
        )}
      </button>
    </div>
  );
}
