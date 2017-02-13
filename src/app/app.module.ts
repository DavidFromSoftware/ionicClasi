import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { HomePage } from '../pages/home/home';
import { PublicationsPage, PublicationDetails } from '../pages/publications/publications';
import { TabsPage } from '../pages/tabs/tabs';
import { PublicationService } from '../pages/publications/service';
import { SessionService } from '../pages/profile/service';
import { LoginPage } from '../pages/profile/login';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    HomePage,
    PublicationsPage,
    PublicationDetails,
    TabsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    HomePage,
    PublicationsPage,
    PublicationDetails,
    TabsPage,
    LoginPage
  ],
  providers: [ HttpModule, SessionService, PublicationService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {

  constructor(){}
}
