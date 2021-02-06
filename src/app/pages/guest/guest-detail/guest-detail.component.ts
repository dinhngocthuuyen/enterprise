import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { __param } from 'tslib';
import { GuestComponent } from '../guest.component';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.scss']
})
export class GuestDetailComponent implements OnInit {

  //constructor() { }
  constructor(private route: ActivatedRoute, private GuestService: GuestService) { }

  post: any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.GuestService.getPostDetail(params.id).subscribe((post: any) => {
        console.log(post);
        this.post = post;
      })
    })
  }

}
