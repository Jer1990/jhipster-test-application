import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/entities/task/service/task.service';
import { ITask } from 'app/entities/task/task.model';
import * as _ from 'lodash';

@Component({
  selector: 'jhi-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  toDoList: ITask[] = [];
  toDoListFilter: ITask[] = [];
  isLoading = false;
  p = 1;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.isLoading = true;

    this.taskService.query().subscribe(
      (res: HttpResponse<ITask[]>) => {
        this.isLoading = false;
        this.toDoList = res.body ?? [];
        this.toDoListFilter = this.toDoList;
        console.log(this.toDoList);
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  switchMode(task) {
    if (task.isChecked) {
      task.isChecked = false;
    } else {
      task.isChecked = true;
    }
    this.taskService.update(task).subscribe();
  }

  orderAlphaAsc() {
    this.toDoListFilter = _.orderBy(this.toDoListFilter, ['title'], ['asc']);
  }

  orderAlphaDesc() {
    this.toDoListFilter = _.orderBy(this.toDoListFilter, ['title'], ['desc']);
  }

  orderDateAsc() {
    this.toDoListFilter = _.orderBy(this.toDoListFilter, ['deadLine'], ['asc']);
  }

  orderDateDesc() {
    this.toDoListFilter = _.orderBy(this.toDoListFilter, ['deadLine'], ['desc']);
  }

  filterDo() {
    this.toDoListFilter = this.toDoList;
    this.toDoListFilter = _.filter(this.toDoList, ['isChecked', true]);
    console.log(this.toDoListFilter);
    console.log(this.toDoList);
  }

  filterNotDo() {
    this.toDoListFilter = this.toDoList;
    this.toDoListFilter = _.filter(this.toDoList, ['isChecked', false]);
  }

  filterAll() {
    this.toDoListFilter = this.toDoList;
  }
}
