import SandBoxHeader from "./SandBoxHeader";

import "../../styles/layout/SandBoxContainer.css";

export default function SandBoxContainer({ title, Icon, children }) {
  return (
    <div className="editor">
      <SandBoxHeader title={title} Icon={Icon} />
      {children}
    </div>
  );
}
