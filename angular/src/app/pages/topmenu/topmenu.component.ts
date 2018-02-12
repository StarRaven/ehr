import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopmenuComponent implements OnInit {

  constructor(public global: GlobalService, private router: Router) { }

  Logout() {
    this.router.navigate(['users']);
  }

  ngOnInit() {

  }

}
