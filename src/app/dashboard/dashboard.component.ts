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

  public displayMsg: string;

  public selectedPlayer = {"name":'', "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvP5FbZKDEArvNIEZHFCvHshQ5rKVt0vBbUgXzD9D_VUtQ-or",
   "country":'', "role":'', "id":''};

  public allCountryPlayerList: Array<object>;

  public userName: string;

  public userRole: string;

  public formTitle: string;

  constructor(public sharedService: SharedService) {
    
  }

  ngOnInit() {
    // get inital data.
    this.sharedService.fetchData('playerList_country.json').subscribe(res => this.allCountryPlayerList = res);
    this.userName = localStorage.getItem("userName");
    this.userRole = localStorage.getItem("userRole");
    this.togglePlayer(false);
  }

  togglePlayer(data: boolean): void {
    this.formTitle = 'Add New Player';
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
        }),
        id: new FormControl('')
      });
  }

  /** 
   * This method will enable the player details in editable form.
  */
  editPlayer() {
    this.togglePlayer(true);
    this.formTitle = 'Edit Player';
    this.playerForm.setValue(this.selectedPlayer);
  }

  /**
   * This function will receive the emitted event data.
   * @param data 
   */
  updateList(data) {
    this.selectedPlayer = data;
  }


  /** 
   * This method used to invoke sharedservice to add new data.
  */
  addNewPlayer() {
     if(this.formTitle !== 'Edit Player') {
        this.sharedService.addData(this.playerForm.value).subscribe(res => {
          this.ngOnInit();
          this.selectedPlayer = this.playerForm.value;
          this.showMessage('Player Added Successfully..!');
        });
     } else {
        this.updatePlayer();
     }   
  }


  /** 
   * This method used to update the exisiting player details.
  */
  updatePlayer() {
    this.sharedService.updatePlayer(this.playerForm.value, this.playerForm.value.id).subscribe(res => {
       this.ngOnInit();
       this.selectedPlayer = this.playerForm.value;
       this.showMessage('Player Updated Successfully...!');
    });
  }

  /**
   *  This method used to delete the player.
   */
  deletePlayer() {
    this.sharedService.deletePlayer(this.playerForm.value.id).subscribe(res => {
      this.ngOnInit();
      this.selectedPlayer = {"name":'', "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvP5FbZKDEArvNIEZHFCvHshQ5rKVt0vBbUgXzD9D_VUtQ-or",
      "country":'', "role":'', "id":''};
      this.showMessage('Player Deleted Successfully...!');
    });
  }

  showMessage(displayMsg) {
    this.displayMsg = displayMsg;
    let msg = document.getElementById("toastMsg");
    msg.className = "show";
    setTimeout(() => (msg.className = msg.className.replace("show", "")), 3000);
  }

}
