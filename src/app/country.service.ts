import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { COUNTRIES } from './mock-countries';
import {Country} from './country';

@Injectable()
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }

}

