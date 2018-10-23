import { Component , Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {


  @Input()
  public playerList = [];

  @Output()
  public selectedPlayer : EventEmitter<this> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  selectedData(data, country): any {
    let player = {...data, "country":country}
    this.selectedPlayer.emit(player);
  }
}
