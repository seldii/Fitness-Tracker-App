import { Component, Injectable, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
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
  exercises: Exercise[];
  selectedExercise: Exercise;
  form: FormGroup;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
