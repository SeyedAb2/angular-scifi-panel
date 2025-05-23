import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-tree-card',
  standalone: true,
  imports: [],
  templateUrl: './member-tree-card.component.html',
  styleUrl: './member-tree-card.component.scss'
})
export class MemberTreeCardComponent {
  @Input('person') item:any
  

  onDelete(item:any,e:any){
    // console.log(e)
    e.stopPropagation()
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
