import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildTwoPage } from './child-two.page';

const routes: Routes = [
  {
    path: '',
    component: ChildTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildTwoPageRoutingModule {}
