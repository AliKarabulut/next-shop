"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

type DraftEditorProps = {
  onValue: (value: string) => void;
};

const Ck5Editor = ({ onValue }: DraftEditorProps) => {
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    onValue(data);
  };

  return (
    <div className="max-w-3xl w-full min-h-[114px] h-full mt-5">
      <CKEditor
        editor={Editor}
        onChange={handleEditorChange}
        config={{
          htmlSupport: {
            allow: [
              {
                name: /.*/,
                classes: true,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Ck5Editor;
