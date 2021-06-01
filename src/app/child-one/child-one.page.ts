import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.page.html',
  styleUrls: ['./child-one.page.scss']
})
export class ChildOnePage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  openChild() {
    this.navController.navigateForward(['tabs', 'tab1', 'child-two']);
  }
}
