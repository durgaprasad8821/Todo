const mainContianer = document.getElementById('main-contianer');
const userInput = document.getElementById('user-input');


function barCreations(content,id){
    const buttonId = "btn"+id;

    // border rotation 
    const borderDiv = document.createElement('div')
    borderDiv.classList.add('block')
    // data add div contianer
    const contianer = document.createElement('div');
    const task = document.createElement('p');
    contianer.classList.add('use-inpt')
    task.textContent = content;
    task.classList.add('task-text')
     
    contianer.appendChild(task);

    // span for delete button 

    const spanBtn = document.createElement('span')
    spanBtn.classList.add('material-symbols-outlined');
    spanBtn.textContent = 'delete';
  
    // button for delete the data

    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(spanBtn);
    deleteBtn.classList.add('btn-symbol')
    deleteBtn.id = buttonId;
    deleteBtn.addEventListener('click' , () => {deleteTaskData(buttonId)})
    
    contianer.appendChild(deleteBtn);
    mainContianer.appendChild(contianer);

}


function displayDataUserTask(){
    while(mainContianer.firstChild){
        mainContianer.removeChild(mainContianer.lastChild)
    }
    user_data.map((key) =>{
        barCreations(key.task , key.id);
    })
}

displayDataUserTask()

function deleteTaskData(id){
    let userId = parseInt(id.charAt(id.length-1))
    console.log(userId)
    delete user_data[userId];
    while(mainContianer.firstChild){
        mainContianer.removeChild(mainContianer.lastChild)
    }
    displayDataUserTask()

}

function userInputUi(){
    let data = userInput.value
    const count = user_data.length
    const result = {
        id : count,
        task : data
    }
    user_data.push(result)
    displayDataUserTask()
    userInput.value = "";
}