import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs/Observable';
import { Task } from '../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  create_task_form: FormGroup;
  @Output() show_read_tasks_event = new EventEmitter();

  constructor(private taskService:TaskService,
              formBuilder: FormBuilder) {
                this.create_task_form = formBuilder.group(
                  {
                    name: ["", Validators.required]
                  }
                );
               }

  createtask()
  {
    this.taskService.createTask(this.create_task_form.value)
            .subscribe(
                 task => {
                    // show an alert to tell the user if product was created or not
                    console.log(task);
 
                    // go back to list of products
                    this.readTasks();
                 },
                 error => console.log(error)
             );
  }             
  ngOnInit() {
    
  }

  readTasks()
  {
    this.show_read_tasks_event.emit({title:"Read Tasks"});
  }

}
