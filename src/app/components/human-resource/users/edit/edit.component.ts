import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConvertToPersianPipe } from '../../../../shared/pips/convert-to-persian.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule,
    NgbModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    ConvertToPersianPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  isSubmit = false;
  url1: string = '';
  data:any;
  simpleItems:any=[];
  formGroup!:FormGroup;
  selectedSimpleItem='انتخاب وضعیت';
  detail:any = {
    role:'مدیر فنی',
    location:'استان تهران، تهران، اسلامشهر',
    about:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت است.',
    phone:'۰۹۱۲۳۴۵۶۷۸۹',
    email:'info@info.com'
  }
  constructor(
    private router:Router
  ){}
  ngOnInit(): void {
    this.simpleItems=['فعال','غیر فعال','تعیین نشده']
    let storage:any = localStorage.getItem('user')
    let detail:any = localStorage.getItem('detail')
    if(storage){
      this.data = JSON.parse(storage)
    }else{
      this.router.navigate(['/hr/users'])
    }
    if(detail){
      this.detail = JSON.parse(detail)
    }
    this.formGroup = new FormGroup({
      id:new FormControl(this.data.id),
      name:new FormControl(this.data.name,Validators.required),
      img:new FormControl(''),
      status:new FormControl(this.data.status, Validators.required),
      username:new FormControl(this.data.username, Validators.required),
      phone:new FormControl(this.detail.phone, Validators.required),
      about:new FormControl(this.detail.about),
      email:new FormControl(this.detail.email, Validators.required),
      role:new FormControl(this.detail.role, Validators.required),
      location:new FormControl(this.detail.location, Validators.required),
    })
    this.url1 = this.data.img
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
  resetForm(){
    // this.formGroup.reset()
    // this.isSubmit = false
    this.url1 = ''
  }
}
