import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CountryMultiSelectComponent } from './components/country-multi-select/country-multi-select.component';
import { CityMultiSelectComponent } from './components/city-multi-select/city-multi-select.component';
import { InfoSelectionBoardComponent } from './components/info-selection-board/info-selection-board.component';
import { InfoBoardContainerComponent } from './components/info-board-container/info-board-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountryMultiSelectComponent,
    CityMultiSelectComponent,
    InfoSelectionBoardComponent,
    InfoBoardContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
