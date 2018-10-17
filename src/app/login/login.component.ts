import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private router: Router) { }

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
    console.log(this.loginForm.value);
    this.router.navigateByUrl('dashboard');
  }

}
