import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhComponent } from './ph/ph.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'ph',
  },
  {
    path: 'ph',
    component: PhComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
