const React = require("react"),
      ReactDOM = require("react-dom"),
      Dispatcher = require("./dispatcher/dispatcher.js"),
      Note = require("./util/note.js"),
      Organ = require("./components/organ.jsx");

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  ReactDOM.render(<Organ/>, container);
});
