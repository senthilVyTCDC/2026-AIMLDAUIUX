function AddTask(){
    var data = document.getElementById('input1').value
    var element = document.createElement('div')
    element.setAttribute('id','ind-task')
    element.innerHTML = `<label>${data}</label><button class="btn btn-outline-danger" onclick="DeleteTask(event)">Delete</button>`
    var maincontainer = document.getElementById('main-task')
    maincontainer.append(element)
    
}

function DeleteTask(event){
    event.target.parentElement.remove()
}