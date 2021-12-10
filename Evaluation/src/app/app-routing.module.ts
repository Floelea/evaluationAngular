import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeStatsComponent } from './liste-stats/liste-stats.component';
import { CreerStatsComponent } from './creer-stats/creer-stats.component';

const routes: Routes = [
  { path: 'liste-stats.component', component: ListeStatsComponent },
  { path: 'creer-stats.component', component: CreerStatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
