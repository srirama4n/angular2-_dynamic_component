import { Component } from '@angular/core';
import {FinancialsComponent} from './financials/financials.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  financialsComponent = {
    name: 'FinancialsComponent',
    data: {
      type: 'Industry'
    }
  };
  personComponent = {
    name: 'PersonComponent',
    data: {
      personName: 'Sri Rama',
      age: '25',
      gender: 'Male'
    }
  };
}
