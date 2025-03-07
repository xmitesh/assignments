/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  todo;

  constructor(){
    this.todo = [];
  }

  add(Todo){
    this.todo.push(Todo);
  }
  remove(indexOfTodo){
    this.todo.splice(indexOfTodo,1);
  }
  update(index, updatedTodo){
    if (index >=0 && index < this.todo.length){
      this.todo[index] = updatedTodo;
    }
  }
  getAll(){
    return this.todo ;
  }
  get(indexOfTodo){
    if (indexOfTodo >=0 && indexOfTodo < this.todo.length){
      return this.todo[indexOfTodo];
    }
    else{
      return null ;
    }
  }
  clear(){
    this.todo.splice(0,this.todo.length);
  }
}

module.exports = Todo;
