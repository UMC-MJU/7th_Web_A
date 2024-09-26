// Variable
let tdArray = new Array();
let tdDataArray = new Array();

// Component
const inputWord = document.querySelector('.inputWord');
const toDoTbody = document.querySelector('.toDoData');
const doneTbody = document.querySelector('.doneData');
const toDoButton = document.querySelectorAll(".toDoData button");

// Event 
inputWord.addEventListener("keydown", pressEnter);


// Callback Function
function pressEnter(event){
  if(event.key == "Enter" && inputWord.value != ""){
    let wordData = inputWord.value;
    createRow(toDoTbody);
    insertDataToRow(wordData, "완료");
    inputWord.value = null;
  }
}

function pressCompleteButton(btn, idx, arr){
  toDoTbody.deleteRow(idx);
  console.log("btn : " + btn);
  console.log("idx : " + idx);
  console.log("arr : " + arr);
}

function pressDeleteButton(){
  console.log("pressDeleteButton");

}

// Function
function createRow(Tbody){
  const tr = Tbody.insertRow();
  for(let i =0; i<4; i++){
    tdArray[i] = tr.insertCell();
  }
  // tdDataArray.push(tdArray);
  tdArray[2].appendChild(document.createElement("button"));
}

function insertDataToRow(data, button){
  tdArray[1].appendChild(textToTextNode(data));
  tdArray[2].firstElementChild.appendChild(textToTextNode(button));
  // tdArray[2].firstElementChild.addEventListener("click", pressCompleteButton);
  // tdDataArray.forEach(element => {
  //   element[2].addEventListener("click", pressCompleteButton);
  // });
}

function deleteRow(){
  
}

function textToTextNode(text){
  return document.createTextNode(text);
}
