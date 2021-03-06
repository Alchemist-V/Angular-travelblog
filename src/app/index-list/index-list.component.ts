import { Component, OnInit } from '@angular/core';
import {COUNTRIES} from './../mock-countries';
import {Country} from './../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.css']
})
export class IndexListComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries);
  }

  countries: Country[];

  /**
   * Initiates country add flow.
   * @param name 
   */
  add(name: String): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.countryService.addCountry({name} as Country)
    .subscribe(country => {
      this.countries.push(country);
    })
  }

  // selectedCountry: Country;

  // // on select action
  // onSelect (country: Country) {
  //   // assign clicked country as selected country.
  //   this.selectedCountry = country;
  // }

}
