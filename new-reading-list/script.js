// When the window loads, showing the certain playlist chosen from last time
window.addEventListener('load', (event) => {
  const navsrc = localStorage.getItem('thesrc');
  var theplaylist = document.getElementById("upnavplaylist");
  theplaylist.src = navsrc;
});

//The function to open all the links in the list
function openwindow() {

  // document.location.reload(true);
  for (let i = 0; i < linkstoopen.length; i++) {
    window.open(linkstoopen[i], '_wnd' + i);
  }
  console.log(linkstoopen)
  // console.log(nametosave)

}



//A array to save all the user input value(url string)
const linkstoopen = [];
//Attempt to add name section for each input urls
// const nametosave = [];


const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
//Attempt to add name section for each input urls
// const newTaskInputname = document.querySelector('[data-new-task-input-name]')
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedListId = e.target.dataset.listId
    saveAndRender()
  }
  //Clear out the array that save links (clear out links from other list) and reloads the links showing in this list
  linkstoopen.length = 0;
  document.location.reload(true);

})

tasksContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedList = lists.find(list => list.id === selectedListId)
    const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
    selectedTask.complete = e.target.checked
    save()
    renderTaskCount(selectedList)
  }
})

clearCompleteTasksButton.addEventListener('click', e => {
  const selectedList = lists.find(list => list.id === selectedListId)
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
  saveAndRender()
})

deleteListButton.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== selectedListId)
  selectedListId = null
  saveAndRender()
})

newListForm.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.value
  if (listName == null || listName === '') return
  const list = createList(listName)
  newListInput.value = null
  lists.push(list)
  saveAndRender()
})

newTaskForm.addEventListener('submit', e => {
  e.preventDefault()
  const taskName = newTaskInput.value
  //Attempt to add name section for each input urls
  // const taskNamename = newTaskInputname.value
  // const taskn = createTask(taskNamename)
  // newTaskInputname.value = null
  // selectedList.tasks.push(taskn)
  if (taskName == null || taskName === '') return
  const task = createTask(taskName)
  newTaskInput.value = null
  const selectedList = lists.find(list => list.id === selectedListId)
  selectedList.tasks.push(task)
  saveAndRender()
})

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] }
}

function createTask(name) {
  return { id: Date.now().toString(), name: name, complete: false }
}



function saveAndRender() {
  save()
  render()
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}

function render() {
  clearElement(listsContainer)
  renderLists()

  const selectedList = lists.find(list => list.id === selectedListId)
  if (selectedListId == null) {
    listDisplayContainer.style.display = 'none'
  } else {
    listDisplayContainer.style.display = ''
    listTitleElement.innerText = selectedList.name
    renderTaskCount(selectedList)
    clearElement(tasksContainer)
    renderTasks(selectedList)
  }
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true)
    const checkbox = taskElement.querySelector('input')
    checkbox.id = task.id
    checkbox.checked = task.complete
    const label = taskElement.querySelector('label')
    const links = taskElement.querySelector('.inputlinks')


    label.htmlFor = task.id
    links.append(task.name);

    //Save the input value to links to open
    if (!linkstoopen.includes(task.name)) {
      // ✅ only runs if value not in array
      linkstoopen.push(task.name);
    }
    tasksContainer.appendChild(taskElement);
//Attempt to add name section for each input urls
    // selectedList.tasks.forEach(taskn => {
    //   const taskElementn = document.importNode(taskTemplate.content, true)
    //   const checkboxn = taskElementn.querySelector('.new task name')
    //   checkboxn.id = taskn.id
    //   checkboxn.checked = taskn.complete
    //   const labeln = taskElement.querySelector('label')
    //   const names = taskElement.querySelector('.inputnames')


    //   labeln.htmlFor = taskn.id
    //   names.append(taskn.name);

    //   //Save the input value to links to open
    //   if (!nametosave.includes(taskn.name)) {
    //     // ✅ only runs if value not in array
    //     nametosave.push(taskn.name);
    //   }


    //   tasksContainern.appendChild(taskElement);
    // })

  })
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
  const taskString = incompleteTaskCount === 1 ? "readings" : "readings"
  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderLists() {
  lists.forEach(list => {
    const listElement = document.createElement('li')
    listElement.dataset.listId = list.id
    listElement.classList.add("list-name")
    listElement.innerText = list.name
    if (list.id === selectedListId) {
      listElement.classList.add('active-list')
    }
    listsContainer.appendChild(listElement)
  })
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()