import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildFivePage } from './child-five.page';

const routes: Routes = [
  {
    path: '',
    component: ChildFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildFivePageRoutingModule {}
