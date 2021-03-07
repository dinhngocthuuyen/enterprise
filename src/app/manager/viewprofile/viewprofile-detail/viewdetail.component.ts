import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { __param } from 'tslib';
import {ViewDetail} from '../../service/manager.service';


@Component({
  selector: 'viewdetail',
  templateUrl: './viewdetail.component.html',
  
})
export class viewdetailComponent implements OnInit {
  router: any;

  //constructor() { }
  constructor(private route: ActivatedRoute, private ViewDetail : ViewDetail) { }

  user: any;
  useId:any;
  ngOnInit(): void {
    // this.useId = this.route.snapshot.params.id;

    this.route.params.subscribe((params: Params) => {
      this.ViewDetail.getviewdetail(params.id).subscribe((user: any) => {
        console.log(user);
        this.user = user;
      })
    })
  }
  // onUserRowSelect(event){
  //   this.router.navigate(['/' + event.data._id]);
  // }

}
