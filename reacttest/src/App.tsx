import React, { useState } from "react";

export const App: React.FC = () => {
  const [text, setText] = useState("Hello world!");

  const onClick = () => {
    setTimeout(() => { setText("Next text"); }, 100)
  };

  return (
    <div>
      <button onClick={onClick}>Update text</button>
      {text}
    </div>
  );
};
