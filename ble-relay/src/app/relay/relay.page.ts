import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-relay',
  templateUrl: './relay.page.html',
  styleUrls: ['./relay.page.scss'],
})
export class RelayPage {

  devices: any[] = [];
  statusMessage: string;

  constructor(private ble: BLE,
              private toast: ToastController,
              private ngZone: NgZone) {
  }

  scan() {
    this.statusMessage = 'Scanning now...';
    this.devices = [];

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );
    setTimeout(this.setStatus.bind(this), 25000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  // If location permission is denied, you'll end up here
  async scanError(error) {
    this.setStatus('Error ' + error);
    const toast = await this.toast.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }
}