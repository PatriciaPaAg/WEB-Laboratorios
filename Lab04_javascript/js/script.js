var post = document.getElementById("ButtonPost");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDelete);

function TodoPost(e) {
    e.preventDefault();
    var to_do = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");
    /*
    var currentListHTML = llist.innerHTML;
    list.innerHTML = currentListHTML + '<input type = "checkbox" name = "todo" class = "prueba" /> ${to_do} <br>'
    */
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";

    label.textContent = to_do;

    div.appendChild(checkbox);
    div.appendChild(label);
    list.appendChild(div);

    to_do = "";
}


function TodoClear() {
    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i ++){
        todos[i].checked = false;
    }
}

function TodoMark() {
    var todos = document.getElementsByName("todo");
    //console.log(todos)
    for (var i = 0; i < todos.length(); i++) {
        todos[i].checked = true;
    }
    /*
    todos.forEach(elemento, )
    */
    todos.forEach(elemento => {
        elemento.checked = true;
    })
}

function TodoDelete() {
    var todos = document.getElementsByName("todo");
    //console.log(todos)
    todos.forEach(elemento => {
        if (elemento.checked) {
            elemento.parentElement.remove();
        }
    })

}