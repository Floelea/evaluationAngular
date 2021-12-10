import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UneStatComponent } from './une-stat/une-stat.component';
import { ListeStatsComponent } from './liste-stats/liste-stats.component';
import { CreerStatsComponent } from './creer-stats/creer-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    UneStatComponent,
    ListeStatsComponent,
    CreerStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
