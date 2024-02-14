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
        const filtered = this.todos.filter((filterTodo));
        this.todos = filtered;
    }
    // static filterTodo(ToDo = []){
        filterTodo(){
        let newArr = []
        for(let i =0; i< this.todos.length; i++){
          if(this.todos[i].myuuid === ToDo.myuuid ){
            newArr.push(anArray[i])
          }
        }
        return (newArr)
      }
}


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
    updateToDo ({was, wer}) {
        if (was) this.was = was;
        if (wer) this.wer = wer;
    }
    
}

const ToDoList1 = new ToDoList();
// 'const ToDo1 = new ToDo("Einkaufen", "Patrick");'

ToDoList1.addTodo("Einkaufen", "Patrick");
ToDoList1.addTodo("Einkaufen", "Patrick");
ToDoList1.addTodo("Einkaufen", "Patrick");
ToDoList1.addTodo("Einkaufen", "Patrick");
ToDoList1.addTodo("Einkaufen", "Patrick");
ToDoList1.filterTodo()
console.log(ToDoList1)


