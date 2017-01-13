import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PublicationsPage } from '../pages/publications/publications';
import { TabsPage } from '../pages/tabs/tabs';
import { PublicationService } from '../pages/publications/service';
import { SessionService } from '../pages/profile/service';
import { LoginPage } from '../pages/profile/login';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PublicationsPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PublicationsPage,
    TabsPage,
    LoginPage
  ],
  providers: [ HttpModule, SessionService, PublicationService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
