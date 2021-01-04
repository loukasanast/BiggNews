import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'entertainment', component: EntertainmentComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'health', component: HealthComponent},
  {path: 'science', component: ScienceComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'technology', component: TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
