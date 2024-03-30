import React from "react";
import ReactDOM from "react-dom/client"; // this is new syntax for react v17 and above

// a react element using original syntax=a div element with id title and it have 3 children which are h1, h2, h3
const element = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "this is h1 tag by using React.createElement"),
  React.createElement("h2", {}, "This is h2 tag by using React.createElement"),
  React.createElement("h3", {}, "this is h3 tag by using React.createElement"),
]);

// a react element using jsx
const JSXelement = (
  <div id="title">
    <h1 className="heading1">this is h1 by jsx</h1>
    <h2>this is h3 by jsx</h2>
    <h3>this is h3 by jsx</h3>
  </div>
);

// button componenet
// always give capital letter to a componet
const Buttoncomponet = () => {
  return <button id="butt">click here</button>;
};
// we can write any javascript inside of these curly brackets 
{
  let a = 10;
  console.log(a);
}
// a functional react component using jsx
const Funcionaljsxelement = () => {
  return (
    <div id="title">
      <Buttoncomponet />
      <h1>this is h1 functional react component using jsx</h1>
      <h2>this is h3 functional react component using jsx</h2>
      <h3>this is h3 functional react component using jsx</h3>
      {/* javascript */}
      {console.log("i am javascript inside of react component")}
    </div>
  );
};

// here i can have 2 differnt root elements and they both can run independely , one is running normal react and other is doing our JSX
const myroot = ReactDOM.createRoot(document.getElementById("root"));
const myjsxroot = ReactDOM.createRoot(document.getElementById("jsxroot"));
const myfunjsxroot = ReactDOM.createRoot(
  document.getElementById("functionjsx")
);


// we can render multiple diffrent root element, but one root elemnet can only have one component or element
myroot.render(element);
myjsxroot.render(JSXelement);
myfunjsxroot.render(<Funcionaljsxelement />);
