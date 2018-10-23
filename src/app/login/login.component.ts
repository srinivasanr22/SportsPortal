import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
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

  public showMsg: boolean;

  public userName = localStorage.getItem('userName');

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
    let isDataFound = [];
    let logginedData = this.loginForm.value;
    this.sharedService.fetchData('authentication.json').subscribe( response => {
       isDataFound = response.authenticatedUsers.filter( data =>
        logginedData.userName === data.userName && logginedData.password === data.password
       );
       // if found redirect to dashboard page
        if(isDataFound.length > 0) {
          localStorage.setItem("userName", isDataFound[0].userName);
          localStorage.setItem("userRole", isDataFound[0].role);
          this.router.navigateByUrl('dashboard');
        } else {
          // show error msg.
          localStorage.setItem("userName", '');
          localStorage.setItem("userRole", '');
          this.showMsg = true;
          let msg = document.getElementById("toastMsg");
          msg.className = "show";
          setTimeout(() => (msg.className = msg.className.replace("show", "")), 5000);
        }
    });  
  }

}
