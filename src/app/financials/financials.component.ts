import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  @Input()
  data;

  constructor() { }

  ngOnInit() {
  }

}
