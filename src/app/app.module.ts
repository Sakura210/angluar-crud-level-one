import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReadTasksComponent } from './read-tasks/read-tasks.component';
import { HttpModule } from '@angular/http';
import { CreateTaskComponent } from './create-task/create-task.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadOneTaskComponent } from './read-one-task/read-one-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadTasksComponent,
    CreateTaskComponent,
    ReadOneTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
