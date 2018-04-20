import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show_read_tasks_html = true;

  show_create_task_html = false;
  show_read_one_task_html = false;
  show_update_task_html = false;
  show_delete_task_html = false;
  showCreateTask($event) {

    // set title
    this.title = $event.title;
    console.log(this.title);

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_create_task_html = true;
  }

  // show tasks list
  showReadTasks($event) {
    // set title
    this.title = $event.title;
    console.log(this.title);

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_tasks_html = true;
  }

  // hide all html views
  hideAll_Html() {
    this.show_read_tasks_html = false;
    this.show_read_one_task_html = false;
    this.show_create_task_html = false;
    this.show_update_task_html = false;
    this.show_delete_task_html = false;
  }
}
