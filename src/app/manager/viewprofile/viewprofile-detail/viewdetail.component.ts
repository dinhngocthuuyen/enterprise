import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { __param } from 'tslib';
import {ViewDetail} from "../../service/manager.service"
@Component({
  selector: 'viewdetail',
  templateUrl: './viewdetail.component.html',

})
export class viewdetailComponent implements OnInit {

  //constructor() { }
  constructor(
    private route: ActivatedRoute,
    private ViewProfile : ViewDetail,
    private router: Router,
    ) { }

  user: any;
  userId:any;
  ngOnInit(): void {
    // this.useId = this.route.snapshot.params.id;

    this.route.params.subscribe((params: Params) => {
      this.ViewProfile.getviewdetail(params.id).subscribe((user: any) => {
        console.log(user);
        this.user = user;
      })
    })
    this.userId = localStorage.getItem('userId');

  }
  // onUserRowSelect(event){
  //   this.router.navigate(['/' + event.data._id]);
  // }
  back() {
    this.router.navigate([ 'manager/'+this.userId +'/viewprofile'])
  }

}
