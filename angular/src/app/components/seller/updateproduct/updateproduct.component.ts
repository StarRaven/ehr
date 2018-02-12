import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UpdateproductService } from '../../../services/seller/updateproduct.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GlobalService } from '../../../global.service';
import { Category } from '../../category';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateproductComponent implements OnInit {
  product_update_form: FormGroup;
  categories: Category[] = [];
  constructor(
    private http: Http,
    private productUpdate: UpdateproductService,
    public global: GlobalService,
    public dialogRef: MatDialogRef<UpdateproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.product_update_form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      ISBN: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      basic: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      kind: new FormControl(null, [Validators.required]),
    });
  }

  UpdateProduct(): void {
    let sampleproduct: any = {
      ProductID: this.data.id,
      Name: this.product_update_form.get('name').value,
      Author: this.product_update_form.get('author').value,
      ISBN: this.product_update_form.get('ISBN').value,
      Description: this.product_update_form.get('description').value,
      Amount: this.product_update_form.get('amount').value,
      Price: this.product_update_form.get('price').value,
      Basic: this.product_update_form.get('basic').value,
      KindID: this.product_update_form.get('kind').value,
      StoreID: this.global.id,
    };

    this.productUpdate.update(sampleproduct).subscribe(
      (jsonData) => {
        if (jsonData.updatestatus) {
          this.product_update_form.reset();
          this.dialogRef.close('true');
        }
      },
      (err) => console.error(err),
      () => console.log("observable complete")
    );
  }

  ngOnInit() {
    console.log(this.data);
    //this.SalespersonID = this.data.id;
    this.product_update_form.setValue({
      name: this.data.name,
      author: this.data.author,
      ISBN: this.data.ISBN,
      description: this.data.description,
      amount: this.data.amount,
      basic: this.data.basic,
      price: this.data.price,
      kind: this.data.kindid
    });
    //console.log(this.SalespersonID);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('/api/get/kind', { headers: headers }).subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        for (let entry of jsonDataBody) {
          let r: Category = {
            id: entry[0],
            name: entry[1]
          };
          this.categories.push(r);
        };
        console.log(this.categories);
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }

}
