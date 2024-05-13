import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.sass'
})
export class TodoComponent {
  type1: string = 'input'
  pv: boolean = true
  type2: string = 'hidden'
  pv2: boolean = false

  todos = []
}
