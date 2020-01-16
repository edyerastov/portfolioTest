import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { SearchService } from './services/search.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
