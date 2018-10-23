import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userName = '';

  constructor(private router: Router) { }

  setUserName() {
    this.userName = localStorage.getItem('userName');
  }

  logout() {
    localStorage.setItem('userName', '');
    localStorage.setItem('userRole', '');
    this.userName = '';
    this.router.navigateByUrl('');
  }
}
