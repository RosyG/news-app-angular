import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  fecha = new Date();
  task = '';
  newTask = {};
  todoList = [];
  listAllTask;
  addTask() {
    this.newTask = { 'task': this.task, 'date': this.fecha};
    this.todoList.push(this.newTask);
    localStorage.allTask = JSON.stringify(this.todoList);
    this.drawnList();
  }

  drawnList = () => {
    this.listAllTask = JSON.parse(localStorage.allTask);
  }

  constructor() { }

  ngOnInit() {
  }
}
