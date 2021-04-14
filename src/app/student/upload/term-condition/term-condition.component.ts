import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.component.html',
  styleUrls: ['./term-condition.component.scss']
})
export class TermConditionComponent implements OnInit {

  constructor(protected ref: NbDialogRef<TermConditionComponent>) {}

  ngOnInit(): void {
  }

  cancel() {
    this.ref.close()
  }
}
