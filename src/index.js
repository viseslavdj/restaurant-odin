// import home from './home.js';
// import menu from './menu.js'
// const home = require("./home.js");
// console.log(home);

import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
console.log(home());

let content = document.getElementById('content');
content.classList.add('content');
content.appendChild(home());
// content.appendChild(menu());

// let container = document.createElement('div');
// container.classList.add('container');

let navig = document.createElement('nav');
// let list = document.createElement('ul');
let homePage = document.getElementById('hp');
let menuPage = document.getElementById('mp');
let contactPage = document.getElementById('cp');
// homePage.classList.add("nav-bar");
// menuPage.classList.add("nav-bar");
// contact.classList.add("nav-bar");


// homePage.innerHTML = "Home";
// menuPage.innerHTML = "Menu";
// contact.innerHTML = "Contact";

homePage.addEventListener("click", function(){render ('home');});
menuPage.addEventListener("click", function(){render ('menu');});
contactPage.addEventListener("click", function(){render ('contact');});
function render(page){
  let content = document.getElementById('content');

  clear_page(content);
  switch (page){
    case 'home':
      console.log("HOME");
      content.appendChild(home());
      break;
    case 'menu':
      console.log("Menu turn");
      content.appendChild(menu());
      break;
    case 'contact':
      console.log("Contact turn");
      content.appendChild(contact());
      break;
    default:

  }
}

function clear_page(parent){
  while(parent.firstChild){
    parent.removeChild(parent.lastChild);
  }
}


