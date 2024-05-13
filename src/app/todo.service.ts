import { Injectable } from '@angular/core';
import { TodoLi, todos } from './data';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private userTodo: TodoLi[] = todos;

  constructor() {}

  getUserData(): Promise<TodoLi[]> {
    return new Promise((resolve) => { 
      resolve(this.userTodo);
    });
  }
}
