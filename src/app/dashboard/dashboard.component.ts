import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../login/login.component.css']
})
export class DashboardComponent implements OnInit {

  public addPlayer:boolean;

  public playerForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  togglePlayer(data: boolean): void {
    this.addPlayer = data;
    if(data){
      this.initializeFormGroup();
    }
  }

    /**
   * This method is used to initialize forms in reactive method.
   */
  initializeFormGroup() {
    this.playerForm = new FormGroup({
        playerName : new FormControl( '', {
          validators : Validators.required,
        }),
        playerCountry : new FormControl('', {
          validators:Validators.required,
        }),
        playerRole : new FormControl('', {
          validators:Validators.required,
        })
      });
  }

}
