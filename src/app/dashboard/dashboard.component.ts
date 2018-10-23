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

  public allCountryPlayerList: Array<object>;

  public categorizedUnderRole : Array<Object>;

  public userName: string;

  public userRole: string;

  constructor(public sharedService: SharedService) {
    
  }

  ngOnInit() {

    this.sharedService.fetchData('playerList_country.json').subscribe( res => {
      this.allCountryPlayerList = res;
    });
    
    this.sharedService.fetchData('playerList_role.json').subscribe( res => {
      this.categorizedUnderRole = res;
    });
   
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

  updateList(data) {
    this.selectedPlayer = data;
  }

}
