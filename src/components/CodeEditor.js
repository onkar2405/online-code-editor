import { FaCode, FaHtml5, FaJs } from "react-icons/fa";
import "../styles/CodeEditor.css";
import SandBoxContainer from "./layout/SandBoxContainer";
import { Editor } from "@monaco-editor/react";
import { FaCss3 } from "react-icons/fa6";

export default function CodeEditor() {
  const options = {
    fontSize: "16px",
  };
  return (
    <div className="main-container">
      <div className="title-section">
        <FaCode className="title-icon" />
        <h1>Code Editor</h1>
      </div>

      <div className="editor-wrapper">
        <SandBoxContainer title={"HTML"} Icon={FaHtml5}>
          <Editor
            options={options}
            width="100%"
            theme={"vs-dark"}
            language="html"
            defaultLanguage="html"
            onChange={(value) => {
              console.log(value);
            }}
          />
        </SandBoxContainer>

        <SandBoxContainer title={"CSS"} Icon={FaCss3}>
          <Editor
            options={options}
            width="100%"
            theme={"vs-dark"}
            language={"css"}
            defaultLanguage="css"
            onChange={(value) => {
              console.log(value);
            }}
          />
        </SandBoxContainer>
        <SandBoxContainer title={"JavaScript"} Icon={FaJs}>
          <Editor
            options={options}
            width="100%"
            theme={"vs-dark"}
            language={"javascript"}
            defaultLanguage="javascript"
            onChange={(value) => {
              console.log(value);
            }}
          />
        </SandBoxContainer>
      </div>
    </div>
  );
}
