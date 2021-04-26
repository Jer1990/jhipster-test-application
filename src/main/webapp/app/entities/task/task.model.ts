import * as dayjs from 'dayjs';

export interface ITask {
  id?: number;
  title?: string;
  isChecked?: boolean;
  dateAdd?: dayjs.Dayjs;
  deadLine?: dayjs.Dayjs;
}

export class Task implements ITask {
  constructor(
    public id?: number,
    public title?: string,
    public isChecked?: boolean,
    public dateAdd?: dayjs.Dayjs,
    public deadLine?: dayjs.Dayjs
  ) {
    this.isChecked = this.isChecked ?? false;
  }
}

export function getTaskIdentifier(task: ITask): number | undefined {
  return task.id;
}
