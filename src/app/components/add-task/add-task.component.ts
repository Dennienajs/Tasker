import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from "../../Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleModal: EventEmitter<Task> = new EventEmitter();

  task: Task;
  isShowingAddTask = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.task = { text: "", day: asString(getFormattedDate()), reminder: false };
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
    this.task = { text: "", day: asString(getFormattedDate()), reminder: false };
    this.toggleIsShowingAddTask();
  }

}


const getFormattedDate = () => {
  let date = new Date().toLocaleDateString('da-dk', { day: 'numeric' })
  let month = new Date().toLocaleDateString('da-dk', { month: 'long' })
  let year = new Date().toLocaleDateString('da-dk', { year: 'numeric' })
  let hour = new Date().toLocaleTimeString('da-dk', { hour: 'numeric' })
  let min = new Date().toLocaleTimeString('da-dk', { minute: 'numeric' })

  const formattedDate = `${date} ${month} ${year} - ${hour}:${min}`

  console.log(formattedDate) // 26-March-2022

  return formattedDate
}

const asString = (input: any) => "" + input;
