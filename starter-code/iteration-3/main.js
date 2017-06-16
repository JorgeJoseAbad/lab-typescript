class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = false;
    }
    toggleStatus() {
        if (this.status === true)
            this.status = false;
        else
            this.status = true;
        this.updatedAt = new Date();
        this.updatedAt.getDate();
        console.log(this.updatedAt);
    }
    ;
}
class TodoList {
    constructor() {
        this.myArray = [];
    }
    addTask(task) {
        this.myArray.push(task);
        return this.myArray.length;
    }
    ;
    listAllTasks() {
        this.myArray.map((item) => {
            console.log(item);
        });
    }
    ;
    deleteTask(task) {
        this.myArray.map((item, index) => {
            if (item === task) {
                this.myArray.splice(index, 1);
            }
        });
        console.log("=========== NEW DELETION ===========");
        console.log(`Task ${task} removed from the list`);
    }
}
;
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
