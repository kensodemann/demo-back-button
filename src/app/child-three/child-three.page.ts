import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.page.html',
  styleUrls: ['./child-three.page.scss']
})
export class ChildThreePage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  openChild() {
    this.navController.navigateForward(['tabs', 'tab1', 'child-four']);
  }
}
