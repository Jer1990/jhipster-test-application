import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTodoListComponent } from './form-todo-list.component';

describe('FormTodoListComponent', () => {
  let component: FormTodoListComponent;
  let fixture: ComponentFixture<FormTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormTodoListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
