import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';



@NgModule({
  declarations: [LoginComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
