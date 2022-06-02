function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}
//show the create new task section bu hidding the inprogress and done block
function createTask(){
    var x = document.getElementById("inprogress");
    var y = document.getElementById("done");
    var z = document.getElementById("create-new-task-block");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "flex";
    }
}

var taskList = [];

function saveTask(){
    var saveButton = document.getElementById("save-button");
    var editButton = document.getElementById("edit-button");
    if (saveButton.style.display === "none") {
        saveButton.style.display = "block";
        editButton.style.display = "none";
    } else{
        saveButton.style.display = "none";
        editButton.style.display = "block";
    }

    var todo = document.getElementById("todo");
    var taskName = document.getElementById("task-name").value;
    var completetime =  document.getElementById("estimatedTimeInput").value;
    var duedate =  document.getElementById("dueDateInput").value;
    // var ratingCircle =  document.getElementById("rating-circle").value;
    var priorityRating =  document.getElementById("priorityInput").value;

    let addedtaskclass=taskName.toLowerCase().split(" ").join("");

   
//Add the new task block into the to-do block according to user input
    todo.innerHTML += `
    <div class="task" id="${addedtaskclass}" draggable="true" ondragstart="drag(event)">
        <p class='task-name'>${taskName}</p>
        <button class="delete-task" onclick="deletetask('${addedtaskclass}')">
        <img src="icon/deleteiconred.png" alt='delete-icon' width="13px" height="13px">
      </button>
          <p class='time-to-complete'>${completetime}min</p>
          <p class='due-date'>Due date:${duedate}</p>
          <div class="rating-circle" id='rc1'></div>
          <p class='priority-rating' id='pr1'>${priorityRating}</p>
    </div>
    
    `


    // prioritycolorchange()

        //Change color of rating-circle and priority-rating text in css
      
}
function test(){
    priorityRating.style.color="green";
}

function prioritycolorchange(){
    var ratingCircle =  document.getElementById("rating-circle").value;
    var priorityRating =  document.getElementById("priorityInput").value;

    //Change color of rating-circle and priority-rating text in css
        if (priorityRating=="High") {
            ratingCircle.style.backgroundColor = "#eb5a56";
            priorityRating.style.color ="#eb5a56";
          }
          else if (priorityRating=="Medium")
          {
            ratingCircle.style.backgroundColor = '#e1e123';
            priorityRating.style.color ='#e1e123';
          }  
          else if (priorityRating=="Low")  
          {
            ratingCircle.style.backgroundColor = '#67eb56';
            priorityRating.style.color ='#67eb56';
          }




}

function editTask(){
    var saveButton = document.getElementById("save-button");
    var editButton = document.getElementById("edit-button");
    if (saveButton.style.display === "none") {
        saveButton.style.display = "block";
        editButton.style.display = "none";
    } else{
        saveButton.style.display = "none";
        editButton.style.display = "block";
    }
}

//delete kanban block function
function deleteblockdone(){
    var x = document.getElementById("done");
    x.remove();
    }

function deleteblockinprogress(){
var x = document.getElementById("inprogress");
x.remove();
}

function deleteblocknewname(){
    var x = document.getElementById("newname");
    x.remove();
    }


//delete task1/2 function
function deletetask(taskid){
    var x = document.getElementById(taskid);
    x.remove();
    }

function addblock(){
var x = document.getElementById("newname");
var y = document.getElementById("new");
y.style.display = "none";
x.style.display = "block";
}