/*Strikes out the task if it is checked*/
function checkMe(){
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId);
  if (this.checked) {
    itemText.style.textDecoration = "line-through";
  } else {
    itemText.style.textDecoration = "none";
  }
}

/*Edits the task with a prompt that changes the given task*/
 function editItem(){
   var newText = prompt("Edit:");
   if(newText !== null){
     this.previousElementSibling.previousElementSibling.innerHTML = newText;
   }
 }

/*Deletes the task when "delete" is clicked*/
function deleteItem(){
    this.parentNode.parentNode.removeChild(this.parentNode);
}

/*Creates task lists (checkbox, text, edit, delete)*/
function addHere(listy, itemTexty){
  id++;  //id is incremented with each new task
  var li = document.createElement("li"); //li is a node
        
  var checkbox = document.createElement("input"); //checkbox variable
  checkbox.id = "cb_" + id; //id of checkbox of task #id
  checkbox.type = "checkbox"; 
  checkbox.onclick = checkMe; //when clicked, goes to checkMe function
  
  var text = document.createElement("texty"); //text-of-task variable
  text.id = "item_" + id; //id of text of task #id
  text.textContent = itemTexty; //output is what's passed as parameter: itemTexty
  
  var edit = document.createElement("edity") //edit variable
  edit.id = "editId_" + id; //id  of edit #id
  edit.textContent = "edit"; //output is "edit"
  edit.onclick = editItem; //when clicked, goes to editItem function
  
  var dlt = document.createElement("deletey"); //delete variable
  dlt.setAttribute("id", li.id); //id of delete #id
  dlt.textContent = "delete"; //output is "delete"
  dlt.onclick = deleteItem; //when clicked, goes to deleteItem function
        
  /*Creates the checkbox, text, delete, and edit to node #id*/
  li.appendChild(checkbox);
  li.appendChild(text);  
  li.appendChild(dlt);
  li.appendChild(edit);
  listy.appendChild(li);
  document.getElementById("todotext").value = ""; //clear what's in todotext
}

var id = 0; //initialize id variable to 0

/*If enter key is pressed, same as click "add" button*/
function handle(e){
  if(e.keyCode === 13){
    e.preventDefault(); // Ensure it is only this code that runs
    document.getElementById("click").click();
  }
}

var isClicked = document.getElementById("click"); //variable for when add is clicked

/*When a task is written, error checks and calls addHere function.
Passes the list (with checkboxes) where the text is to be outputted, and the text in to-do*/
isClicked.onclick = function(){
  var inItemText = document.getElementById("todotext");  
  itemText = inItemText.value; //string of what's in to-do textbox
  if (!itemText || itemText === "" || itemText === " ") { //if empty space, don't add a new task (with add button)
    return false;
  }
  isClicked.onkeyup = function(event){
    if(event.which == 13){
      if (!itemText || itemText === "" || itemText === " ") { //if empty space, don't add a new task (with enter key)
        return false;
      }
    }
  }
  addHere(document.getElementById("taskList"), itemText);
}