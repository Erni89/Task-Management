import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    public customerService: CustomerService,
    public taskService: TaskService,
    public router: Router
  ) {}
  public taskForm: FormGroup;
  public allCustomer: Customer[] = [];

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(
      (res: any) => {
        if (!res.err && res.answer.length > 0) {
          this.customerService.openSnackBar(res.msg);
          this.allCustomer = res.answer;
        }
      },
      (err: any) => {
        this.customerService.openSnackBar(err.name);
      }
    );

    this.taskForm = this.formBuilder.group({
      customer: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  public addTask(): void {
    this.taskService.addNewTask(this.taskForm.value).subscribe(
      (res: any) => {
        this.customerService.openSnackBar(res.msg);
        if (!res.err) {
          this.router.navigateByUrl('/');
        }
      },
      (err: any) => {
        this.customerService.openSnackBar(err.name);
      }
    );
  }
}
