import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { CoorService } from '../../services/review.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  constructor(protected ref: NbDialogRef<CommentComponent>) { }

  ngOnInit(): void {
  }

  cancel() {
    this.ref.close();
  }

  submit(cmt: string) {
    // this.reviewService.postComment(this.conId, cmt).subscribe();
    this.ref.close(cmt);
  }
}
