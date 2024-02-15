//const crypto = require('crypto')

class ToDoList {
    constructor() {
        this.todos = [];
    }
    addTodo(was, wer) {
        const Todoitem = new ToDo(was, wer);
        this.todos.push(Todoitem);
    } 
    deleteTodo(ToDo) {
        // if uid verify
        const TodoListorg = this.todos;
        const newArr = [];
        const myUuid = ToDo.getUUID(); 
        // const filtered = TodoListorg.filter((todo) => todo.myuuid !== id); //funzt

        TodoListorg.forEach(element => {
                console.log(element.getUUID());
                const compare = element.getUUID();
                if(compare !== myUuid){
                    newArr.push(element);
                }
            });
        this.todos = newArr;    
    }
};


class ToDo {
    constructor(was, wer) {
        this.was = was;
        this.wer = wer;
        this.erledigt = false;
        this.myuuid = crypto.randomUUID();
    }
    // updateToDo ({was, wer}) {
    updateToDo (was, wer) {
        if (was) this.was = was;
        if (wer) this.wer = wer;
    }

    getUUID (){
        return this.myuuid;
    }
    
}


const inputWer = document.getElementById("inputWer");
const inputWas = document.getElementById("inputWas");
const inputHidden = document.getElementById("inputHidden");
const inputSubmit = document.getElementById("inputSubmit");

// const outputWer = document.getElementById("outputWer");
// const outputWas = document.getElementById("outputWas");
// const outputBtnAendern = document.getElementById("outputBtnAendern");
// const outputBtnLoeschen = document.getElementById("outputBtnLoeschen");

const ulOutput = document.getElementById("ulOutput");

inputSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const submitWer = inputWer.value;
    const submitWas = inputWas.value;
    newToDo(submitWer);
});

function newToDo(text) {
    const toDoItem = document.createElement("li");
    const toDoText = document.createTextNode(text);
    toDoItem.appendChild(toDoText);
    ulOutput.appendChild(toDoItem);
};

// console.log(inputWerVal);
// console.log(inputWer);

// const ToDoList1 = new ToDoList();
// //const ToDo1 = new ToDo("Einkaufen", "Patrick");

// ToDoList1.addTodo("Einkaufen", "Patrick1");
// ToDoList1.addTodo("Einkaufen", "Patrick2");
// ToDoList1.addTodo("Einkaufen", "Patrick3");
// ToDoList1.addTodo("Einkaufen", "Patrick4");
// ToDoList1.addTodo("Einkaufen", "Patrick5");
// // const todoZuloeschen = ToDoList1.todos.at(2);
// // todoZuloeschen.updateToDo("Einkaufen","Stephan");
// // console.log(todoZuloeschen);
// // ToDoList1.deleteTodo(todoZuloeschen);
// console.log(ToDoList1)