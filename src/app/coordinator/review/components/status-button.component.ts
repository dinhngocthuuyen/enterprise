import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'status-button',
  template: `

  <ng-template [ngIf]="value == false" [ngIfElse]="passButton">
  <button nbButton status="warning"readonly>Failed</button>
  </ng-template>
  <ng-template #passButton >
  <button nbButton status="success" readonly>Passed</button>
  <ng-template>
  `,
})
export class StatusButtonComponent implements OnInit {
  @Input() value: any;

  checked!: boolean;

  constructor() { }

  ngOnInit() {
    this.checked = this.value;
  }

}
