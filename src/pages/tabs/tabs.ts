import { Component } from '@angular/core';

import { PublicationsPage } from '../publications/publications';
import { AboutPage } from '../about/about';
import { LoginPage } from '../profile/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PublicationsPage;
  tab2Root: any = AboutPage;
  tab3Root: any = LoginPage;

  constructor() {

  }
}
