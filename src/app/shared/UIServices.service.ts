import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export class UIServices {
  loadingStateChanged = new Subject<boolean>();

  constructor(private snackBar: MatSnackBar) {}

  showSnackBar(message, action, duration) {
    this.snackBar.open(message, action, {
      duration
    });
  }
}
