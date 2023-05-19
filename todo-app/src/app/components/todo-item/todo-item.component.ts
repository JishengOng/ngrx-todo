import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  editTodo: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  updateToggle() {
    this.editTodo != this.editTodo;
  }

  updateTodo() {}

  deleteTodo() {}

}
