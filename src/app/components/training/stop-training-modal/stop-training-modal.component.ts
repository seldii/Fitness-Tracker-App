import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stop-training-modal',
  template: ` <div class="stop-training-modal" fxLayout="column" fxLayoutAlign="center center">
                <h1>Are you sure?</h1>
                  <mat-dialog-content>You already got 
                  <mat-chip color="accent">{{ passedData.progress }}</mat-chip>
                </mat-dialog-content>
                <mat-dialog-actions>
                  <button mat-button color="primary" [mat-dialog-close]="true">Yes</button>
                  <button mat-button color="accent" [mat-dialog-close]="false">No</button>
                </mat-dialog-actions>
              </div>`,
  styleUrls: ['./stop-training-modal.component.css']
})
export class StopTrainingModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }

  ngOnInit(): void {
  }

}
