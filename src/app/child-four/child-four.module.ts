import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildFourPageRoutingModule } from './child-four-routing.module';

import { ChildFourPage } from './child-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildFourPageRoutingModule
  ],
  declarations: [ChildFourPage]
})
export class ChildFourPageModule {}
