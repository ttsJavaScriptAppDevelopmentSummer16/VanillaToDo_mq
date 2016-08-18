// // <!-- Lesson 8
// // Exercise 1: Selecting Nodes: COMPLETED -->
//
// // <!-- 1) Get the header element: -->
//
// var header = document.querySelector('header');
//
// // <!-- 2) Get all the section elements -->
//
// var allSections = document.querySelectorAll('section');
//
// // <!-- 3) Get the section element with class="current" -->
//
// var currentSection = document.querySelector('section.current');
//
// // <!-- 4) Get the section that comes after the current section -->
//
// var afterSection = document.querySelector('section.current').nextElementSibling;
//
// // <!-- 5) Get the h2 node from the section before the 'current' section -->
//
// var htwo = document.querySelector('section.current')
// .previousElementSibling.children[0];
//
// // <!-- 6) Get the div that contains the section that has an h2 with a class of 'highlight' -->
//
// var highlight = document.querySelector('h2.highlight').parentElement.parentElement;
//
// // <!-- 7) Get all the sections that contain an H2 (using a single statement); -->
//
// var allHTwo = document.querySelectorAll('section h2');
//
// console.log(header);
// console.log(allSections);
// console.log(currentSection);
// console.log(afterSection);
// console.log(htwo);
// console.log(highlight);
// console.log(allHTwo);
//
// var array = Array.from(allHTwo);
// console.log(array);

// <!-- Exercise 2: Editing the DOM -->

// <!-- 1) Update the 'Coffee' item to say 'Fair Trade Coffee' -->
//
// var coffee = document.querySelector("#list").children[1];
// coffee.innerHTML = "Fair Trade Coffee";
//
// // <!-- 2) Remove 'Twinkies' from the list -->
//
// var twinkies = document.querySelector("#list").children[3].remove
// ();
//
// // <!-- 3) Add an item 'Cheese Whiz' -->
//
// var chz = document.createElement("li");
// chz.innerHTML = "Cheese Wiz"
//
// var wt = document.querySelector("#list");
// wt.appendChild(chz);
//
// // <!-- 4) Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars'] -->
//
// var workOut = ['protein powder', 'muscle milk', 'power bars'];
// var stuff = document.querySelector("list")
// stuff.innerHTML = '';
//
//
// var theList = document.querySelector("list");
// theList.appendChild(newLi);
//
// // <!-- 5) Add the class 'important' to the muscle milk item. -->
//
//  document.querySelector('#list').children[1].className = "important"
