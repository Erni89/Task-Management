import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    public customerService: CustomerService,
    public router: Router
  ) {}
  public customerForm: FormGroup;

  ngOnInit(): void {
    this.customerForm=this.formBuilder.group({
      fullName:['',[Validators.required,Validators.minLength(4)]],
      phoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.minLength(3)]],
      job:['',[Validators.required,Validators.minLength(2)]],
    })
  }

  public addCustomer():void{
    this.customerService.addCustomer(this.customerForm.value).subscribe(
      (res:any)=>{
       this.customerService.openSnackBar(res.msg)
        if(!res.err){
          this.router.navigateByUrl('/')
        }
      },(err:any)=>{
        this.customerService.openSnackBar(err.name)
      
      }
    )
  }
}
