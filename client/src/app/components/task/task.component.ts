import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    public customerService: CustomerService,
    public taskService: TaskService,
    public router: Router
  ) {}
  public allTask: {
    _id: string;
    created: Date;
    completed: boolean;
    description: string;
    customer: string;
  }[] = [];

  ngOnInit(): void {
    this.taskService.getAllTask().subscribe(
      (res: any) => {
        if (!res.err && res.answer.length > 0) {
          this.customerService.openSnackBar(res.msg);
          this.allTask = res.answer;
        }
      },
      (err: any) => {
        this.customerService.openSnackBar(err.name);
      }
    );
  }

  public compliedTask(_id: any, event: any) {
    this.taskService
      .compliedTask({ id: _id, completed: event.checked })
      .subscribe(
        (res: any) => {
          this.customerService.openSnackBar(res.msg);
        },
        (err: any) => {
          this.customerService.openSnackBar(err.name);
        }
      );
  }
  displayedColumns: string[] = ['Description', 'name', 'date', 'completed'];
}
