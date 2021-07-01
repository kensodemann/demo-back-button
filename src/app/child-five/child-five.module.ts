import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildFivePageRoutingModule } from './child-five-routing.module';

import { ChildFivePage } from './child-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildFivePageRoutingModule
  ],
  declarations: [ChildFivePage]
})
export class ChildFivePageModule {}
