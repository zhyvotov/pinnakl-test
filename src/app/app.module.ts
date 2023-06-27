import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InfoSelectionBoardComponent } from './components/info-selection-board/info-selection-board.component';
import { InfoBoardContainerComponent } from './components/info-board-container/info-board-container.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    InfoSelectionBoardComponent,
    InfoBoardContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
