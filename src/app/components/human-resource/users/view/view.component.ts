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
  constructor(
    private router:Router
  ){}
  ngOnInit(): void {
    let storage:any = localStorage.getItem('user')
    if(storage){
      this.data = JSON.parse(storage)
    }else{
      this.router.navigate(['/hr/users'])
    }
  }
}
