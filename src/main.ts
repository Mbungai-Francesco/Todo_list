import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TodoInputComponent } from './app/todo-input/todo-input.component';
import { TodoComponent } from './app/todo/todo.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

let body = document.querySelector('body')
let ins = document.querySelector('.input')

body?.addEventListener('keyup', function (){
  TodoInputComponent.prototype.createTodo()
  // TodoComponent.prototype.status()
  // if( ins != null) ins.innerHTML = ''
})