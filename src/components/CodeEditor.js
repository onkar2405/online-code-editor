import { FaCode, FaHtml5, FaJs } from "react-icons/fa";
import "../styles/CodeEditor.css";
import SandBoxContainer from "./layout/SandBoxContainer";
import { Editor } from "@monaco-editor/react";
import { FaCss3 } from "react-icons/fa6";
import { useState } from "react";

export default function CodeEditor() {
  const options = {
    fontSize: "16px",
  };

  const [jsCode, setJsCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [htmlCode, setHtmlCode] = useState("");
  const [codeToRender, setCodeToRender] = useState("");

  function compileCode() {
    let codeToRender = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
      </html>`;

    setCodeToRender(codeToRender);
  }

  return (
    <div className="main-container">
      <div className="title-container">
        <div className="title-section">
          <FaCode className="title-icon" />
          <h1 className="project-title">Code Editor</h1>
        </div>
        <button className="run-btn" onClick={() => compileCode()}>
          Run Code
        </button>
      </div>

      <div className="editor-wrapper">
        <div className="height-250">
          <SandBoxContainer title={"HTML"} Icon={FaHtml5}>
            <Editor
              options={options}
              width="100%"
              theme={"vs-dark"}
              language="html"
              defaultLanguage="html"
              onChange={(value) => {
                setHtmlCode(value);
              }}
            />
          </SandBoxContainer>
        </div>
        <div className="height-250">
          <SandBoxContainer title={"CSS"} Icon={FaCss3}>
            <Editor
              options={options}
              width="100%"
              theme={"vs-dark"}
              language={"css"}
              defaultLanguage="css"
              onChange={(value) => {
                setCssCode(value);
              }}
            />
          </SandBoxContainer>
        </div>
        <div className="height-250">
          <SandBoxContainer title={"JavaScript"} Icon={FaJs}>
            <Editor
              options={options}
              width="100%"
              theme={"vs-dark"}
              language={"javascript"}
              defaultLanguage="javascript"
              onChange={(value) => {
                setJsCode(value);
              }}
            />
          </SandBoxContainer>
        </div>
      </div>

      <div>
        <iframe
          title="output"
          className="output-window"
          id="output-frame"
          srcDoc={codeToRender}
        ></iframe>
      </div>
    </div>
  );
}
