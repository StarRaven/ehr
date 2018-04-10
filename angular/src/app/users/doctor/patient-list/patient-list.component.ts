import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../../global.service';
import { UserService } from '../../../services/user.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit, AfterViewInit {

  displayedColumns = ['avatar', 'name', 'condition1', 'condition2', 'condition3', 'operation'];
  dataSource: MatTableDataSource<UserData>;
  dataSource2: MatTableDataSource<UserData>;
  dataSource3: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  condition1: string;
  condition2: string;
  condition3: string;

  constructor(
    private router: Router,
    public global: GlobalService,
    public us: UserService
  ) {
    const users: UserData[] = [];
    const users2: UserData[] = [];

    for (let i = 1; i <= 100; i++) {
      users.push(this.createNewUser(i));
      users2.push(this.createNewUser(i));
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.dataSource2 = new MatTableDataSource(users2);
  }

  ngOnInit() {
    const users: UserData[] = [];
    const users2: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
      users.push(this.createNewUser(i));
      users2.push(this.createNewUser(i));
    }

    this.createMotherChild();

    if (this.global.username === 'doctor1') {
      this.condition1 = 'FALL FREQ';
      this.condition2 = 'SKIN BREAKDOWN';
      this.condition3 = 'DEVICE BREAKDOWN';
    } else if (this.global.username === 'doctor2') {
      this.condition1 = 'HEIGHT';
      this.condition2 = 'WEIGHT';
      this.condition3 = 'DIAGNOSE';
    }
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.dataSource2 = new MatTableDataSource(users2);
  }

  /**
 * Set the paginator and sort after the view init since this component will
 * be able to query its view for the initialized paginator and sort.
 */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.dataSource2.filter = filterValue;
    this.dataSource3.filter = filterValue;
  }

  goDashboard(patient: UserData) {
    console.log(patient);
    this.global.patientAvator = patient.avatar;
    this.global.patientName = patient.name;
    this.router.navigate(['doctor/dashboard']);
  }

  createMotherChild() {
    /*
    const users3: UserData[] = [];
    users3.push({
      avatar: '/assets/avatars/100.png',
      name: 'Yemima Tabuni',
      condition1: '123-4567',
      condition2: 'Perempuan',
      condition3: '03/01/1980',
    });
    users3.push({
      avatar: '/assets/avatars/101.png',
      name: 'Simon Magai',
      condition1: '123-458',
      condition2: 'Laki-laki',
      condition3: '02/10/2017',
    });
    users3.push({
      avatar: '/assets/avatars/102.png',
      name: 'Maria Magai',
      condition1: '123-459',
      condition2: 'Perempuan',
      condition3: '02/03/2015',
    });*/
    this.us.getPatientList().subscribe(
      (jsonData) => {
        let jsonDataBody = jsonData.json();
        console.log(jsonDataBody);
        this.dataSource3 = new MatTableDataSource(jsonDataBody);
        this.dataSource3.paginator = this.paginator;
        this.dataSource3.sort = this.sort;
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => console.log("observable complete")
    );
  }
  /** Builds and returns a new User. */
  createNewUser(id: number): UserData {
    if (this.global.username === 'doctor1') {
      const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
      const condition1: Condition = {
        label: 'FALL FREQ',
        value: Math.round(Math.random() * 2)
      };
      const condition2: Condition = {
        label: 'SKIN BREAKDOWN',
        value: Math.round(Math.random() * 2)
      };
      const condition3: Condition = {
        label: 'DEVICE BREAKDOWN',
        value: Math.round(Math.random() * 2)
      };
      return {
        avatar: '/assets/avatars/' + Math.round(Math.random() * 8 + 1).toString() + '.png',
        name: name,
        condition1: condition1.value,
        condition2: condition2.value,
        condition3: condition3.value,
      };
    } else if (this.global.username === 'doctor2') {
      const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
      const condition1: Condition = {
        label: '',
        value: Math.round(Math.random() * 40) + 150
      };
      const condition2: Condition = {
        label: '',
        value: Math.round(Math.random() * 40) + 40
      };
      const condition3: Condition = {
        label: '',
        value: Math.round(Math.random() * 2)
      };
      return {
        avatar: '/assets/avatars/' + Math.round(Math.random() * 8 + 1).toString() + '.png',
        name: name,
        condition1: condition1.value,
        condition2: condition2.value,
        condition3: condition3.value,
      };
    }
  }
}



/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  avatar: string;
  name: string;
  condition1: any;
  condition2: any;
  condition3: any;
}

interface Condition {
  label: string;
  value: number;
}
