import React from "react";
import ReactDOM from "react-DOM/client";

// this is a react element 
const Heading = <h1> hello world form jsx 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

let data = 10009;
// this is a react componet 
const Title = () => {
  return <h1> this is a title </h1>;
};

// this is a react componet 
const Navbarcomponent = () => {
  return (
    <div className="nav">
      <Title /> 
      <h3>{data}</h3>
      {Heading}  
      <div className="searchbar">search here</div>
    </div>
  );
};

root.render(<Navbarcomponent />);

// {
//   /* <div id="grandparent">
//         <div id="parent">
//             <div id="child">
//                 <h1>
//                     hello world from react
//                 </h1>
//             </div>
//         </div>
//         <div id="parent2">
//             <div id="child">
//                 <h1>
//                     hello world from react
//                 </h1>
//                 <h2> this is h2 </h2>
//             </div>
//         </div>
//     </div> */
// }

// // const heading = React.createElement("h1", { id: "heading1", xyz: 'abc' }, "hello world from react!");
// // const root = ReactDOM.createRoot(document.getElementById('root'));

// // root.render(heading);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const element = React.createElement("div", { id: "grandparent" }, [
//   React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//       React.createElement("h1", {}, "hello world from react")
//     )
//   ),
//   React.createElement(
//     "div",
//     { id: "parent2" },
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "hello world from react"),
//       React.createElement("h2", {}, "hello world from react"),
//     ])
//   ),
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);
