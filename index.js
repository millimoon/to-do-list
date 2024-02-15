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


        // function removeObjectWithId(arr, id) {
        //     return arr.filter((obj) => obj.id !== id);
        //   }
         
            // remove(id) {
            //     this.skills = this.skills.filter(skill => skill.id !== id);
            //   }
            
        // for(let i =0; i< TodoListorg.length; i++){
        //  console.log(TodoListorg[i].getUUID());
        //  let compare = TodoListorg[i].getUUID();
        //   if(compare.toString() !== ToDo.myuuid.toString()){
        //     newArr.push(TodoListorg[i]);
        //   }
        // //console.log(item);
        
        // }
            // TodoListorg.forEach(element => {
            //     console.log(element.getUUID());
            //     let compare = element.getUUID();
            //     if(compare.toString() !== ToDo.myuuid.toString()){
            //         newArr.push(element);
            //     }

            // });

        //return (newArr);

        this.todos = newArr;
        //this.todos = filtered;
        
    }


//     const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });

    // static filterTodo(ToDo = []){
    //   filterTodo(ToDo){
    //     let newArr = []
    //     for(let i =0; i< this.todos.length; i++){
    //       if(this.todos[i].myuuid === ToDo.myuuid ){
    //         newArr.push(anArray[i])
    //       }
    //     }
    //     return (newArr)
    //   }
}

// const aquaticCreatures =  creatures.filter(function(creature) {
//     return creature.habitat == "Ocean";
//   });


// function filter(ToDo){
//     let newArr = []
//     for(let i =0; i< this.todos.length; i++){
//       if(this.todos[i] === ToDo.myuuid ){
//         newArr.push(anArray[i])
//       }
//     }
//     return (newArr)
//   }

// function filter(anArray){
//     let newArr = []
//     for(let i =0; i< anArray.length; i++){
//       if(anArray[i] % 2 === 0){
//         newArr.push(anArray[i])
//       }
//     }
//     return (newArr)
//   }

// let filtered = arr.filter(num => num % 2 == 0)

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

// const inputWerVal = document.querySelector("inputWer").value;
const inputWer = document.getElementById("inputWer");
const inputWas = document.getElementById("inputWas");
const inputHidden = document.getElementById("inputHidden");
const inputSubmit = document.getElementById("inputSubmit");

const outputWer = document.getElementById("outputWer");
const outputWas = document.getElementById("outputWas");
const outputBtnAendern = document.getElementById("outputBtnAendern");
const outputBtnLoeschen = document.getElementById("outputBtnLoeschen");

// inputSubmit.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const submitValue = '';
//     formTodo.elements.
    
// })

// console.log(inputWerVal);
console.log(inputWer);

const ToDoList1 = new ToDoList();
//const ToDo1 = new ToDo("Einkaufen", "Patrick");

ToDoList1.addTodo("Einkaufen", "Patrick1");
ToDoList1.addTodo("Einkaufen", "Patrick2");
ToDoList1.addTodo("Einkaufen", "Patrick3");
ToDoList1.addTodo("Einkaufen", "Patrick4");
ToDoList1.addTodo("Einkaufen", "Patrick5");
// const todoZuloeschen = ToDoList1.todos.at(2);
// todoZuloeschen.updateToDo("Einkaufen","Stephan");
// console.log(todoZuloeschen);
// ToDoList1.deleteTodo(todoZuloeschen);
console.log(ToDoList1)




