import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UneStatComponent } from './une-stat/une-stat.component';
import { ListeStatsComponent } from './liste-stats/liste-stats.component';
import { CreerStatsComponent } from './creer-stats/creer-stats.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UneStatComponent,
    ListeStatsComponent,
    CreerStatsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
