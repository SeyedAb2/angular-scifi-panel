import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-member-tree-card',
  standalone: true,
  imports: [],
  templateUrl: './member-tree-card.component.html',
  styleUrl: './member-tree-card.component.scss'
})
export class MemberTreeCardComponent implements OnInit{
  @Input('person') data:any
  @Input('mode') modeType:any
  item:any ;
  @Output() deleteItem:any = new EventEmitter()
  constructor(private modalService: NgbModal) {}
    
  onDelete(e:any,content: any) {
    e.stopPropagation()
    this.modalService.open(content, { windowClass: 'dark-modal',centered:true }).result.then(
      (result) => {
        if (result === 'delete') {
          this.deleteItem.emit(this.data)
        }
      },
      (reason) => {
        // اینجا کاربر روی دکمه لغو یا بیرون کلیک کرده
      }
    );
  }
  ngOnInit(){
    // console.log(this.data)
    this.item = this.data.data
  }
  onAddNew(item:any,e:any){
    // console.log(e)
    e.stopPropagation()
  }
  onEdit(item:any,e:any){
    // console.log(e)
    e.stopPropagation()
  }

}
