import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
  import { from } from 'rxjs';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

// import { RegistrationValidator } from "app/public/register/register.validate";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  rForm: FormGroup;
  load:boolean=true;
  post: any;
  description: string = '';
  name: string= '';
  titleAlert:string = 'This is required';

  constructor(private fb: FormBuilder, private registerUserService: RegisterService, private route: Router){

    this.rForm = fb.group(
    {
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'password': [null, Validators.required],
      'repassword': [null, Validators.required],
      'emailad': [null, Validators.required],
      'phone': [null, Validators.required],
      'medical': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      'validate' : ''
    }
    );
    
  }

  ngOnItit(){

  }
  registerUser =  function (user){ //registering user onto the db 
    console.log(user);
    this.registerUserService.registerNewUser(user).subscribe(

      
      );
      this.route.navigate(["login"]);
      
  }

}
