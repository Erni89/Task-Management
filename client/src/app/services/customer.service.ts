import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../interfaces/customer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    public http: HttpClient,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  public url: string = 'http://localhost:3001/customer';

  addCustomer(data: Customer) {
    return this.http.post(this.url, data, {
      headers: { 'content-type': 'application/json' },
    });
  }
  getAllCustomer() {
    return this.http.get(this.url);
  }
  openSnackBar(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000,
    });
  }
}
