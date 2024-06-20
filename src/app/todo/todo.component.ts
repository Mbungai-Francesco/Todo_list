import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren, inject } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { TodoLi } from '../data';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoService } from '../todo.service';
import { log } from 'node:console';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ListComponent, TodoInputComponent, TodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.sass',
})
export class TodoComponent {
  // todoService = inject(TodoService);
  @ViewChildren('states') state! : QueryList<ElementRef>;
  constructor(private renderer: Renderer2){}

  type1: string = 'input';
  pv: boolean = true;
  type2: string = 'hidden';
  pv2: boolean = false;
  
  todos: TodoLi[] = [];
  completed: TodoLi[] = [];
  items!: number
  stats: boolean | null = null;
  // TodoComponent: any;

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    if(!localStorage.getItem('todos')){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    const todosStr = localStorage.getItem('todos');
    if (todosStr) {
      this.todos = JSON.parse(todosStr);
      this.items = this.todos.length;
    }
  }

  addToList(val: TodoLi) {
    if (typeof val != null) {
      val.id = this.todos.length;
      this.todos.push(val);
      console.log(this.todos);
      this.items++;
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }

  // unCheckes(){
  //   this.items = 0
  //   for (const iterator of todos) {
  //     if (iterator.checked == false) {
  //       this.items++
  //     }
  //   }
  // }

  status(val: boolean, id: number) {
    // this.items = 0
    if (val) {
      this.todos[id].checked = false;
      this.items = this.countFunc(true);
    } else {
      this.todos[id].checked = true;
      this.items = this.countFunc(false);
    }
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  countFunc(val: boolean): number {
    let i = 0;
    console.log(val);
    console.log(this.todos);
    for (const iterator of this.todos) {
      console.log(iterator.checked);
      if (iterator.checked) i++;
    }
    console.log(i);
    if (val) return i;
    else return this.todos.length - i;
  };

  stat(...args: any) {
    console.log(this.todos);
    console.log(this.state);
    this.state.forEach(child => this.renderer.removeClass(child?.nativeElement, 'active'))
    console.log(this.state.get(0))
    if (typeof args[0] == 'undefined') {
      this.stats = null;
      this.items = this.todos.length;
      this.renderer.addClass(this.state.get(0)?.nativeElement, 'active');
    } else {
      this.stats = args[0];
      this.items = this.countFunc(args[0]);
      this.renderer.addClass(this.state.get(args[1])?.nativeElement, 'active');
    }
    
  }

  clearAll() {
    this.stats = null;
    this.items = 0;
    this.todos = [];
    // console.log(this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  // constructor() {
  //   this.todoService.getUserData().then((data) => {
  //     this.todos = data;
  //   });
  // }
}
