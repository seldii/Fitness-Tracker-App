import {
  Component,
  Injectable,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { UIServices } from 'src/app/shared/UIServices.service';

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
  isLoading: boolean;
  exerciseSubscription: Subscription;
  loadingSubscription: Subscription;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIServices
  ) {}

  ngOnInit() {
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
      isLoading => {
        this.isLoading = isLoading;
      }
    );
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      exercises => {
        this.exercises = exercises;
      }
    );
    this.trainingService.fetchAvailableExercises();
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
