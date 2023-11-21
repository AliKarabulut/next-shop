"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const index = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}></DndProvider>
    </div>
  );
};
