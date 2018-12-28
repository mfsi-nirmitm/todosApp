import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
  // todos = [
  //   new Todo(1, 'Lear to Dance', false , new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false , new Date()),
  //   new Todo(3, 'Visit India', false , new Date()),
  //   // {id: 1, description: 'Learn to Dance'},
  //   // {id: 2, description: 'Learn to become expert in angular'},
  //   // {id: 3, description: 'live in india'}
  // ];

  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // };

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('ashok').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('ashok', id).subscribe(
      response => {
        this.message = 'Delete Successfull!';
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

}
