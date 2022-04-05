import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleModal: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  task: Task;
  isShowingAddTask = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.task = { text: "", day: new Date(), reminder: false };
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.isShowingAddTask = value);
  }


  ngOnInit(): void { }

  toggleIsShowingAddTask = () => {
    console.log("toggleIsShowingAddTask");
    this.uiService.toggleAddTask();
  }

  onSubmit = () => {
    const { text, day, reminder } = this.task;

    if (!text) {
      alert("Please insert a text ..");
      return;
    }

    console.log(text);
    console.log(day);
    console.log(reminder);

    // add
    this.onAddTask.emit(this.task);

    // reset
    this.task = {
      text: "",
      day: new Date(),
      reminder: false
    };

    this.toggleIsShowingAddTask();
  }

}

