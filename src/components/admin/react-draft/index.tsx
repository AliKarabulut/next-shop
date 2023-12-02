"use client";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useDebouncedCallback } from "use-debounce";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), { ssr: false });

type DraftEditorProps = {
  onValue: (value: string) => void;
};

const DraftEditor = ({ onValue }: DraftEditorProps) => {
  const changeHandler = useDebouncedCallback((newEditorState: EditorState) => {
    const newContent = draftToHtml(convertToRaw(newEditorState.getCurrentContent()));
    onValue(newContent);
  }, 500);

  return (
    <div className="max-w-3xl w-full min-h-[114px] h-full mt-5">
      <Editor
        onEditorStateChange={changeHandler}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: ["inline", "blockType", "fontSize", "list", "textAlign", "colorPicker"],
        }}
      />
    </div>
  );
};

export default DraftEditor;
