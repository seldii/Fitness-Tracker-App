import { Component, Injectable, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Injectable()

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() startTraining = new EventEmitter<void>();
  exercises$: Observable<any>;
  selectedExercise: Exercise;
  form: FormGroup;

  constructor(
    private trainingService: TrainingService, 
    private db: AngularFirestore) { }

  ngOnInit(): void {
    this.exercises$ = this.db.collection('availableExercises').valueChanges()
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
