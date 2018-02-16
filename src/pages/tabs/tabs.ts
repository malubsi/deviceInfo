import { Component } from '@angular/core';

import { DiagnosticPage } from '../diagnostic/diagnostic';
import { DevicePage } from '../device/device';
import { SimPage } from '../sim/sim';
import { UniqueDeviceIdPage } from '../unique-device-id/unique-device-id';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DiagnosticPage;
  tab2Root = DevicePage;
  tab3Root = SimPage;
  tab4Root = UniqueDeviceIdPage;

  constructor() {

  }
}
