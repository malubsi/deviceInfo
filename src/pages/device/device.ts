import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class DevicePage {

  constructor(public navCtrl: NavController, private device: Device) {
    console.log(this.device);
  }

}
