import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-selection-board',
  templateUrl: './info-selection-board.component.html',
  styleUrls: ['./info-selection-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoSelectionBoardComponent {

  @Input() selectedCountriesCount!: number | null;
  @Input() totalCountries!: number | null;
  @Input() selectedCitiesCount!: number | null;
  @Input() totalCities!: number | null;

}
