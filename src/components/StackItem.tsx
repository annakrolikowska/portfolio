import React from "react";
import "../assets/styles/components-styles/StackItem.scss";

type StackItemProps = {
  children: React.ReactNode;
};

const StackItem: React.FC<StackItemProps> = ({ children }) => {
  return <li className="stack-item">{children}</li>;
};

export default StackItem;
