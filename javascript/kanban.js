
//Loads the certain playlist chosen from user
window.addEventListener('load', (event) => {
    const navsrc = localStorage.getItem('thesrc');
    var theplaylist = document.getElementById("upnavplaylist");
    theplaylist.src = navsrc;
});




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


//Showing the create new task section when hidding the other kanban blocks
function createTask(){
    var inprogressblock = document.getElementById("inprogress");
    var doneblock = document.getElementById("done");
    var taskblock = document.getElementById("create-new-task-block");
    var newnamekblock = document.getElementById("addedblock");
    var newblock = document.getElementById("new");



    if (inprogressblock.style.display === "none") {
        inprogressblock.style.display = "block";
        doneblock.style.display = "block";
        newnamekblock.style.display = "flex";
        newblock.style.display = "flex";
        taskblock.style.display = "none";
   
   
    } else {
        inprogressblock.style.display = "none";
        doneblock.style.display = "none";
        taskblock.style.display = "flex";
        newnamekblock.style.display = "none";
        newblock.style.display = "none";
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

    var priorityRating =  document.getElementById("priorityInput").value;
// create a variable to store task class accroding to input task name
   let addedtaskclass=taskName.toLowerCase().split(" ").join("");
   
//Add the new task block into the to-do block according to user input
const list = document.querySelector('#todo');

const row = document.createElement('div');

    row.innerHTML += `
    <div class="task" id="${addedtaskclass}" draggable="true" ondragstart="drag(event)">
    <span class="task-hearder">
        <p class='task-name'>${taskName}</p>
        <button class="delete-task" onclick="deletetask('${addedtaskclass}')">
        <img src="icon/deleteiconred.png" alt='delete-icon' width="13px" height="13px">
      </button>
      </span>
          <p class='time-to-complete'>${completetime}min</p>
          <p class='due-date'>Due date:${duedate}</p>
          <div class="rating-circle" id='rc1'></div>
          <p class='priority-rating' id='pr1'>${priorityRating}</p>
    </div>
    `;

    list.appendChild(row);

        //Change color of rating-circle and priority-rating text in css
       // prioritycolorchange();
      
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
// function deleteblockdone(){
//     var x = document.getElementById("done");
//     x.remove();
//     }

// function deleteblockinprogress(){
// var x = document.getElementById("inprogress");
// x.remove();
// }

// function deleteblocknewname(){
//     var x = document.getElementById("newname");
//     x.remove();
//     }


//delete function
function deletetask(taskid){
    var x = document.getElementById(taskid);
    //To ask the user doulb-check if they actually want to delete the element
    //window.confirm() instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.
    if(confirm('Confirm to delete '+taskid+"?")){x.remove();}
    }

function addblock(){
//Add the new task block into the to-do block according to user input
const list = document.querySelector('#addedblock');
    list.innerHTML += `
    <div class="kanban-block" id="newname" ondrop="drop(event)" ondragover="allowDrop(event)">
          <div class="kanban-block-header">
            <input type="text" value='Other'>
            <button class="delete-block" onclick="deletetask('newname')"><img src="icon/deleteiconred.png"
                alt='delete-icon' width="13px" height="13px"></button>
          </div>
    `;
}