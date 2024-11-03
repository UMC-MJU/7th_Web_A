// Variable
let tdArray = new Array();
let wordData;

// Component
const inputWord = document.querySelector('.inputWord');
const toDoTbody = document.querySelector('.toDoData');
const doneTbody = document.querySelector('.doneData');

// Event 
inputWord.addEventListener("keyup", pressEnter);

// Callback Function
function pressEnter(event){
  if(event.key == "Enter" && inputWord.value != ""){
    wordData = inputWord.value;
    createRow(toDoTbody, wordData, "완료", "pressCompleteButton(this)");
    inputWord.value = null;
  }
}

function pressCompleteButton(button){
  wordData = button.parentElement.previousElementSibling.textContent;
  createRow(doneTbody, wordData, "삭제", "pressDeleteButton(this)");
  deleteRow(button.parentElement);
}

function pressDeleteButton(button){
  deleteRow(button.parentElement)
}

// Function
function createRow(Tbody, data, button, fun){
  const tr = Tbody.insertRow();
  for(let i =0; i<4; i++){
    tdArray[i] = tr.insertCell();
  }
  tdArray[2].appendChild(document.createElement("button"));
  insertDataToRow(data, button, fun)
}

function insertDataToRow(data, button, fun){
  tdArray[1].appendChild(textToTextNode(data));
  tdArray[2].firstElementChild.appendChild(textToTextNode(button));
  tdArray[2].firstElementChild.setAttribute("onClick", fun);
}

function deleteRow(button){
  button.parentElement.remove();
}

function textToTextNode(text){
  return document.createTextNode(text);
}
