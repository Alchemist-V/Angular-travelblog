import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { COUNTRIES } from './mock-countries';
import {Country} from './country';

import {LoggerService} from './logger.service';

@Injectable()
export class CountryService {

  // constructor(@Optional() private loggerService: LoggerService) { }
  constructor(private loggerService: LoggerService) { }

  getCountries(): Observable<Country[]> {
    this.loggerService.log("Getting list of countries..");
    return of(COUNTRIES);
  }

  getCountryWithId(id): Observable<Country> {
    this.loggerService.log("Getting country with id countries..");
    return of(COUNTRIES.find(country => country.id === id));
  }

  // getCountries(): Observable<Country[]> {
  //   if (this.loggerService) {
  //      this.loggerService.log("Getting list of countries..");
  //   }
  //   return of(COUNTRIES);
  // }

}

