import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Colors } from "../button/button.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public colors = Colors;
  randomColor: Colors = Math.round(Math.random() * 7)
  title = 'Angular Tasker';
  isShowingAddTask = false;
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.isShowingAddTask = value)
  }

  ngOnInit(): void { }

  toggleAddTask = () =>
    this.uiService.toggleAddTask();


}
