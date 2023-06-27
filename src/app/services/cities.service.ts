import { Injectable } from '@angular/core';

import { CitiesApiService } from './cities-api.service';
import { BehaviorSubject, combineLatest, map, Observable, share, shareReplay } from 'rxjs';
import { ICity } from '../shared';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities$: Observable<ICity[]>;
  #citiesSubject$ = new BehaviorSubject<ICity[]>([]);

  cityNames$: Observable<string[]>;
  #cityNamesSubject$ = new BehaviorSubject<string[]>([]);

  cityDictionary$: Observable<Record<string, string>>;
  #cityDictionarySubject = new BehaviorSubject<Record<string, string>>({});

  filteredCities$: Observable<string[]>;
  #filteredCitiesSubject$ = new BehaviorSubject<string[]>([]);

  selectedCities$: Observable<string[]>;
  #selectedCitiesSubject$ = new BehaviorSubject<string[]>([]);

  countries$: Observable<string[]>;
  #countriesSubject$ = new BehaviorSubject<string[]>([]);

  selectedCountries$: Observable<string[]>;
  #selectedCountriesSubject$ = new BehaviorSubject<string[]>([]);

  constructor(
    private citiesApiService: CitiesApiService
  ) {
    this.cities$ = this.#citiesSubject$.asObservable();
    this.selectedCities$ = this.#selectedCitiesSubject$.asObservable();
    this.cityNames$ = this.#cityNamesSubject$.asObservable();
    this.cityDictionary$ = this.#cityDictionarySubject.asObservable();
    this.filteredCities$ = this.#filteredCitiesSubject$.asObservable();
    this.countries$ = this.#countriesSubject$.asObservable();
    this.selectedCountries$ = this.#selectedCountriesSubject$.asObservable();
    this.filteredCities$ = this._getFilteredCities();
  }

  fetchCities(): Observable<ICity[]> {
    const result = this.citiesApiService.fetchCities().pipe(share());

    result.subscribe((data: ICity[]) => {
      const countries = this._getUniqueCountries(data);
      const cityDictionary = this._getCityDictionary(data);

      this.#citiesSubject$.next(data);
      this.#cityNamesSubject$.next(data.map((city) => city.name));
      this.#countriesSubject$.next(countries);
      this.#cityDictionarySubject.next(cityDictionary);
    });

    return result;
  }

  selectCities(data: string[]): void {
    this.#selectedCitiesSubject$.next(data);
  }

  selectCountries(data: string[]): void {
    this.#selectedCountriesSubject$.next(data);
  }

  private _getUniqueCountries(cities: ICity[]): string[] {
    return [...new Set(cities.map((item: ICity) => item.country))];
  }

  private _getFilteredCities(): Observable<string[]> {
    return combineLatest([
      this.cities$,
      this.selectedCountries$
    ]).pipe(
      map(([cities, selectedCountries]) => {
        return cities
          .filter((city: ICity) => selectedCountries.includes(city.country))
          .map((city) => city.name).sort((a, b) => a.localeCompare(b));
      }),
      shareReplay(1)
    )
  }

  private _getCityDictionary(data: ICity[]): Record<string, string> {
    return data.reduce((acc: Record<string, string>, city: ICity) => {
      acc[city.name] = city.country;
      return acc;
    }, {});
  }

}
