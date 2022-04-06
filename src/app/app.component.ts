import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class={{classes}}>
    <app-header></app-header>
    <app-tasks></app-tasks>
  </div>
  `
})
export class AppComponent {
  classes = "container rounded max-w-5xl w-1/2 min-h-5/6 p-4 shadow-lg shadow-slate-400/50 dark:shadow-slate-800 dark:bg-gray-800";
}
