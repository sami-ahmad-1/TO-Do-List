const item = document.querySelector("#item");
const ToDoBox = document.querySelector("#ToDoBox");

item.addEventListener("keyup",
 function (event) {
  if (event.key == "Enter") {
    toDo (this.value);
    this.value = ""
  }
});


// const toDo = (item) => {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = `${item} <i class="fas fa-times"></i>`;

//   listItem.addEventListener("click", (event) => {
//       event.target.classList.toggle("done");
//   });

//   ToDoBox.appendChild(listItem);
// }


const toDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item} <i class="fas fa-times"></i>`;

  listItem.addEventListener("click",function(event) {
      this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click",function(){
    listItem.remove()
  })

  ToDoBox.appendChild(listItem);
}




//NOTE.... 
// (1)  In JavaScript, the value of this in an arrow function is determined by the enclosing lexical context (the context in which the arrow function is defined) and not by how the function is called. In this case, the arrow function doesn't have its own this, so it will inherit the this value from its outer scope.

// (2)  The classList.toggle method is a built-in JavaScript method that allows you to add or remove a CSS class from an HTML element, and it toggles the class on and off. Here's how it works: