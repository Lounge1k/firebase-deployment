import foo from "./temp";

const element:HTMLElement = document.createElement("div");
element.innerHTML = foo;
document.body.appendChild(element);
