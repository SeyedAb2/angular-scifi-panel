import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { fade } from '../../../../shared/animation/animation';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
  animations:[fade]

})
export class ViewComponent implements OnInit{
  data:any;
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
  }
}
