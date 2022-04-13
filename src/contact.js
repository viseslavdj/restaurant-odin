function contact(){
  let content = document.getElementById('content');
  content.classList.add('content');

  let container = document.createElement('div');
  container.classList.add('container');

  let navig = document.createElement('nav');
  // let list = document.createElement('ul');
  let home = document.createElement('p');
  let menu = document.createElement('p');
  let contact = document.createElement('p');
  home.classList.add("nav-bar");
  menu.classList.add("nav-bar");
  contact.classList.add("nav-bar");


  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "Contact";
  navig.appendChild(home);
  navig.appendChild(menu);
  navig.appendChild(contact);
  container.appendChild(navig);


  let headline = document.createElement('h2');
  headline.innerHTML = "Kamakona's Shrimp Address";
  container.appendChild(headline);

  let head6 = document.createElement('h4');
  head6.innerHTML = "Address:";
  container.appendChild(head6);
  let para = document.createElement('p');
  para.innerHTML = "700 Nimitz Hwy Honolulu, HI 96817";
  container.appendChild(para);

  

  return container; //content.appendChild(container);


}
 export { contact };
 