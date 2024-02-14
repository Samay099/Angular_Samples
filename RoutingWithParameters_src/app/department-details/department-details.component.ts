import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h2>Thank for selecting the department</h2>
    <h3>You selected Department with ID = {{departmentId}}</h3>
    <h4>{{detailId.detail}}</h4>  
    <router-outlet></router-outlet>
    
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId : any;
  public detailId : any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  departments = [
    {'id' : 1, 'detail': 'Dev Details'},
    {'id' : 2, 'detail': 'Testing Details'},
    {'id' : 3, 'detail': 'QA Details'},
    {'id' : 4, 'detail': 'Support Details'},
    {'id' : 5, 'detail': 'Back Office Details'},
  ]

  ngOnInit() 
  {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;
      this.detailId = this.departments[id-1];

    });
  }

  gotoDepartments() 
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
}
