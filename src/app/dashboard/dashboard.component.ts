import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../login/login.component.css'],
  providers: [ SharedService ] 
})
export class DashboardComponent implements OnInit {

  public addPlayer:boolean;

  public playerForm: FormGroup;

  public selectedPlayer = {"name":'', "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvP5FbZKDEArvNIEZHFCvHshQ5rKVt0vBbUgXzD9D_VUtQ-or",
   "country":'', "role":''};

  public allCountryPlayerList$: Array<object>;

  public categorizedUnderRole$ : Array<Object>;

  public userName: string;

  public userRole: string;

  constructor(public sharedService: SharedService) {
    
  }

  ngOnInit() {
    
    // create Async
    this.allCountryPlayerList$ = this.sharedService.fetchData('playerList_country.json');
    this.categorizedUnderRole$ = this.sharedService.fetchData('playerList_role.json');
   
    this.userName = localStorage.getItem("userName");
    this.userRole = localStorage.getItem("userRole");
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
        name : new FormControl( '', {
          validators : Validators.required,
        }),
        country : new FormControl('', {
          validators:Validators.required,
        }),
        role : new FormControl('', {
          validators:Validators.required,
        }),
        imgSrc: new FormControl('', {
          validators:Validators.required,
        })
      });
  }

  updateList(data) {
    this.selectedPlayer = data;
  }

  addNewPlayer() {
    console.log(this.playerForm.value);
    this.allCountryPlayerList$.push(this.playerForm.value);
  }

}
