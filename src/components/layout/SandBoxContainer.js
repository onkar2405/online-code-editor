import SandBoxHeader from "./SandBoxHeader";

import "../../styles/layout/SandBoxContainer.css";
import { useState } from "react";

export default function SandBoxContainer({ title, Icon, children }) {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <div className={isCollapsed ? "editor-collapse flex-1" : "editor flex-1"}>
      <SandBoxHeader
        title={title}
        Icon={Icon}
        isCollapsed={isCollapsed}
        onToggle={setCollapsed}
      />
      {children}
    </div>
  );
}
