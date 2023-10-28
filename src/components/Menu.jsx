import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
function Menu() {
  const [content, setContent] = useState("");
  const handleClick = (selectedBtn) => {
    setContent(selectedBtn);
  };
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={content === "components"}
          onSelect={() => handleClick("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={content === "jsx"}
          onSelect={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={content === "props"}
          onSelect={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={content === "state"}
          onSelect={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        {content ? (
          <>
            <h3>{EXAMPLES[content]?.title}</h3>
            <p>{EXAMPLES[content]?.description}</p>
            <pre>
              <code>{EXAMPLES[content]?.code}</code>
            </pre>
          </>
        ) : (
          <p>Please select a topic</p>
        )}
      </div>
    </section>
  );
}

export default Menu;
