import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-training-modal',
  template: `<h1>Are you sure?</h1>
                <mat-dialog-actions>
                  <button mat-button [mat-dialog-close]="true">Yes</button>
                  <button mat-button [mat-dialog-close]="false">No</button>
                  <button></button>
                </mat-dialog-actions>`,
  styleUrls: ['./stop-training-modal.component.css']
})
export class StopTrainingModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
