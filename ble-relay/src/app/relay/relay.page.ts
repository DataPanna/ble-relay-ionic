import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay',
  templateUrl: './relay.page.html',
  styleUrls: ['./relay.page.scss'],
})
export class RelayPage {

  devices: any[] = [];
  statusMessage: string;

  constructor() {
                
  }

  scan() {
    console.log('scan clicked');
  }
  
}