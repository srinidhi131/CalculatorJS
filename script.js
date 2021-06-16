import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: 0 };

    this.clear = this.clear.bind(this);
    this.expression = this.expression.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.answer = this.answer.bind(this);
    this.decimal = this.decimal.bind(this);
  }
  clear() {
    this.setState({
      output: 0,
      input: "" });

  }
  expression(event) {
    if (this.state.output == "0" || this.state.output === "+" || this.state.output === "-" || this.state.output === "*" || this.state.output === "/") {
      this.state.output = "";
    }
    this.setState({
      output: this.state.output + event.target.value,
      input: this.state.input + " " + event.target.value });

  }
  evaluate(event) {
    var ex = this.state.input.replaceAll(/\s/g, '');
    var con = event.target.value;
    if (this.state.input.indexOf("=") > 0) {
      this.state.input = this.state.input.substring(this.state.input.indexOf("=") + 1, this.state.input.length);
    }
    if (this.state.input === "+" || this.state.input === "-" || this.state.input === "*" || this.state.input === "/") {
      this.state.input = this.state.input.substring(0, this.state.input.length - 1);
    }
    if (ex[ex.length - 1] === "+" || ex[ex.length - 1] === "*" || ex[ex.length - 1] === "/") {
      if (ex[ex.length - 2] === "+" || ex[ex.length - 2] === "*" || ex[ex.length - 2] === "/") {
        this.state.input = this.state.input.substring(0, this.state.input.length - 4);
      } else
      {
        if (event.target.value !== "-") {
          this.state.input = this.state.input.substring(0, this.state.input.length - 2);
        }}}
    if (ex[ex.length - 1] === "-") {
      if (ex[ex.length - 2] === "-") {
        if (event.target.value !== "-") {
          this.state.input = this.state.input.substring(0, this.state.input.length - 4);
        } else
        {
          con = "";
        }
      } else
      {
        this.state.input = this.state.input.substring(0, this.state.input.length - 4);
      }
    }
    this.setState({
      output: event.target.value,
      input: this.state.input + " " + con });

  }
  answer(event) {
    var ex = this.state.input.replaceAll(/\s/g, '');
    const regEx = /--/g;
    if (ex.search(regEx) > 0) {
      var index = ex.search(regEx);
      for (var i = index + 2; i < ex.length; i++) {
        if (ex[i] === "+" || ex[i] === "-" || ex[i] === "*" || ex[i] === "/") {
          break;
        }
      }
      var first = ex.slice(0, index + 1);
      var second = "(" + ex.slice(index + 1, i) + ")";
      var third = ex.slice(i);
      ex = first + second + ex.substring(i);
    }
    var answer = eval(ex);
    this.setState({
      output: answer,
      input: this.state.input + " " + event.target.value + " " + answer });

  }
  decimal(event) {
    if (this.state.output.indexOf(".") > 0) {
    } else
    {
      this.setState({
        output: this.state.output + ".",
        input: this.state.input + "." });

    }
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calc" }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { id: "input" }, this.state.input), /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("div", { id: "output" }, this.state.output)), /*#__PURE__*/

      React.createElement("div", { id: "keys" }, /*#__PURE__*/
      React.createElement("button", { id: "add", onClick: this.evaluate, value: "+" }, " + "), /*#__PURE__*/
      React.createElement("button", { id: "subtract", onClick: this.evaluate, value: "-" }, " - "), /*#__PURE__*/
      React.createElement("button", { id: "multiply", onClick: this.evaluate, value: "*" }, " x "), /*#__PURE__*/
      React.createElement("button", { id: "divide", onClick: this.evaluate, value: "/" }, " / "), /*#__PURE__*/

      React.createElement("button", { id: "seven", onClick: this.expression, value: "7" }, " 7 "), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: this.expression, value: "8" }, " 8 "), /*#__PURE__*/
      React.createElement("button", { id: "nine", onClick: this.expression, value: "9" }, " 9 "), /*#__PURE__*/
      React.createElement("button", { id: "four", onClick: this.expression, value: "4" }, " 4 "), /*#__PURE__*/

      React.createElement("button", { id: "five", onClick: this.expression, value: "5" }, " 5 "), /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: this.expression, value: "6" }, " 6 "), /*#__PURE__*/
      React.createElement("button", { id: "one", onClick: this.expression, value: "1" }, " 1 "), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: this.expression, value: "2" }, " 2 "), /*#__PURE__*/

      React.createElement("button", { id: "three", onClick: this.expression, value: "3" }, " 3 "), /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: this.expression, value: "0" }, " 0 "), /*#__PURE__*/
      React.createElement("button", { id: "decimal", onClick: this.decimal }, " . "), /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.clear }, " AC "), /*#__PURE__*/

      React.createElement("button", { id: "equals", onClick: this.answer, value: "=" }, " = "))));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('app'));