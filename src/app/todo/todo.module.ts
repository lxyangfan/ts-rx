import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/Http';
import { TodoComponent } from './todo.component';
import { TodoService } from './shared/todo.service';

@NgModule({
  declarations: [
    TodoComponent,
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ TodoService ],
  exports: [ TodoComponent ]
})
export class TodoModule { }
