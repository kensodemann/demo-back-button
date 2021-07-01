import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.page.html',
  styleUrls: ['./child-four.page.scss']
})
export class ChildFourPage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  openChild() {
    this.navController.navigateForward(['tabs', 'tab1', 'child-five']);
  }
}
