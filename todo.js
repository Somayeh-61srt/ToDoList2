let inputElem = document.querySelector('#todo')
let addToList = document.querySelector('.add')
let deleteList = document.querySelector('.del-list')
let listContainerDiv = document.querySelector('.container')
let modalElem = document.querySelector('.modal')
let closeModal = document.querySelector('.close-modal')
let deletTodoInModal = document.querySelector('.delete-todo')



function addNewToList() {
    if (inputElem.value) {
        let newPElem = document.createElement('p')
        let inputValue = inputElem.value
        newPElem.classList.add('p')
        newPElem.innerHTML = inputValue
        
        let newDivForNewP = document.createElement('div')
        newDivForNewP.setAttribute('class', 'input-group input-group-lg')
        newDivForNewP.append(newPElem)
        
        let divForNewDiv = document.createElement('div')
        divForNewDiv.setAttribute('class', 'col col-12 d-flex flex-row mt-2')
        divForNewDiv.append(newDivForNewP)
        
        let newDoneBtn = document.createElement('button')
        newDoneBtn.setAttribute('class', 'btn btn-outline-success m-2 add')
        newDoneBtn.innerHTML = 'Done'
        newDoneBtn.addEventListener('click', function () {
            newPElem.classList.toggle('text-decoration-line-through')
        })
        
        let newDeletTodoBtn = document.createElement('button')
        newDeletTodoBtn.setAttribute('class', 'btn btn-outline-danger m-2 del')
        newDeletTodoBtn.innerHTML = 'Delete'
        newDeletTodoBtn.addEventListener('click', function () {
            modalElem.style.display = 'block'
            function deleteNewTodo() {
                divForNewDiv.remove();
                modalElem.style.display = 'none'
            }
            deletTodoInModal.addEventListener('click', deleteNewTodo)
        })
        divForNewDiv.append(newDoneBtn, newDeletTodoBtn)
        listContainerDiv.append(divForNewDiv)
        inputElem.value = ''

    
    } else {
        alert('Please enter your todo')
        
    }
    
    
}

function closeModalFunc() {
    modalElem.style.display = 'none'
  
}

//function deleteList(){
//}//

addToList.addEventListener('click', addNewToList)
closeModal.addEventListener('click', closeModalFunc)
//deleteList.addEventListener('click', deleteList)