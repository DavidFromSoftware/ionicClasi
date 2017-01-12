import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PublicationsPage } from '../publications/publications';
import { Sellpage } from '../publications/sell';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
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
