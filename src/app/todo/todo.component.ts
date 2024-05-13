import { Component, inject } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { TodoLi } from '../data';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoService } from '../todo.service';
import { log } from 'node:console';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ListComponent,TodoInputComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.sass'
})
export class TodoComponent {
  todoService = inject(TodoService)

  type1: string = 'input'
  pv: boolean = true
  type2: string = 'hidden'
  pv2: boolean = false

  todos: TodoLi[] = []
  items: number = 0

  addToList(val: TodoLi){
    if(typeof val != null){
      this.todos.push(val)
      console.log(this.todos)
      this.items++
    }
  }

  // unCheckes(){
  //   this.items = 0
  //   for (const iterator of this.todos) {
  //     if (iterator.checked == false) {
  //       this.items++
  //     }
  //   }
  // }

  status(val: boolean){
    // this.items = 0
    if(val == true){
      this.items--
    }else{
      this.items++
    }
  }

  constructor() {
    this.todoService.getUserData().then(data => {
      this.todos = data
    })
  }
}
