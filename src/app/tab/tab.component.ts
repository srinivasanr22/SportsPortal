import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `<div class="tab-content">
               <ng-content></ng-content>
            </div>`,
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input()
  public active: boolean;

  @Input('title')
  public title: string;

  @HostBinding('style.display')
  public get isActive() {
    return this.active ? 'block' : 'none';  
  }

}