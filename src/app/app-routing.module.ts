import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInputComponent } from './components/dashboard-input/dashboard-input.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmbededComponent } from './components/embeded/embeded.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WelcomeMenuComponent } from './components/welcome-menu/welcome-menu.component';

const routes: Routes = [
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'welcome', component: WelcomeMenuComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard-input', component: DashboardInputComponent},
  {path: 'embeded-section', component: EmbededComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
