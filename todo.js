$(document).ready(function() {
  function checkMe() {
    var cbId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + cbId);
    if (this.checked) {
      itemText.className = "formatHere";
    } else {
      itemText.className = "nothingChange";
    }
  }

  /*Edits the task with a prompt that changes the given task*/
  function editItem() {
    var newText = prompt("Edit:");
    if (newText !== null) {
      this.previousElementSibling.previousElementSibling.innerHTML = newText;
    }
  }

  /*Deletes the task when "delete" is clicked*/
  function deleteItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
  }

  /*Creates task lists (checkbox, text, edit, delete)*/
  function addHere(listy, itemTexty) {
    id++; //id is incremented with each new task
    var li = document.createElement("li"); //li is a node

    var checkbox = document.createElement("input"); //checkbox variable
    checkbox.id = "cb_" + id; //id of checkbox of task #id
    checkbox.type = "checkbox";
    checkbox.onclick = checkMe; //when clicked, goes to checkMe function
    // $("#checkbox").click(function(){
    //  checkMe;
    // });

    var text = document.createElement("texty"); //text-of-task variable
    text.id = "item_" + id; //id of text of task #id
    text.textContent = itemTexty; //output is what's passed as parameter: itemTexty

    var edit = document.createElement("edity"); //edit variable
    edit.id = "editId_" + id; //id  of edit #id
    edit.textContent = "edit"; //output is "edit"
    edit.onclick = editItem; //when clicked, goes to editItem function
    //$("#editId_").click(function(){
    //  alert("In here");
    //  editItem; //not editing, why?
    //});

    var dlt = document.createElement("deletey"); //delete variable
    dlt.setAttribute("id", li.id); //id of delete #id 
    dlt.textContent = "delete"; //output is "delete"
    dlt.onclick = deleteItem; //when clicked, goes to deleteItem function
    //what is the id of this delete button????
    //$("#deletey").click(function(){
    //  alert("In here");
    //  deleteItem; //not deleting
    //});

    /*Creates the checkbox, text, delete, and edit to node #id*/
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(dlt);
    li.appendChild(edit);
    listy.appendChild(li);
    //append using jquery?
    
    document.getElementById("todoTextbox").value = ""; //clear what's in todotext
    //$("#todoTextbox").val() = "";
  }

  var id = 0; //initialize id variable to 0

  /*If enter key is pressed, same as click "add" button*/
  $("#todoTextbox").keyup(function(e) {
    var code = e.which;
    if (code === 13) {
      e.preventDefault();
      $("#todoButton").click();
    }
  });
  
  /*When a task is written, error checks and calls addHere function.
  Passes the list (with checkboxes) where the text is to be outputted, and the text in to-do*/
  $("#todoButton").click(function() { //when add is clicked...
    itemText = $("#todoTextbox").val(); //itemText is value written in todoTextbox
    if (!itemText || itemText === "" || itemText === " ") { //if empty space, don't add a new task (with add button)
      return false;
    }
    addHere(document.getElementById("newTask"), itemText);
  });
});