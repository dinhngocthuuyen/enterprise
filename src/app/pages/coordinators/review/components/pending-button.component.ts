import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'status-button',
  template: `

  <ng-template [ngIf]="value == false" [ngIfElse]="passbutton">
  <button nbButton status="warning"readonly>Pending..</button>
  </ng-template>
  <ng-template #passbutton>
  <button nbButton status="success" readonly>Approved</button>
  <ng-template>
  `,
})
export class PendingButtonComponent implements OnInit {
  @Input() value: any;

  checked!: boolean;

  constructor() { }

  ngOnInit() {
    this.checked = this.value;
  }

}
