import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services';

@Component({
  selector: 'app-info-board-container',
  templateUrl: './info-board-container.component.html',
  styleUrls: ['./info-board-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoBoardContainerComponent implements OnInit{

  constructor(
    public citiesService: CitiesService
  ) {
  }

  ngOnInit(): void {
    this.citiesService.fetchCities();
  }

  onCitiesSelect(data: string[]): void {
    this.citiesService.selectCities(data);
  }

  onCountriesSelect(data: string[]): void {
    this.citiesService.selectCountries(data);
  }

}
