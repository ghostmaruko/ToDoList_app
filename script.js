// This is a simple To-Do List application using vanilla JavaScript.
// The code allows users to add items, cross them out, delete them, and reorder the list.
/* 

function newItem(){

//javascript
//1. Adding a new item to the list of items: 
   let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = document.querySelector('#list');
     list.appendChild(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.classList.toggle("strike");
 	}

 	li.addEventListener("dblclick",crossOut);

 //3(i). Adding the delete button "X": 
   let crossOutButton = document.createElement("crossOutButton");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.addEventListener("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.classList.add("delete")
 	}
 // 4. Reordering the items: 
   $('#list').sortable();

} */

function newItem() {
  let inputValue = $("#input").val().trim();

  // Se l'input è vuoto, non fare nulla (e non mostrare alert)
  if (inputValue === "") {
    return;
  }

  let li = $("<li></li>").text(inputValue);

  $("#list").append(li);
  $("#input").val(""); // pulisce il campo

  // Barrare un item con doppio click
  li.on("dblclick", function () {
    $(this).toggleClass("strike");
  });

  // Aggiungere il pulsante "X" per eliminare
  let crossOutButton = $("<button>X</button>").addClass("delete-button");
  li.append(crossOutButton);

  crossOutButton.on("click", function () {
    li.remove();
  });

  // Lista ordinabile
  $("#list").sortable();
}

// Aggiungi elemento con click sul bottone
$("#button").on("click", newItem);

// Aggiungi elemento con tasto "invio"
$("form").on("submit", function (e) {
  e.preventDefault(); // evita reload della pagina
  newItem();
});
