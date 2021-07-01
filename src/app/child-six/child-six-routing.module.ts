import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildSixPage } from './child-six.page';

const routes: Routes = [
  {
    path: '',
    component: ChildSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildSixPageRoutingModule {}
