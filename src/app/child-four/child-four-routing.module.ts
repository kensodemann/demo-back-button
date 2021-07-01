import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildFourPage } from './child-four.page';

const routes: Routes = [
  {
    path: '',
    component: ChildFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildFourPageRoutingModule {}
