import { Component, OnInit } from '@angular/core';
import { canDeactiveInterface } from '../deactivate.guard';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit, canDeactiveInterface {

  constructor() { }

  ngOnInit(): void {
  }

  confirmBox() {
    return confirm("I hope you have read all the rules, Are you sure you want to leave?");
  }

}
