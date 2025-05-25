import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-member-tree-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './member-tree-card.component.html',
  styleUrl: './member-tree-card.component.scss'
})
export class MemberTreeCardComponent implements OnInit{
  @Input('person') data:any
  @Input('mode') modeType:any
  @Output() deleteItem:any = new EventEmitter()
  @Output() addItem:any = new EventEmitter()
  @Output() editItem:any = new EventEmitter()
  isSubmit: boolean = false;
  item:any ;
  url1: string = '';
  memberForm!: FormGroup;
  action:'add'|'edit' = 'add';
  
  constructor(
    private modalService: NgbModal
  ) {}
  ngOnInit(){
    // console.log(this.data)
    this.item = this.data.data
    this.initializeForm()
  }
  initializeForm(){
    this.memberForm = new FormGroup({
      name: new FormControl(
        this.action === 'edit' ? this.data?.data?.name || '' : '',
        Validators.required
      ),
      mail: new FormControl(this.action === 'edit' ? this.data?.data?.mail || '' : '',Validators.required),
      src: new FormControl(''),
    });
    if(this.action=='edit') this.url1 = this.data?.data?.src ?? ''
  }  
  onDelete(content: any,e:any) {
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
  deleteImage(){
    this.url1 = ''
  }
  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url1 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onAddNew(content:any,e:any){
    e.stopPropagation()
    this.action = 'add'
    this.modalService.open(content, { windowClass: 'dark-modal',centered:true }).result.then(
      (result) => {
        if (result === 'add') {
          // this.deleteItem.emit(this.data)
        }
      },
      (reason) => {
        this.resetForm()
        // اینجا کاربر روی دکمه لغو یا بیرون کلیک کرده
      }
    );
  }
  onEdit(content:any,e:any){
    e.stopPropagation()
    this.action = 'edit'
    this.initializeForm()
    this.modalService.open(content, { windowClass: 'dark-modal',centered:true }).result.then(
      (result) => {
        if (result === 'edit') {
          // this.deleteItem.emit(this.data)
        }
      },
      (reason) => {
        this.resetForm()
        // اینجا کاربر روی دکمه لغو یا بیرون کلیک کرده
      }
    );
  }
  addNew(modal:any){
    this.isSubmit = true
    if(this.memberForm.valid) {
      let obj:any = {
        data:{
          name : this.memberForm.value.name,
          mail : this.memberForm.value.mail,
          src: this.url1
        },
        expanded:false,
        children:[],
        type:'person'
      }
      this.addItem.emit({parentData:{...this.data,expanded:true}, childNode:obj})
      modal.close('add')
      this.resetForm()
    }
  }
  edit(modal:any){
    this.isSubmit = true
    if(this.memberForm.valid) {
      let obj:any = {
        name : this.memberForm.value.name,
        mail : this.memberForm.value.mail,
        src: this.url1
      }
      this.editItem.emit({newData:{...this.data,data:{...this.data.data,...obj}}, oldData:this.data})
      modal.close('edit')
      this.resetForm()
    }
  }
  resetForm(){
    this.memberForm.reset()
    this.isSubmit = false
    this.url1 = ''
  }
}
