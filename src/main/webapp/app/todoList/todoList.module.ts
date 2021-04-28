import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from 'app/shared/shared.module';
import { TODO_ROUTE } from '../todoList/todoList.route';
import { TodoListComponent } from '../todoList/todo-list/todo-list.component';
import { FormTodoListComponent } from '../todoList/form-todo-list/form-todo-list.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([TODO_ROUTE]), NgxPaginationModule],
  declarations: [TodoListComponent, FormTodoListComponent],
})
export class TodolistModule {}
