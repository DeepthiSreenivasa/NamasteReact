import React from "react";
import ReactDOM from "react-dom/client";

const Heading1 = () => {
  return <h1>This is another h1 tag</h1>;
};

const Heading2 = () => {
  return <h1>This is another h1 tag</h1>;
};

const BoxArea = () => {
  return (
    <div>
      <Heading1 />
      <Heading2 />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("mainContianer"));

root.render(<BoxArea />);
