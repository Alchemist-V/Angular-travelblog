import { Component, OnInit } from '@angular/core';
import {COUNTRIES} from './../mock-countries';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.css']
})
export class IndexListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countries = COUNTRIES;

}
