import React, { useEffect, useState } from "react";
import "../assets/styles/components-styles/Cursor.scss";

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    ></div>
  );
};

export default Cursor;
