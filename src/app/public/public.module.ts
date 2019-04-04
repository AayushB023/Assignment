import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginCheckService } from 'app/login-check.service';
import { PublicRoutingModule } from './public-routing.module';
import { ConfirmPasswordDirective } from './register/confirm-equal-validator.directive';




@NgModule({
  declarations: [LoginComponent, RegisterComponent,ConfirmPasswordDirective],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    PublicRoutingModule
    
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [LoginCheckService]
})
export class PublicModule {}
