import { FaCode, FaHtml5 } from "react-icons/fa";
import "../styles/CodeEditor.css";
import SandBoxHeader from "./layout/SandBoxHeader";

export default function CodeEditor() {
  return (
    <div className="main-container">
      <div className="title-section">
        <FaCode className="title-icon" />
        <h1>Code Editor</h1>
      </div>

      <SandBoxHeader title={"HTML"} Icon={FaHtml5} />
    </div>
  );
}
