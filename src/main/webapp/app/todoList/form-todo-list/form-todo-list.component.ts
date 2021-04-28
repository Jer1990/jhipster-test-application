import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'app/entities/task/service/task.service';
import { ITask, Task } from 'app/entities/task/task.model';
import * as dayjs from 'dayjs';

@Component({
  selector: 'jhi-form-todo-list',
  templateUrl: './form-todo-list.component.html',
  styleUrls: ['./form-todo-list.component.scss'],
})
export class FormTodoListComponent implements OnInit {
  todoForm: FormGroup;
  minDate: string = dayjs().format('YYYY-MM-DD');
  @Output() newTask: EventEmitter<ITask> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      deadLine: ['', Validators.required],
    });
  }

  strUcFirst(string: string) {
    return (string + '').charAt(0).toUpperCase() + string.substr(1);
  }

  onSaveTodo(): void {
    const title = this.strUcFirst(this.todoForm.get('title').value);
    const isChecked = false;
    const dateAdd = dayjs(new Date());
    const deadLine = dayjs(this.todoForm.get('deadLine').value);

    const newTask: ITask = new Task(null, title, isChecked, dateAdd, deadLine);
    this.taskService.create(newTask).subscribe(() => {
      this.newTask.emit();
    });
  }
}
