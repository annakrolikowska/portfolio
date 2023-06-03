import React from 'react';
import '../assets/styles/components-styles/Highlight.css';

interface HighlightProps {
  className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ className }) => {
  const highlightClass = `${className} highlight`;

  return <div className={highlightClass}></div>;
};

export default Highlight;