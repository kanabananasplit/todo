
/* Everything in JQuery wrapped in this ready function */
$(document).ready(function(){
	var id = 0; //initialize id variable to 0

	$("#addTaskToTaskList").click(function(){
		var itemText = $("#taskToBeAdded").val();
		//document.write(itemText);

		//Add the text and to a list
		//var itemList = document.getElementById("newTaskAddHere"); //[object HTMLUListElement]
		var itemList = $("#newTaskAddHere")[0]; //itemList is ul?.. 
		//document.write(itemList);
		if (!itemText || itemText === "" || itemText === " "){
			return false;
		}
		addTasks(itemText, itemList);
	});

	//function for pressing enter
	$("#taskToBeAdded").keyup(function(e){
		var code = e.which; //what does this do exactly?
		if (code === 13){
			e.preventDefault(); //also what does this do exactly?
			$("#addTaskToTaskList").click();
		}
	});

	

	function addTasks(texty, listy){
		id++;
		//document.write(texty);
		//append listy
		var listHere = document.createElement("li");
		
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.id = "checky" + id;
		$(checkbox).click(function(){
			//var cbId = $("#newTaskAddHere").val();
			var cbId = this.id.replace("checky", "");
			var itemText = document.getElementById("texty" + cbId);
			//if ($("#checky").checked = true){
			if (this.checked){
			//if (document.getElementById("checky").checked = true){
		//		document.write(itemText);
				itemText.className = "strikeThru";
			}
			else{
				itemText.className = "noStrikeThru";
			}
		});
		var text = document.createElement("span");
		text.textContent = texty;
		text.id = "texty" + id;

		var edit = document.createElement("a"); 
		edit.innerText = "Edit  |";
		$(edit).click(function(){
			var newText = prompt("Edit:");
			if (newText !== null)
				this.previousElementSibling.previousElementSibling.innerHTML = newText;
		});
		edit.id = "edity" + id;

		var dlt = document.createElement("a");
		dlt.innerText = " Delete";
		$(dlt).click(function(){
			//Do delete things here
			this.parentNode.parentNode.removeChild(this.parentNode);
		});

		listHere.appendChild(checkbox);
		listHere.appendChild(text);
		listHere.appendChild(dlt);
		listHere.appendChild(edit);
		
		listy.appendChild(listHere);

		//document.getElementById("taskToBeAdded").value = "";
		$("#taskToBeAdded").val("");
	}
});



















