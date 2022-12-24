const heading1 = React.createElement(
  "h1",
  { id: "heading1", style: { color: 'blue' } },
  "Namaste Javascript"
);

const heading2 = React.createElement("h2", { id: "heading2" }, "Namaste React");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("rootContainer"));
root.render(container);
