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
  @Input() value: any;
  userId!: string;
  public pageTitle!: string;

  ngOnInit(): void {
    this.userId = this.value
    // this.userId = this.route.snapshot.params.id;
    // console.log("user id: " + this.userId)

    this.pageTitle = this.route.snapshot.data['title'];
    console.log("page tile " + this.pageTitle)
  }
}
