import { Component, Input } from '@angular/core';
import { listenerCount } from 'stream';

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
  data= {
    value: "What I have to do",
    checked: false
  }
  check: string = 'check'
  unCheck: string = 'unCheck'

  checker(){
    if (this.data.checked) this.data.checked = false
    else this.data.checked = true
  }

}
