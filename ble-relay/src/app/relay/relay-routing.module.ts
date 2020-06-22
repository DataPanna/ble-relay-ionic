import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelayPage } from './relay.page';

const routes: Routes = [
  {
    path: '',
    component: RelayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelayPageRoutingModule {}
