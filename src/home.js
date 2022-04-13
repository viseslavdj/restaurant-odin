function home(){
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
  home.setAttribute('id', 'hp');
  menu.classList.add("nav-bar");
  menu.setAttribute('id', 'mp');
  contact.classList.add("nav-bar");
  contact.setAttribute('id', 'cp');


  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "Contact";
  navig.appendChild(home);
  navig.appendChild(menu);
  navig.appendChild(contact);
  container.appendChild(navig);


  let headline = document.createElement('h1');
  headline.innerHTML = "Kamakona's Shrimp";
  container.appendChild(headline);

  let image = document.createElement('img');
  image.src="./images/logo.jpg";
  image.classList.add("logo")
  container.appendChild(image);

  let para = document.createElement('p');
  // let node = document.createTextNode("Kamekona's newest business venture which is a mobile shrimp truck and the logo is a giant smiling shrimp with his face.");
  // para.appendChild(node);
  para.innerHTML = "Kamekona's newest business venture which is a mobile shrimp truck and the logo is a giant smiling shrimp with his face. ";
  para.classList.add("about")
  container.appendChild(para);

  return container; //content.appendChild(container);


}
 export { home };