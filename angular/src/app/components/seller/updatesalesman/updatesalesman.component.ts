import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GlobalService } from '../../../global.service';
import { UpdatesalesmanService } from '../../../services/seller/updatesalesman.service';

@Component({
  selector: 'app-updatesalesman',
  templateUrl: './updatesalesman.component.html',
  styleUrls: ['./updatesalesman.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UpdatesalesmanComponent implements OnInit {
  salesman_update_form: FormGroup;
  SalespersonID : string;
  constructor(
    private http: Http,
    private salesmanUpdate: UpdatesalesmanService,
    public global: GlobalService,
    public dialogRef: MatDialogRef<UpdatesalesmanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.salesman_update_form = new FormGroup({
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
    this.SalespersonID = this.data.id;
    this.salesman_update_form.setValue({
      username: this.data.name,
      password: this.data.password,
      confirm: this.data.password,
      street: this.data.street,
      city: this.data.city,
      state: this.data.state,
      zipcode: this.data.zipcode,
      email: this.data.email,
      job: this.data.job,
      salary: this.data.salary,
    });
    console.log(this.SalespersonID);
  }

  UpdateSalesman(): void{
    let samplesalesman: any = {
      SalespersonID: this.SalespersonID,
      Name: this.salesman_update_form.get('username').value,
      Password: this.salesman_update_form.get('password').value,
      Street: this.salesman_update_form.get('street').value,
      City: this.salesman_update_form.get('city').value,
      State: this.salesman_update_form.get('state').value,
      Zipcode: this.salesman_update_form.get('zipcode').value,
      Email: this.salesman_update_form.get('email').value,
      Job: this.salesman_update_form.get('job').value,
      Salary: this.salesman_update_form.get('salary').value,
      StoreID: this.global.id,
    };

    this.salesmanUpdate.update(samplesalesman).subscribe(
      (jsonData) => {
        if (jsonData.submitstatus) {
          this.salesman_update_form.reset();
          this.dialogRef.close('true');
        }
      },
      (err) => console.error(err),
      () => console.log("observable complete")
    );
  }

}
