import React from "react";

const ToolTip = ({ title, children }) => {
  return (
    <div className="uiverse">
      <aside className="tooltip">{title}</aside>
      {children}
    </div>
  );
};

export default ToolTip;
