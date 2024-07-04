let toDoList = [{
  }];
renderToDoDisplay();
function renderToDoDisplay () {
    let toDoDisplay = '';
    for (let index = 1; index < toDoList.length; index++){
        const toDoObject = toDoList[index];
        const {toDoInput, toDoDate} = toDoObject;
        const html = `
                        <div>${toDoDate} </div>
                        <div>${toDoInput} </div>
                        <button onclick = 
                        "toDoList.splice(${index}, 1);
                        renderToDoDisplay();"
                        >Delete</button>
                    `
        toDoDisplay += html;
    }
    console.log(toDoDisplay);
    let showDisplay = document.getElementById('toDoDisplay');
    showDisplay.innerHTML = toDoDisplay;
    if (toDoDisplay != ''){
        showDisplay.style.display = "grid";
    }
    else {
        showDisplay.style.display = "none";
    }
}
function addToDo () {
    const toDoInput = document.getElementById('toDoInput').value;
    const toDoDate = document.getElementById('toDoDate').value;
    if (toDoInput != '' || toDoDate != ''){
        toDoList.push({
            toDoInput, 
            toDoDate});
        console.log(toDoList);
        document.getElementById('toDoInput').value = '';
        document.getElementById('toDoDate').value = '';
    }
    else {
        alert("Please input details")
    }
    renderToDoDisplay();
}

function handleEnterKey(event){
    if(event.key === "Enter"){
        addToDo();
    }
}