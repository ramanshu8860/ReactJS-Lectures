//We know that React is a library so we
//import react using React CDN links
//React JS is responsible only for the View layer of application.
const h2 = React.createElement(
  "h1",
  { className: "subHeading", id: "subtitle" },
  "Hello React"
);
//React.createElement takes three parameters first type , props and children
//const root = ReactDOM.createRoot(document.querySelector('#root'))

//If we use Vanilla Js

const h1 = document.createElement("h2");
h1.innerText = "Hello Vanilla JS";
document.querySelector("body").append(h1);

//document.querySelector('#root').append(h1)

const container1 = React.createElement(
  "div",
  { className: "subHeading", id: "subtitle" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 2 },
        "This is using ReactMultiple Children"
      ),
    ]),
  ]
);

const container = React.createElement(
  "div",
  { className: "container", id: "container" },
    [ 
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 1 },
        "The library for web and native user interfaces"
      ),
      React.createElement("img", {
        key: 2,
        style: {
          width: 200,
          backgroundColor: "teal",
          borderRadius: 8,
          padding: 16,
        },
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      }),
    ]),
    React.createElement("section", { key: 2 }, [
      React.createElement("form", { key: 1 }, [
        React.createElement("div", { className: "input-group", key: 1 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "username" },
            "Username"
          ),
          React.createElement("input", { key: 2, id: "username" }),
        ]),
        React.createElement("div", { className: "input-group", key: 2 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "password" },
            "Password"
          ),
          React.createElement("input", {
            key: 2,
            id: "password",
            type: "password",
          }),
        ]),
      ]),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
