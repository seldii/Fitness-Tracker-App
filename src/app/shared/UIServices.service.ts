import { Subject } from 'rxjs';

export class UIServices {
  loadingStateChanged = new Subject<boolean>();
}
