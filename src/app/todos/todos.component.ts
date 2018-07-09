import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  fecha = new Date();
  task = '';
  checked = false;
  newTask = {};
  todoList = [];
  listAllTask;
  addTask() {
    this.newTask = { 'task': this.task, 'date': this.fecha, 'checkbox': this.checked};

    this.todoList.push(this.newTask);
    localStorage.allTask = JSON.stringify(this.todoList);
    this.drawnList();
  }

  drawnList = () => {
    this.listAllTask = JSON.parse(localStorage.allTask);
    console.log(this.listAllTask);
  }
  deleteTask = () => {
    const target = this;
    // let foo = target.parentNode;
    console.log(target, 'delete');

  }

  taskStyles = () => {
    const target = this;
    console.log(target, 'style');

    // let styles= {
    //     'text-decoration': item.isDone ? 'line-through' : 'none',
    //     'font-weight': item.isImportant ? '600' : 'normal',
    // };
    // return styles;
  //   if (this) {/*si es true se tacha si no, sigue sin decoración*/
  //     // text.style.textDecoration = 'line-through';/*Tachael texto de la tarea que ya fue agregada*/
  //     console.log(' poner decor');

  // } else {
  //     // text.style.textDecoration = 'none';
  //     console('quitar')
  // }

  }

  constructor() { }

  ngOnInit() {
    this.drawnList();
  }
}
