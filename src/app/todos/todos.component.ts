import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  fecha = '';
  task = '';
  newTask = {};
  todoList = [];
  addTask() {
    this.newTask = { 'task': this.task, 'date': this.fecha};
    this.todoList.push(this.newTask);
    console.log(this.todoList);
   }
  constructor() { }

  ngOnInit() {
  }
}
