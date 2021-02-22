import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})

  export class FacultyComponent implements OnInit{
    // faculties$: Observable<Faculty[]>;
    // @Input() faculty!: Faculty;

    enteredValue =  '';
    newPost = 'No Content';
    // onAddPost(postInput: HTMLTextAreaElement){
    //   // console.dir(postInput)
    //   // this.newPost= 'Hello!';

    //   // this.newPost= postInput.value;
    //   this.newPost = this.enteredValue;
    // }
    onAddPost(){
      this.newPost = this.enteredValue;
    }

    constructor(
    ){

    }
    ngOnInit() {
  }
  }
