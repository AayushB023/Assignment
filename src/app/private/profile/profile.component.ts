import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  pForm: FormGroup;
  load:boolean=true;
  post: any;
  description: string = '';
  name: string= '';
  titleAlert:string = 'This is required';
  
  
  constructor(private fb: FormBuilder, private route: Router, private update: ProfileService){
    
    
    this.pForm = fb.group(
    { //fetching data of the logged in user form the localStorage
      'firstname': [JSON.parse(localStorage.getItem("user_info"))[0].firstname, Validators.required],
      'emailad': [JSON.parse(localStorage.getItem("user_info"))[0].emailad, Validators.required],
      'phone': [JSON.parse(localStorage.getItem("user_info"))[0].phone, Validators.required],
      'medical': [JSON.parse(localStorage.getItem("user_info"))[0].medical, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      'address': [JSON.parse(localStorage.getItem("user_info"))[0].address, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
      'validate' : '',
      'id': [JSON.parse(localStorage.getItem("user_info"))[0].id],
      'lastname': [JSON.parse(localStorage.getItem("user_info"))[0].lastname],
      'password' : [JSON.parse(localStorage.getItem("user_info"))[0].password]

    }
    );
  }
 
  ngOnInit() {
    

  }
  
  updateUser =  function (user){ //sending updated data of the user
    console.log(user);
    this.update.updateOldUser(JSON.parse(localStorage.getItem("user_info"))[0].id,user).subscribe(
      (response) => {console.log(response),
      this.getData = response,
      (error) => console.log(error)
      
      });

      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.update.loginUser(this.pForm.value).subscribe(response => { 
          this.getDat = response.id;

            let temp= [this.pForm.value] // fetching new gata of the user form the db & saving it in the LocalStorage
            localStorage.setItem("user_info",JSON.stringify(temp));
        }
      // this.loginid.emailad = this.lForm.get('emailid').value;
      // this.loginid.pass = this.lForm.get('password').value;
      // this.loginc.checkUser(this.loginid).subscribe(result => {
        
      );
      location.reload();
   }, 1000);
      
    
    //this.route.navigate(["/navbar/faq"]);
  
  }

}
