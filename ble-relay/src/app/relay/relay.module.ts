import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelayPageRoutingModule } from './relay-routing.module';

import { RelayPage } from './relay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelayPageRoutingModule
  ],
  declarations: [RelayPage]
})
export class RelayPageModule {}
