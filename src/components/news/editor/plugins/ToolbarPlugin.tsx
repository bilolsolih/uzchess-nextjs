import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {FORMAT_TEXT_COMMAND} from "lexical";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="toolbar">
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}>
        Bold
      </button>

      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}>
        Italic
      </button>
    </div>
  );
}