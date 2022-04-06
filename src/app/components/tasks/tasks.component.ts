import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  isLoading: boolean = true;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }


  loadTasks = () => {
    this.taskService
      .getTasks()
      .subscribe(tasks => {
        this.tasks = tasks
        this.isLoading = false;
      });
  }

  deleteTask = (task: Task) => {
    this.taskService
      .deleteTask(task)
      .subscribe(_ => this.tasks.filter(t => t.id !== task.id))
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  toggleReminder = (task: Task) => {
    task.reminder = !task.reminder;
    this.taskService
      .updateTask(task)
      .subscribe();
  }

  addTask = (task: Task) =>
    this.taskService
      .addTask(task)
      .subscribe(_ => this.tasks.push(task));
}
