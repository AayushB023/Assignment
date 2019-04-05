import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'; 
import { LoginService } from 'app/login.service';
import { LoginCheckService } from 'app/login-check.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  lForm: FormGroup;
  load:boolean=true;
  post: any;
  description: string = '';
  emailad: string= '';
  titleAlert:string = 'Atleast Enter Something';

  // loginid = {
  //   "emailad": "aayush.bhargava@gmail.com",
  //   "pass": "123456"
  // };
  constructor(private fb: FormBuilder, private login: LoginService, private loginc: LoginCheckService, private router: Router){
   
    this.lForm = fb.group({
      'password': [null, Validators.required],
      'emailad': [null, Validators.email],
      'validate' : ''
    });
  }
  
  // loginCheck = function(){
    
  // }
  ngOnInit(){
    // this.lForm.get('validate').valueChanges.subscribe(
    //   (validate) => {
    //     if (validate == '1'){
    //       this.lForm.get('emailad').setValidators([Validators.required, Validators.minLength(5)]);
    //       this.titleAlert = "Atleast Enter Something";
    //     }
    //     else{
    //       this.lForm.get('emailad').setValidators(Validators.required);
    //     }
    //     this.lForm.get('emailad').updateValueAndValidity();
    //   }
    // )
  }
  onSubmit = function(){// function for login the user
    this.loginc.checkUser(this.lForm.value).subscribe(response => { 
        this.getData = response;
        if ((Object.keys(response).length)==0)
        { //faliure
          alert("Wrong Credentials");
        }
        else
        {  //success
          localStorage.setItem("user_info",JSON.stringify(response));
          localStorage.setItem("user_cred","true");
          this.router.navigate(['/navbar/profile']);
          
        }
      }
    // this.loginid.emailad = this.lForm.get('emailid').value;
    // this.loginid.pass = this.lForm.get('password').value;
    // this.loginc.checkUser(this.loginid).subscribe(result => {
      
    );
  

}
}
