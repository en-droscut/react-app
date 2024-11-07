import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      <h3>Expandable Text</h3>
      {text}
      {isExpanded ? "" : "..."}
      <button
        className="btn btn-light"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
