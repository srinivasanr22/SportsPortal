import { Component, OnInit } from '@angular/core';
import { FormGroup,
         FormControl,
         Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ SharedService ]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.initializeFormGroup();
  }

  /**
   * This method is used to initialize forms in reactive method.
   */
  initializeFormGroup() {
    this.loginForm = new FormGroup({
        userName : new FormControl( '', {
          validators : Validators.required,
        }),
        password : new FormControl('', {
          validators:Validators.required,
        })
      });
  }

 /** 
   * On submit of reactive form this method will invoke 
   * to validate the login credentials.
   */
  verifyUser() {
    let isDataFound = "";
    this.sharedService.fetchData('authentication.json').subscribe( response => {
       console.log(response);
       isDataFound = response.filter(function(data){
           return this.loginForm.value.userName === data.userName && this.loginForm.value.password === data.password;
       });
       // if found redirect to dashboard page
        if(isDataFound.length > 0) {
          this.router.navigateByUrl('dashboard');
        } else {
          alert("Enter correct username password.");
        }
    });  
  }

}
