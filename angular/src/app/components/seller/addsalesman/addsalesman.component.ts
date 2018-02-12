import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GlobalService } from '../../../global.service';
import { AddsalesmanService } from '../../../services/seller/addsalesman.service';

@Component({
  selector: 'app-addsalesman',
  templateUrl: './addsalesman.component.html',
  styleUrls: ['./addsalesman.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddsalesmanComponent implements OnInit {
  salesman_add_form: FormGroup;
  constructor(
    private http: Http,
    private salesmanAdd: AddsalesmanService,
    public global: GlobalService,
    public dialogRef: MatDialogRef<AddsalesmanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.salesman_add_form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirm: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zipcode: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      job: new FormControl(null, [Validators.required]),
      salary: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
  }
  AddSalesman(): void{
    let samplesalesman: any = {
      Name: this.salesman_add_form.get('username').value,
      Password: this.salesman_add_form.get('password').value,
      Street: this.salesman_add_form.get('street').value,
      City: this.salesman_add_form.get('city').value,
      State: this.salesman_add_form.get('state').value,
      Zipcode: this.salesman_add_form.get('zipcode').value,
      Email: this.salesman_add_form.get('email').value,
      Job: this.salesman_add_form.get('job').value,
      Salary: this.salesman_add_form.get('salary').value,
      StoreID: this.global.id,
    };

    this.salesmanAdd.add(samplesalesman).subscribe(
      (jsonData) => {
        if (jsonData.submitstatus) {
          this.salesman_add_form.reset();
          this.dialogRef.close();
        }
      },
      (err) => console.error(err),
      () => console.log("observable complete")
    );
  }


}
