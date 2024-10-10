import "./styles.css";

// Part 1:

// 1.	Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// Get the value of the --main-bg CSS custom property
const mainBgColor = "var(--main-bg)";

//2. Set the background color of mainEl
mainEl.style.backgroundColor = mainBgColor;

//3. Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//4. Add the class "flex-ctr" to mainEl
mainEl.classList.add("flex-ctr");

// Part 2

// 1.Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById("top-menu");

//2. Set the height of the topMenuE1 element to be 100%.
topMenuEl.style.height = "100%";

//3. Set the background color of topMenuEl
//to the value stored in the --top-menu-bg CSS custom property
const topMenuBgColor = "var(--top-menu-bg)".trim();
topMenuEl.style.backgroundColor = topMenuBgColor;

//4. Add the class "flex-around" to topMenuEl
topMenuEl.classList.add("flex-around");

//Part 3:

// 1. Iterate over the entire menuLinks array
menuLinks.forEach((link) => {
  // 2. Create an <a> element
  const aElement = document.createElement("a");

  // 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
  aElement.setAttribute("href", link.href);

  // 4. Set the new element's content to the value of the text property of the "link" object
  aElement.textContent = link.text;

  // 5. Append the new element to the topMenuEl element
  topMenuEl.appendChild(aElement);
});

/////////////PART 2///////////

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//Part 3:

// 1.Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.getElementById("sub-menu");

//2. Set the height of the subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

//3. Set the background color of subMenuEl
//to the value stored in the --sub-menu-bg  CSS custom property
const subMenuBgColor = "var(--sub-menu-bg )".trim();
subMenuEl.style.backgroundColor = subMenuBgColor;

//4. Add the class "flex-around" to topMenuEl
subMenuEl.classList.add("flex-around");

// 1.	Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// 2.	Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

//Part 4:
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');
//Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(e){

//The first line of code of the event listener function should call the event object's preventDefault() method.
e.preventDefault();

//The second line of code of the function should immediately return if the element clicked was not an <a> element.
if(e.target.tagName !== 'A'){
return;
//Log the content of the <a> to verify the handler is working.
} else{
    console.log(e.target.textContent)
//The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
clickedLink.classList.toggle('active');

//The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
if(e.target.classList.contains('active')){
    e.target.classList.remove('active');
    subMenuEl.style.top = '0';
  } else{
    e.target.classList.add('active');
    console.log(e.target);

})
//Part 5:
//Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
//If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.

//Otherwise, set the CSS top property of subMenuEl to 0.


//Clear the current contents of subMenuEl.
subMenuEl.innerHTML = '';

//Iterate over the subLinks array, passed as an argument, and for each "link" object:
let linkMatch = menuLinks.find(link => link.text === topLink);
if(linkMatch.subLinks){
  for(let subLink of linkMatch.subLinks){

//Create an <a> element.
let subLinkElm = document.createElement('a');

//Add an href attribute to the <a>, with the value set by the href property of the "link" object.
subLinkElm.setAttribute('href', subLink.href);

//Set the element's content to the value of the text property of the "link" object.
subLinkElm.textContent = subLink.text;

//Append the new element to the subMenuEl.
subMenuEl.append(subLinkElm);
}
}
return;
}


//Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(e){

//The first line of code of the event listener function should call the event object's preventDefault() method.
e.preventDefault();

//The second line of code within the function should immediately return if the element clicked was not an <a> element.
if(e.target.tagName !== 'A'){
    return;
  } else{

//Log the content of the <a> to verify the handler is working.
console.log(e.target.textContent);

//Next, the event listener should set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = '0';

//Remove the active class from each <a> element in topMenuLinks.
topMenuLinks.forEach(function(topMenuLink){
    topMenuLink.classList.remove('active');

  })

//Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
}
})



//If the ABOUT link is clicked, an <h1>About</h1> should be displayed.