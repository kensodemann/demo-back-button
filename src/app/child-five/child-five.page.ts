import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-five',
  templateUrl: './child-five.page.html',
  styleUrls: ['./child-five.page.scss']
})
export class ChildFivePage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  openChild() {
    this.navController.navigateForward(['tabs', 'tab1', 'child-six']);
  }
}
