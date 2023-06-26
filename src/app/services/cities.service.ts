import { Injectable } from '@angular/core';

import { CitiesApiService } from './cities-api.service';
import { BehaviorSubject, Observable, share } from 'rxjs';
import { ICity } from '../shared';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities$: Observable<ICity[]>;
  #citiesSubject$ = new BehaviorSubject<ICity[]>([]);

  totalCities$: Observable<number>;
  #totalCitiesSubject$ = new BehaviorSubject<number>(0);

  countries$: Observable<string[]>;
  #countriesSubject$ = new BehaviorSubject<string[]>([]);

  totalCountries$: Observable<number>;
  #totalCountriesSubject$ = new BehaviorSubject<number>(0);

  constructor(
    private citiesApiService: CitiesApiService
  ) {
    this.cities$ = this.#citiesSubject$.asObservable();
    this.totalCities$ = this.#totalCitiesSubject$.asObservable();
    this.countries$ = this.#countriesSubject$.asObservable();
    this.totalCountries$ = this.#totalCountriesSubject$.asObservable();

    this._initObservables();
  }

  fetchCities(): Observable<ICity[]> {
    const result = this.citiesApiService.fetchCities().pipe(share());

    result.subscribe((data: ICity[]) => {
      const countries = this._getUniqueCountries(data);

      this.#citiesSubject$.next(data);
      this.#totalCitiesSubject$.next(data.length);
      this.#countriesSubject$.next(countries);
      this.#totalCountriesSubject$.next(countries.length);
    });

    return result;
  }

  private _initObservables(): void {

  }

  private _getUniqueCountries(cities: ICity[]): string[] {
    return [...new Set(cities.map((item: ICity) => item.country))];
  }

}
