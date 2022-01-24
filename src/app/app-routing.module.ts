import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BriefcaseComponent } from './briefcase/briefcase.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/briefcase',
    pathMatch: 'full', 
  },

  {
    path: 'briefcase',
    component: BriefcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }