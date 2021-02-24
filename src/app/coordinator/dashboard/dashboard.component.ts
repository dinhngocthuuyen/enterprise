import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    ) {
    }
  public pageTitle!: string;
  user: any;
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data,
      console.log("user " + this.user.role)
    })
  }
}
