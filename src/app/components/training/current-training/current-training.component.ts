import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingModalComponent } from '../stop-training-modal/stop-training-modal.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
      this.timer = setInterval(() => {
        this.progress = this.progress + 5;
        if(this.progress >= 100) {
          clearInterval(this.timer)
        }        
      }, 1000)
  }

  onStop () {
    clearInterval(this.timer)
      this.dialog.open(StopTrainingModalComponent);
    }

}
