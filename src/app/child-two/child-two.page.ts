import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.page.html',
  styleUrls: ['./child-two.page.scss']
})
export class ChildTwoPage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  openChild() {
    this.navController.navigateForward(['tabs', 'tab1', 'child-three']);
  }
}
