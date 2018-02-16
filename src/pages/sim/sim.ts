import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sim } from '@ionic-native/sim';

@Component({
  selector: 'page-sim',
  templateUrl: 'sim.html'
})
export class SimPage {

  private hasPermission: boolean;
  private simInfo: any;

  constructor(public navCtrl: NavController, private sim: Sim) {
    this.doesItHavePermission();
  }

  public doesItHavePermission() {
    this.sim.hasReadPermission()
      .then((info) => {
        if (info === true) {
          this.hasPermission = true;
          this.getInfo();
        }
        else {
          this.requestPermission();
        }
      }
      ).catch(() => console.log('Permission Error.'));
  }

  public requestPermission() {
    this.sim.requestReadPermission()
      .then(() => console.log('Permission granted.'))
      .catch(() => console.log('Permission denied.'));
  }

  public getInfo() {
    this.sim.getSimInfo()
      .then((info) => {
        this.simInfo = info;
        console.log(this.simInfo);
      }
      ).catch((err) => console.log('Unable to get sim info: ', err));
  }

}
