import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildSixPageRoutingModule } from './child-six-routing.module';

import { ChildSixPage } from './child-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildSixPageRoutingModule
  ],
  declarations: [ChildSixPage]
})
export class ChildSixPageModule {}
