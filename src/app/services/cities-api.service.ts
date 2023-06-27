import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { ICity } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class CitiesApiService {

  private readonly FETCH_API_URL = 'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json';

  constructor(
    private http: HttpClient
  ) { }

  fetchCities(): Observable<ICity[]> {
    return this.http.get(this.FETCH_API_URL).pipe(
      map(data => (data as ICity[]).sort((a, b) => a.country.localeCompare(b.country))
    ));
  }

}
