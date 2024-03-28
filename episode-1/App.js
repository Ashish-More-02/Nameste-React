{
  /* <div id="grandparent">
        <div id="parent">
            <div id="child">
                <h1>
                    hello world from react
                </h1>
            </div>
        </div>
        <div id="parent2">
            <div id="child">
                <h1>
                    hello world from react
                </h1>
                <h2> this is h2 </h2>
            </div>
        </div>
    </div> */
}

// const heading = React.createElement("h1", { id: "heading1", xyz: 'abc' }, "hello world from react!");
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

const element = React.createElement("div", { id: "grandparent" }, [
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "hello world from react")
    )
  ),
  React.createElement(
    "div",
    { id: "parent2" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "hello world from react"),
      React.createElement("h2", {}, "hello world from react"),
    ])
  ),
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);