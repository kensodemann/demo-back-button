import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {
    path: 'child-one',
    loadChildren: () => import('../child-one/child-one.module').then(m => m.ChildOnePageModule)
  },
  {
    path: 'child-two',
    loadChildren: () => import('../child-two/child-two.module').then(m => m.ChildTwoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
