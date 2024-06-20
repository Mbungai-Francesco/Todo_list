import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  @Input({required: true}) inType? : string
  @Input({required: true}) view? : boolean
  @Input({required: true}) todo?: [
    id: number,
    text: string | null | undefined,
  ]
  // returnVal? : {
  //   id?:number,
  //   val:boolean,
  // }
  @Output() status = new EventEmitter<boolean>();
  
  @Input({required: true}) checked : boolean = false

  check: string = 'check'
  unCheck: string = 'unCheck'

  checker(){
    // if (this.data.checked) this.data.checked = false
    // else this.data.checked = true
    this.status.emit()
  }

}
