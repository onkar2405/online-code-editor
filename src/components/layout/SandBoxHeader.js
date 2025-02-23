import { useState } from "react";
import { RiExpandDiagonalLine, RiCollapseDiagonal2Line } from "react-icons/ri";

import "../../styles/layout/SandBoxHeader.css";

export default function SandBoxHeader({ Icon, title }) {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <div className="header-container">
      <Icon />
      <h2>{title}</h2>

      <button className="expand-btn" onClick={() => setExpanded(!isExpanded)}>
        {isExpanded === true ? (
          <RiExpandDiagonalLine />
        ) : (
          <RiCollapseDiagonal2Line />
        )}
      </button>
    </div>
  );
}
