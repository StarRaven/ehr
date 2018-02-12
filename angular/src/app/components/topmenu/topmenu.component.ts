import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '../../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopmenuComponent implements OnInit {

  constructor(public global: GlobalService,
  private router: Router) { }

  Logout(): void {
    this.global.username = "";
    this.global.login = false;
    this.global.id = '';
    this.global.role = '';
    this.router.navigate(['users']);
  }

  ngOnInit() {
    console.log(this.global);
  }

}
