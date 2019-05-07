import { Component } from '@angular/core';
import {BaseAppComponent} from '../../../../src/app/base-app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseAppComponent{
  title = 'EOSC';
}
