import { Component , OnInit} from '@angular/core';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'fitness-tracker';

  constructor(private authServices: AuthService){}

  ngOnInit() {
    this.authServices.initAuthListener()
  }

}
