import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Colors } from "../button/button.component";
import { faMoon as moon, faSun as sun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public colors = Colors;
  randomColor: Colors = Math.round(Math.random() * 7)
  title = 'Tasker';
  isShowingAddTask = false;
  subscription: Subscription;
  darkmodeIcon = sun;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.isShowingAddTask = value)
  }

  ngOnInit(): void { }

  toggleAddTask = () =>
    this.uiService.toggleAddTask();

  toggleDarkMode() {
    toggleDarkMode();
    if (this.darkmodeIcon === moon) {
      this.darkmodeIcon = sun;
    } else {
      this.darkmodeIcon = moon;
    }
  }

}

function toggleDarkMode() {
  console.log("toggleDarkMode()");
  const key = "dark";

  var root = document.getElementById("htmlRoot")!;

  if (root.classList.contains(key)) {
    root.classList.remove(key);
    localStorage.setItem(key, "false");
    console.log("removed dark");
  } else {
    root.classList.add(key);
    localStorage.setItem(key, "true");
    console.log("added dark");
  }
}
