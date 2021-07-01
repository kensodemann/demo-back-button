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
  },
  {
    path: 'child-three',
    loadChildren: () => import('../child-three/child-three.module').then(m => m.ChildThreePageModule)
  },
  {
    path: 'child-four',
    loadChildren: () => import('../child-four/child-four.module').then(m => m.ChildFourPageModule)
  },
  {
    path: 'child-five',
    loadChildren: () => import('../child-five/child-five.module').then(m => m.ChildFivePageModule)
  },
  {
    path: 'child-six',
    loadChildren: () => import('../child-six/child-six.module').then(m => m.ChildSixPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
