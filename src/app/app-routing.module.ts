import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { BriefcaseV2Component } from './briefcase-v2/briefcase-v2.component';


const routes: Routes = [
  /*{ 
    path: '',
    redirectTo: '/briefcase',
    pathMatch: 'full', 
  },*/

  { 
    path: '',
    redirectTo: '/briefcase-v2',
    pathMatch: 'full', 
  },

  {
    path: 'briefcase',
    component: BriefcaseComponent,
  },

  {
    path: 'briefcase-v2',
    component: BriefcaseV2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }