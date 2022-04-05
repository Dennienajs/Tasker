import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTrashCan as deleteIcon } from '@fortawesome/free-solid-svg-icons';
import { Task } from "../../Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() isLoading: boolean = false;
  @Input() task!: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTaskReminder: EventEmitter<Task> = new EventEmitter();

  icon = deleteIcon;

  constructor() { }

  ngOnInit(): void { }

  onDelete = (task: Task) => this.onDeleteTask.emit(task);
  onToggleReminder = (task: Task) => this.onToggleTaskReminder.emit(task);
}


