import { Injectable } from '@angular/core';
import { COUNTRIES } from './mock-countries';
import {Country} from './country';

@Injectable()
export class CountryService {

  constructor() { }

  getCountries(): Country[] {
    return COUNTRIES;
  }

}
