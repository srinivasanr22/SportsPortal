import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input()
  public playerList = [];

  @Output()
  public selectedPlayer: EventEmitter<this> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  /**
   * This method is used to emit the event back to Parent Comp.
   * @param data 
   * @param country 
   */
  selectedData(data): any {
    this.selectedPlayer.emit(data);
  }

}
