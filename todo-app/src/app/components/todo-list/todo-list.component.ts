import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todosSelector } from 'src/app/providers/todos.reducer';
import { TodoModel } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  @Input() todo?: TodoModel;
  todos: TodoModel[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {

  }

  loadTodos() {
    this.store.select(todosSelector).subscribe((state) => this.todos = state);
  }

}
