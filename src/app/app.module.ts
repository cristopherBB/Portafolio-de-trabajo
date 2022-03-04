import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BriefcaseComponent } from './briefcase/briefcase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

// Angular material
import {MatButtonModule} from '@angular/material/button';
import { BriefcaseV2Component } from './briefcase-v2/briefcase-v2.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BriefcaseComponent,
    NavbarComponent,
    BriefcaseV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
