import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormComponent } from './components/form/form.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
  ]
})
export class LoginModule { }
