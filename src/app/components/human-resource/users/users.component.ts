import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { ConvertToPersianPipe } from '../../../shared/pips/convert-to-persian.pipe';
import { fade } from '../../../shared/animation/animation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ConvertToPersianPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  animations:[fade]
})
export class UsersComponent {
  formGroup!:FormGroup;
  selectedSimpleItem='انتخاب وضعیت';
  simpleItems:any=[];
  isSubmit = false;
  selectedCount = '10';
  simpleItemsCount: any = ['10','20','50','100'];
  closeResult!: string;
  InvoiceData:any[] = [
    {
      "id": 1,
      "name": "سجاد ایروانی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s",
      "status": "INACTIVE",
      "username": "rezvan@152017"
    },
    {
      "id": 2,
      "name": "جناب آقای دکتر امیرعباس ملکیان",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzNkB6IEkHhdblRg4qn2uXwF0ABf0kTb1GmVFuxTf1RZOqoPPVrMvoESACY3v1LikkWI&usqp=CAU",
      "status": "ACTIVE",
      "username": "rezvan@489379"
    },
    {
      "id": 3,
      "name": "آرین رسته",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVigc6tzaVsp67IBqTwn6RzMVbZPaBYtmnw&s",
      "status": "INACTIVE",
      "username": "rezvan@962900"
    },
    {
      "id": 4,
      "name": "محمدجواد دایی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LRk5HqAi5I7RKsDH_-hL3KJxrNPHEQGGYg&s",
      "status": "UNKNOWN",
      "username": "rezvan@115111"
    },
    {
      "id": 5,
      "name": "محمد طاها ابوطالبی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
      "status": "INACTIVE",
      "username": "rezvan@713895"
    },
    {
      "id": 6,
      "name": "محمدجواد تهرانی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s",
      "status": "UNKNOWN",
      "username": "rezvan@942133"
    },
    {
      "id": 7,
      "name": "عباس نیلوفری",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
      "status": "INACTIVE",
      "username": "rezvan@996545"
    },
    {
      "id": 8,
      "name": "جناب آقای بنيامين علی شاهی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGaOHr5qOwpKDQnnx3CtOikyklmxsm8kE7g&s",
      "status": "ACTIVE",
      "username": "rezvan@564451"
    },
    {
      "id": 9,
      "name": "رضا حمیدی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
      "status": "ACTIVE",
      "username": "rezvan@275734"
    },
    {
      "id": 10,
      "name": "محمد رضا زاده",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGaOHr5qOwpKDQnnx3CtOikyklmxsm8kE7g&s",
      "status": "INACTIVE",
      "username": "rezvan@672347"
    },
    {
      "id": 11,
      "name": "محمدپارسا طلوعی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGaOHr5qOwpKDQnnx3CtOikyklmxsm8kE7g&s",
      "status": "INACTIVE",
      "username": "rezvan@760636"
    },
    {
      "id": 12,
      "name": "طاها علی شاهی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
      "status": "UNKNOWN",
      "username": "rezvan@460450"
    },
    {
      "id": 13,
      "name": "محمدمهدي بهمنی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
      "status": "UNKNOWN",
      "username": "rezvan@441029"
    },
    {
      "id": 14,
      "name": "سبحان موسوی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHt2GDofV5sNOaTrLarqU3XmMpTNXxaw9dg&s",
      "status": "UNKNOWN",
      "username": "rezvan@540454"
    },
    {
      "id": 15,
      "name": "بنيامين صارمی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzNkB6IEkHhdblRg4qn2uXwF0ABf0kTb1GmVFuxTf1RZOqoPPVrMvoESACY3v1LikkWI&usqp=CAU",
      "status": "UNKNOWN",
      "username": "rezvan@908877"
    },
    {
      "id": 16,
      "name": "علي اکبر پور",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGaOHr5qOwpKDQnnx3CtOikyklmxsm8kE7g&s",
      "status": "UNKNOWN",
      "username": "rezvan@880108"
    },
    {
      "id": 17,
      "name": "آراد سمسار",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVigc6tzaVsp67IBqTwn6RzMVbZPaBYtmnw&s",
      "status": "INACTIVE",
      "username": "rezvan@148575"
    },
    {
      "id": 18,
      "name": "محمد مهدی میردامادی",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVigc6tzaVsp67IBqTwn6RzMVbZPaBYtmnw&s",
      "status": "UNKNOWN",
      "username": "rezvan@134501"
    }
  ]
  url1: string = ''; // Assuming url1 is a property in your component
  item:any;
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    this.simpleItems=['فعال','غیر فعال','تعیین نشده']
  }
  addUserDialog(content: any,e:any) {
    e.stopPropagation()
    this.formGroup = new FormGroup({
      id:new FormControl(Math.floor(Math.random() * 10000) + 1),
      name:new FormControl('',Validators.required),
      img:new FormControl(''),
      status:new FormControl('انتخاب وضعیت',Validators.required),
      username:new FormControl('',Validators.required),
    })
    this.modalService.open(content, { windowClass: 'dark-modal',centered:true }).result.then(
      (result) => {
        if (result === 'add') {
        }
      },
      (reason) => {
        this.resetForm()
        // اینجا کاربر روی دکمه لغو یا بیرون کلیک کرده
      }
    );
  }
  addFunc(modal:any){
    this.isSubmit = true
    if(this.formGroup.valid){
      this.InvoiceData.unshift({
        id:this.formGroup.value.id,
        name:this.formGroup.value.name,
        img:this.url1,
        status:this.convertStatus(this.formGroup.value.status),
        username:this.formGroup.value.username,
      })
      modal.close('add')
      this.resetForm()
    }else{

    }
  }
  convertStatus(status:any){
    return status=='فعال' ? 'ACTIVE' : status=='غیر فعال' ? 'INACTIVE' : 'UNKNOWN'
  }
  deleteFunc(InvoiceData: any) {
    let filterData = this.InvoiceData.filter((ele) => {
      return ele.id != InvoiceData.id;
    });
    this.InvoiceData = filterData;
  }
  resetForm(){
    this.formGroup.reset()
    this.isSubmit = false
    this.url1 = ''
  }
  
  deleteDialog(content: any,e:any,item:any) {
    this.item = item
    e.stopPropagation()
    this.modalService.open(content, { windowClass: 'dark-modal',centered:true }).result.then(
      (result) => {
        if (result === 'delete') {
          this.deleteFunc(item)
          // this.deleteItem.emit(this.data)
        }
      },
      (reason) => {
        // اینجا کاربر روی دکمه لغو یا بیرون کلیک کرده
      }
    );
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
  fetchUser(data:any){
    localStorage.setItem('user',JSON.stringify(data))
  }
}
