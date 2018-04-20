import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-read-tasks',
  templateUrl: './read-tasks.component.html',
  styleUrls: ['./read-tasks.component.css'],
  providers: [TaskService]
})
export class ReadTasksComponent implements OnInit {


  @Output() show_create_task_event = new EventEmitter();

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  // methods that we will use later
  createTask() {
    this.show_create_task_event.emit({
      title: "Create Task"
    });
  }
  readOneTask(_id) { }
  updateTask(_id) { }
  deleteTask(_id) { }

  ngOnInit() {
    this.taskService.readTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

}
