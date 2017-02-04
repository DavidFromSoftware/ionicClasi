import { Component } from '@angular/core';

import { PublicationsPage } from '../publications/publications';
import { FavoritesPage } from '../favorites/favorites';
import { LoginPage } from '../profile/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = PublicationsPage;
  tab2Root: any = FavoritesPage;
  tab3Root: any = LoginPage;
  constructor() {

  }
}
