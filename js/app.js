const addButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
let doneTaskCount = 0;




addButton.addEventListener("click", () => {
  let taskInput = document.getElementById("task-input");

  const div = document.createElement("div");
  div.classList.add('single-task')
  const para = document.createElement("p");
  const button = document.createElement("button");

  para.innerText = taskInput.value;
  button.innerText = "Done";
  button.classList.add("btn", "btn-primary", "task-button");

  div.appendChild(para);
  div.appendChild(button);

  taskList.appendChild(div);
  updateResult();
  buttonListener();
});

//one way to solve the problem
function buttonListener() {
  const taskButtons = document.getElementsByClassName("task-button");
  for (const taskButton of taskButtons) {
    taskButton.addEventListener("click", (e) => {
    
      e.target.parentNode.style.color = "red";
      e.target.parentNode.style.border = "2px solid red";
      e.target.parentNode.style.padding = "10px";
      if (e.target.innerText == "Done") {
        e.target.setAttribute("disabled", true);
        e.target.innerText = "Completed";
        doneTaskCount++;
      }
      updateResult();
    });
  }
}

//another way

// taskList.addEventListener('click',(e)=>{

// console.log(e.target.innerText)

// })

function updateResult() {
  const totalTask = document.getElementById("total-task");
  const doneTask = document.getElementById("done-task");
  const undoneTask = document.getElementById("undone-task");
  var count = parseInt(taskList.childElementCount);
  totalTask.innerText = count;
  doneTask.innerHTML = doneTaskCount;
  undoneTask.innerHTML = count - doneTaskCount;
}



//function for filtering notes on keyword input in search field..
function inputChange(event) {
  const searchedKey = event.target.value.toLowerCase();
  filterNotes(searchedKey);
}

const filterNotes = (searchedKey) => {
  const x = document.getElementsByClassName("single-task");

  for (let i = 0; i < x.length; i++) {
    const element = x[i];
console.log('hello',element.innerText)
    if (element.innerText.toLowerCase().includes(searchedKey)) {
        console.log("hellosssssssssssssssssss", element.innerText);
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
};

