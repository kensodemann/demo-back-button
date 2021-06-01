import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildOnePageRoutingModule } from './child-one-routing.module';

import { ChildOnePage } from './child-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildOnePageRoutingModule
  ],
  declarations: [ChildOnePage]
})
export class ChildOnePageModule {}
