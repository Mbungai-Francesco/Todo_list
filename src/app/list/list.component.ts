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
  returnVal? : {
    id?:number,
    val:boolean,
  }
  @Output() status = new EventEmitter<[id:number,val:boolean]>();
  
  data= {
    value: "What I have to do",
    checked: false
  }
  check: string = 'check'
  unCheck: string = 'unCheck'

  checker(){
    if (this.data.checked) this.data.checked = false
    else this.data.checked = true
    returnVals: this.returnVal = {
      this.todo?[0] ,
      this.data.checked,
    }
    this.status.emit([this.todo?[0] , this.data.checked])
  }

}
