import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Component({
  selector: 'page-unique-device-id',
  templateUrl: 'unique-device-id.html'
})
export class UniqueDeviceIdPage {

  private uuid: any;

  constructor(public navCtrl: NavController, private uniqueDeviceID: UniqueDeviceID) {
    this.uniqueDeviceID.get()
      .then((uuid) => {
        this.uuid = uuid;
      }).catch((error) => console.log(error));
  }

}
