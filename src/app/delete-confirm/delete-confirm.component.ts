import { Component,  Input,  OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {
  
  
  // input decorator which help transfer the data from parent to child

  @Input() item:String  | undefined
  

  @Output()  onCancel =new EventEmitter()
  @Output()  onDelete =new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }


  cancel(){
    this.onCancel.emit()

  }

  delete(){
    this.onDelete.emit(this.item)

  }
}
