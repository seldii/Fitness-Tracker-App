import { Component, Injectable, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Injectable()

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  @Output() startTraining = new EventEmitter<void>();
  exercises: Exercise[];
  selectedExercise: Exercise;
  form: FormGroup;
  exerciseSubscription: Subscription;

  constructor(
    private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => {
     this.exercises = exercises
    });
    this.trainingService.fetchAvailableExercises()
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe()
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
