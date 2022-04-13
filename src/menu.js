function menu(){
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
  headline.innerHTML = "Kamakona's Shrimp Menu";
  container.appendChild(headline);

  let head6 = document.createElement('h4');
  head6.innerHTML = "Plates:";
  container.appendChild(head6);
  let para = document.createElement('p');
  para.innerHTML = "All plates comes with 2 scoops rice, mac salad, sweet potato, green salad.";
  container.appendChild(para);

  let food = document.createElement('ul');
  let sj = document.createElement('li');
  sj.textContent = "Shrimp Jambalaya $12";
  let hot = document.createElement('li');
  hot.textContent = "Hot & Spicy $12";
  let shoyu = document.createElement("li");
  shoyu.innerHTML = "Shoyu $10";
  food.appendChild(sj);
  food.appendChild(hot);
  food.appendChild(shoyu);
  container.appendChild(food);

  return container; //content.appendChild(container);


}
 export { menu };
 