import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Diagnostic } from '@ionic-native/diagnostic';
import { Device } from '@ionic-native/device';
import { Sim } from '@ionic-native/sim';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { DiagnosticPage } from '../pages/diagnostic/diagnostic';
import { DevicePage } from '../pages/device/device';
import { SimPage } from '../pages/sim/sim';
import { UniqueDeviceIdPage } from '../pages/unique-device-id/unique-device-id';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DevicePage,
    SimPage,
    DiagnosticPage,
    UniqueDeviceIdPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DevicePage,
    SimPage,
    DiagnosticPage,
    UniqueDeviceIdPage,
    TabsPage
  ],
  providers: [
    Diagnostic,
    Device,
    Sim,
    UniqueDeviceID,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
