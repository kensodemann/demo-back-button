import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'child-one',
    loadChildren: () => import('./child-one/child-one.module').then( m => m.ChildOnePageModule)
  },
  {
    path: 'child-two',
    loadChildren: () => import('./child-two/child-two.module').then( m => m.ChildTwoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
