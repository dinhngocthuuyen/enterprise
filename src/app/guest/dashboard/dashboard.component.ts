import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoorService } from 'src/app/coordinator/services/review.service';
import { LocalDataSource } from 'ng2-smart-table';
import { GuestService } from '../guest.service';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faculty: any;
  file!: string;
  status: any;
  files = [];
  conId!: string;
  contributions: any;
  facId: any;
  topicId: any;
  source!: LocalDataSource;
  approved!: LocalDataSource;
  numofcons: any;
  percent!: number;
  consbyMonth!: number;
  months = [1,2,3,4, 5, 6, 7, 8,9,10,11,12];
  monthValue: any[] =[];
  vals = [];
  i!: number;
  length!: number;
  constructor( private facultyService: GuestService,     private reviewService: CoorService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.facId = localStorage.getItem('facultyId');
    this.topicId = this.route.snapshot.params.id;
    this.facultyService.getFaculty(this.facId).subscribe((faculty: any) =>{
      this.faculty = faculty
    })
    this.facultyService.getContributions(this.facId).subscribe((cons: any) =>{
      this.numofcons = cons.length;
      console.log("numofcons", this.numofcons)
      this.facultyService.getAllCons().subscribe((allcon: any)=>{
        this.percent = Math.round(cons.length * 100 / allcon.length)
      })
    },
    );
    for (this.i of this.months){
      this.facultyService.getConsByMonth(this.i).subscribe((cons: any) =>{
        this.consbyMonth = cons.length;
        // console.log("cons month", this.consbyMonth);
        this.length = this.monthValue.push(this.consbyMonth);
        // this.vals = this.monthValue;
        if (this.length == 12) {
          var myChart = new Chart("myChart", {
            type: 'bar',
            data: {
              labels: ['Jan','Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [{
                label: 'Contributions',
                data: this.monthValue as any[],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(90, 99, 132, 0.2)',
                  'rgba(23, 100, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(123, 162, 235, 0.2)',
                  'rgba(69, 162, 135, 0.2)',
                  'rgba(285, 62, 135, 0.2)',
                  'rgba(85, 62, 35, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(90, 99, 132, 1)',
                  'rgba(23, 100, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(123, 162, 235, 1)',
                  'rgba(69, 162, 135, 1)',
                  'rgba(285, 62, 135, 1)',
                  'rgba(85, 62, 35, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      })
    }
  }
}
