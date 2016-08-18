// Homework:
//
// Let's create a simple todo application
//
// -Show an unordered list of todo's
// -Show an input to enter a new todo
// -Show a button to add a todo.
// -When the button is clicked:
// -The text from the input box is used to add a list item to the bottom of the list
// -The text from the input box is cleared out.
// When the user clicks on a list item, it is removed
// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.

var list = document.querySelector('ul');
var newItem = document.querySelector('#addtext');
var button = document.querySelector('add');
var existingItem = document.querySelector("li");
var delItem = document.querySelector("ul");


var button = document.getElementById('add');
button.addEventListener('click', function(e){

var newLi = document.createElement('li');
newLi.innerHTML = newItem.value;
list.appendChild(newLi);
newItem.value = '';

});

delItem.addEventListener('click', function(e){
event.target.remove();
console.log("removed");
});
