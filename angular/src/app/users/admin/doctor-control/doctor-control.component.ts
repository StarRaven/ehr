import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DoctorAddComponent } from '../doctor-add/doctor-add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-control',
  templateUrl: './doctor-control.component.html',
  styleUrls: ['./doctor-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DoctorControlComponent implements OnInit {
  displayedColumns = ['uid', 'username', 'operations'];
  dataSource = new MatTableDataSource<Doctor>();
  doctors: Doctor[] = [];
  uids: number;

  constructor(public dialog: MatDialog, public router: Router) {
    let d = new Doctor();
    d.uid = 0;
    d.username = 'doctor1';
    this.doctors.push(d);
    d = new Doctor();
    d.uid = 1;
    d.username = 'doctor2';
    this.doctors.push(d);
    this.dataSource = new MatTableDataSource<Doctor>(this.doctors);
  }

  ngOnInit() {
    this.uids = 1;
  }

  deleteDoctor(uid: number) {
    const newdoctors: Doctor[] = [];
    for (let i = 0; i < this.doctors.length; i++) {
      if (this.doctors[i].uid !== uid) {
        newdoctors.push(this.doctors[i]);
      }
    }
    this.doctors = newdoctors;
    this.dataSource = new MatTableDataSource<Doctor>(this.doctors);
  }

  addDoctor() {
    const dialogRef = this.dialog.open(DoctorAddComponent, {
      width: '360px',
      data: this.uids,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.uids++;
      const newdoctor: Doctor = new Doctor();
      newdoctor.uid = result.uid;
      newdoctor.username = result.username;
      this.doctors.push(newdoctor);
      this.dataSource = new MatTableDataSource<Doctor>(this.doctors);
    });
  }
}

class Doctor {
  uid: number;
  username: string;
}
