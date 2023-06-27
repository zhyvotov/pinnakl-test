import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-selection-board',
  templateUrl: './info-selection-board.component.html',
  styleUrls: ['./info-selection-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoSelectionBoardComponent {

  @Input() selectedCountriesCount!: number;
  @Input() totalCountries!: number;
  @Input() selectedCitiesCount!: number;
  @Input() totalCities!: number;

}
