import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoLi } from '../data';
import { log } from 'console';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.sass'
})
export class TodoInputComponent {

  todoInput = new FormGroup({
    val : new FormControl(''),
  })

  // event emitter
  @Output() addTodo = new EventEmitter<TodoLi>();

  createTodo() {
    // console.log(this.todoInput.value.val);
    if (typeof this.todoInput.value.val != null && typeof this.todoInput.value.val != "undefined" && this.todoInput.value.val != "") {   
      this.addTodo.emit({
        id : 1,
        text : this.todoInput.value.val,
        checked: false
      })
    }
    this.todoInput.reset()
  }

}
