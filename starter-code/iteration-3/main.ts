// Add the reference to the interface
import {TodoItemInterface} from './interfaces';
import {TodoListInterface}     from './interfaces';


// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{

  updatedAt:Date;
  status:boolean = false;

  constructor(public title:string){}

  toggleStatus(){
    if (this.status===true) this.status=false;
    else this.status=true;
    this.updatedAt=new Date();
    this.updatedAt.getDate();
    console.log(this.updatedAt);
  };

}


// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
  myArray: Array<TodoItem>=[];

  addTask(task:TodoItem):number{
    this.myArray.push(task);
    return this.myArray.length;

  };

  listAllTasks(){
    this.myArray.map((item)=>{
      console.log(item);
      });


  };
  deleteTask(task:TodoItem):void{
    this.myArray.map((item,index)=>{
      if(item===task){
      this.myArray.splice(index,1);
      }
    })
    console.log("=========== NEW DELETION ===========");
    console.log(`Task ${task} removed from the list`);

    }

  };



// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listAllTasks();
