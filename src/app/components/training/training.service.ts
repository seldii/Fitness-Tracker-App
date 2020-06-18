import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';

import { Exercise } from './exercise.model';
import { Subscription } from 'rxjs';
import { UIServices } from 'src/app/shared/UIServices.service';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  pastExercisesChanged = new Subject<Exercise[]>();
  private availableExercises: Exercise[];
  private runningExercise: Exercise;
  private fbSubscriptions: Subscription[] = [];

  constructor(private db: AngularFirestore, private uiService: UIServices) {}

  fetchAvailableExercises() {
    this.uiService.loadingStateChanged.next(true);
    this.fbSubscriptions.push(
      this.db
        .collection('availableExercises')
        .snapshotChanges()
        .pipe(
          map(docArray => {
            return docArray.map(doc => {
              return {
                id: doc.payload.doc.id,
                ...(doc.payload.doc.data() as Exercise)
              };
            });
          })
        )
        .subscribe((exercises: Exercise[]) => {
          this.uiService.loadingStateChanged.next(false);
          this.availableExercises = exercises;
          this.exercisesChanged.next([...this.availableExercises]);
        })
    );
  }

  startExercise(selectedId: string) {
    //this.db.doc('availableExercises/' + selectedId).update({lastselected: new Date()})
    this.runningExercise = this.availableExercises.find(
      e => e.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningTraining() {
    return { ...this.runningExercise };
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  fetchAllExercises() {
    this.fbSubscriptions.push(
      this.db
        .collection('pastExercises')
        .valueChanges()
        .subscribe((exercises: Exercise[]) => {
          this.pastExercisesChanged.next(exercises);
        })
    );
  }

  cancelSubscriptions() {
    this.fbSubscriptions.forEach(s => s.unsubscribe());
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('pastExercises').add(exercise);
  }
}
