import { Component, OnInit } from '@angular/core';
import {Colors} from "../button/button.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public Colors = Colors;
  title = 'Angular Tasker';

  constructor() { }

  ngOnInit(): void {
  }


  toggleAddTask = () =>{
    console.log("toggleAddTask()");
  }
}
