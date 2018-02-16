import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'page-diagnostic',
  templateUrl: 'diagnostic.html'
})
export class DiagnosticPage {

  private camera :boolean = false;
  private bluetooth :boolean = false;
  private location :boolean = false;
  private wifi :boolean = false;

  constructor(public navCtrl: NavController, private diagnostic: Diagnostic) {
    this.diagnostic.isCameraAvailable()
      .then((isAvailable) => { this.camera = isAvailable })
      .catch((e) => console.error(e));

    this.diagnostic.isBluetoothAvailable()
      .then((isAvailable) => { this.bluetooth = isAvailable })
      .catch((e) => console.error(e));

    this.diagnostic.isLocationAvailable()
      .then((isAvailable) => { this.location = isAvailable })
      .catch((e) => console.error(e));

    this.diagnostic.isWifiAvailable()
      .then((isAvailable) => { this.wifi = isAvailable })
      .catch((e) => console.error(e));
  }

}
