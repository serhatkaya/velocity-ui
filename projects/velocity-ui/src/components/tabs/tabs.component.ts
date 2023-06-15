import { Component, ContentChildren, QueryList } from '@angular/core';
import { tabAnimation } from '../../animations/tabAnimation';
import { VelocityTabComponent } from './tab/tab.component';

@Component({
  selector: 'vui-tabs',
  templateUrl: './tabs.component.html',
  animations: [tabAnimation],
})
export class VelocityTabsComponent {
  @ContentChildren(VelocityTabComponent)
  tabs!: QueryList<VelocityTabComponent>;
  currentTab = 0;

  ngAfterContentInit() {
    this.tabs.toArray()[this.currentTab].active = true;
  }

  changeTab(index: number) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    this.tabs.toArray()[index].active = true;
    this.currentTab = index;
  }
}
