import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildThreePage } from './child-three.page';

const routes: Routes = [
  {
    path: '',
    component: ChildThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildThreePageRoutingModule {}
