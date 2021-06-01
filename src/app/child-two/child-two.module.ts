import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildTwoPageRoutingModule } from './child-two-routing.module';

import { ChildTwoPage } from './child-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildTwoPageRoutingModule
  ],
  declarations: [ChildTwoPage]
})
export class ChildTwoPageModule {}
