import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-six',
  templateUrl: './child-six.page.html',
  styleUrls: ['./child-six.page.scss']
})
export class ChildSixPage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  openChild() {
    this.navController.navigateBack(['tabs', 'tab1', 'child-two']);
  }
}
