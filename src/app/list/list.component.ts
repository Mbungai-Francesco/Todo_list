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
  @Input({required: true}) todo?: string | undefined | null
  @Output() status = new EventEmitter<boolean>();
  
  data= {
    value: "What I have to do",
    checked: false
  }
  check: string = 'check'
  unCheck: string = 'unCheck'

  checker(){
    if (this.data.checked) this.data.checked = false
    else this.data.checked = true
    this.status.emit(this.data.checked)
  }

}
