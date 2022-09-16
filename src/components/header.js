import "./header.css";

const nav = document.createElement('nav');
nav.className = "header-wrapper";
const link = document.createElement('a');
link.href = "about";
link.innerText = "Google";

const button = document.createElement('button');
console.dir(button)

nav.appendChild(link)

export { nav, button };